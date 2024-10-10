import re
from typing import Optional

from django.contrib.auth.hashers import check_password
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.http import JsonResponse, HttpRequest
from rest_framework_simplejwt.tokens import RefreshToken
from ninja import Router, NinjaAPI, Schema
from ninja.errors import ValidationError as NinjaValidationError
from pydantic import EmailStr, field_validator

from users.models import CustomUser

User = CustomUser
router = Router()
api = NinjaAPI()


class RegisterSchema(Schema):
    email: EmailStr
    first_name: str
    last_name: Optional[str] = None
    password: str

    @field_validator('email')
    def validate_email(cls, value):
        try:
            validate_email(value)
        except ValidationError:
            raise ValueError("Invalid email address.")
        return value

    @field_validator('password')
    def validate_password(cls, value):
        if len(value) < 8:
            raise ValueError("Password must be at least 8 characters long.")
        if not re.search(r'\d', value):
            raise ValueError("Password must contain at least one digit.")
        if not re.search(r'[A-Z]', value):
            raise ValueError("Password must contain at least one uppercase letter.")
        return value


class LoginSchema(Schema):
    email: str
    password: str


class RefreshTokenSchema(Schema):
    refresh: str


@router.post("/register")
def register(request: HttpRequest, payload: RegisterSchema):
    user = CustomUser(**payload.dict())
    try:
        user.clean()
    except ValidationError as err:
        raise NinjaValidationError(err.messages)
    if User.objects.filter(email=payload.email).exists():
        return JsonResponse({"error": {"message": "User with this email already exists"}})

    user = User.objects.create_user(
        email=payload.email,
        password=payload.password,
        first_name=payload.first_name,
        last_name=payload.last_name,
    )
    user.save()
    return JsonResponse({"success": {"message": "User created successfully"}})


@router.post("/login")
def login(request, payload: LoginSchema):
    user = User.objects.filter(email=payload.email).first()
    if user is None or not check_password(payload.password, user.password):
        return JsonResponse({"error": {"message": "Invalid credentials"}})

    refresh = RefreshToken.for_user(user)
    return JsonResponse({
        "success": {
            "message": "Login successful",
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {
                "email": user.email,
                "full_name": f'{user.first_name} {user.last_name}' if user.last_name else user.first_name,
            }
        }
    })


@router.post("/auth/refresh")
def refresh_token(request, payload: RefreshTokenSchema):
    try:
        refresh = RefreshToken(payload.refresh)
        access_token = refresh.access_token
        return JsonResponse({
            "success": {
                "message": "Token refreshed successfully",
                "access": str(access_token),
            }
        })
    except Exception as e:
        return JsonResponse({"error": {"message": "Invalid refresh token"}}, status=400)


@router.post("/auth/logout")
def logout(request, payload: RefreshTokenSchema):
    try:
        refresh = RefreshToken(payload.refresh)
        refresh.blacklist()
        return JsonResponse({
            "success": {
                "message": "Successfully logged out"
            }
        })
    except Exception as e:
        return JsonResponse({"error": {"message": "Invalid token"}}, status=400)
