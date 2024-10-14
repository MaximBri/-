from django.db import models
from users.models import CustomUser


class Category(models.Model):
    name = models.CharField(verbose_name='Категория', max_length=150)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(verbose_name='Тег', max_length=150)

    def __str__(self):
        return self.name


class Author(models.Model):
    user = models.OneToOneField(
        CustomUser,
        verbose_name='Пользователь',
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.user


class News(models.Model):
    title = models.CharField(verbose_name='Заголовок', max_length=255)
    content = models.TextField(verbose_name='Содержание')
    created_at = models.DateTimeField(verbose_name='Дата создания', auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name='Дата обновления', auto_now=True )
    category = models.ForeignKey(
        Category,
        verbose_name='Категория',
        on_delete=models.SET_NULL,
        null=True,
        related_name='news'
    )
    tags = models.ManyToManyField(
        Tag,
        verbose_name='Теги',
        blank=True,
        related_name='news',
    )
    author = models.ForeignKey(
        Author,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name='Автор',
        related_name='news'
    )
    is_published = models.BooleanField(verbose_name='Опубликовано', default=True)
    image = models.ImageField(verbose_name='Изображение', upload_to="news_images/", blank=True, null=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.title
