from ninja import Schema
from typing import List
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


class NewsSchema(Schema):
    id: int
    title: str
    content: str
    created_at: datetime
    updated_at: datetime
    category: CategorySchema = None
    tags: List[TagSchema] = []
    author: AuthorSchema = None
    is_published: bool
    image: str = None
