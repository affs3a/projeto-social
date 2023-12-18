from django.urls import path
from . import views


urlpatterns = [
    path('', views.CategoryList.as_view(), name="categories"),
    path('<int:category_id>', views.CategoryDetails.as_view(), name="category"),
]