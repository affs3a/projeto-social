from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('apps.users.urls')),
    path('api/auth/', include('apps.authentication.urls')),
    path('api/solicitations/', include('apps.solicitations.urls')),
    path('api/categories/', include('apps.categories.urls')),
    path('api/comments/', include('apps.comments.urls')),
    path('api/services/', include('apps.services.urls')),
]
