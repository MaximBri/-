import re
from typing import Optional

from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from ninja import Schema
from pydantic import EmailStr, field_validator


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