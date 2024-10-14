from ninja import Router
from typing import List
from django.shortcuts import get_object_or_404
from .models import News, Author, Category, Tag
from .schemas import NewsSchema

router = Router()


@router.get("/news", response=List[NewsSchema])
def get_all_news(request):
    return News.objects.filter(is_published=True).order_by('-created_at')


@router.get("/news/author/{author_id}", response=List[NewsSchema])
def get_news_by_author(request, author_id: int):
    author = get_object_or_404(Author, id=author_id)
    return News.objects.filter(author=author, is_published=True).order_by('-created_at')


@router.get("/news/category/{category_id}", response=List[NewsSchema])
def get_news_by_category(request, category_id: int):
    category = get_object_or_404(Category, id=category_id)
    return News.objects.filter(category=category, is_published=True).order_by('-created_at')


@router.get("/news/tag/{tag_id}", response=List[NewsSchema])
def get_news_by_tag(request, tag_id: int):
    tag = get_object_or_404(Tag, id=tag_id)
    return News.objects.filter(tags=tag, is_published=True).order_by('-created_at')
