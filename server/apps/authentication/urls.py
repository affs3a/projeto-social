from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='auth_login'),
    path('register', views.AuthList.as_view(), name='auth_register'),
    path('refresh', TokenRefreshView.as_view(), name='refresh_token')
]