from django.contrib import admin

from news.models import Category, Author, News, Tag


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    pass


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    pass




