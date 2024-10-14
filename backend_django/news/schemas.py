from ninja import Schema
from typing import List, Optional
from datetime import datetime


class CategorySchema(Schema):
    id: int
    name: str


class TagSchema(Schema):
    id: int
    name: str


class AuthorSchema(Schema):
    id: int
    user: str

    @staticmethod
    def resolve_user(author):
        return author.user.email


class NewsSchema(Schema):
    id: int
    title: str
    content: str
    created_at: datetime
    updated_at: datetime
    category: Optional[CategorySchema] = None
    tags: List[TagSchema] = []
    author: Optional[AuthorSchema] = None
    is_published: bool
    image: Optional[str] = None
