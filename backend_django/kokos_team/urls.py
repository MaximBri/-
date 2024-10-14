from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI

from users.api import router as auth_router
from news.api import router as news_router
from matches.api import router as match_router

api = NinjaAPI()

api.add_router("/auth", auth_router)
api.add_router("/news/", news_router)
api.add_router("/matches/", match_router)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", api.urls),
]

