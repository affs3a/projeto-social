from django.contrib import admin
from django.urls import path, include
from .defaults import views as default_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', default_view.wellcome, name='api'),
    path('api/users/', include('apps.users.urls')),
    path('api/auth/', include('apps.authentication.urls')),
    path('api/categories/', include('apps.categories.urls')),
    path('api/services/', include('apps.services.urls')),
]
