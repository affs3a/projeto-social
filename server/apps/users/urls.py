from django.urls import path
from . import views


urlpatterns = [
    path('', views.UserList.as_view(), name="users"),
    path('<int:user_id>', views.UserDetails.as_view(), name="user"),
]