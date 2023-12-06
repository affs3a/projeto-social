from django.urls import path
from . import views


urlpatterns = [
    path('', views.ServicesList.as_view(), name='services'),
    path('<int:service_id>', views.ServiceDetails.as_view(), name='service'),
]