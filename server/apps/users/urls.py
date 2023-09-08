from django.urls import path
from . import views


urlpatterns = [
    path('', views.users, name='users'),
    path('<int:id>', views.user, name='user'),
    path('update/<int:id>', views.update_user, name='user_update'),
    path('delete/<int:id>', views.delete_user, name='user_delete')
]