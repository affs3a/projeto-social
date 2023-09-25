from django.urls import path
from . import views


urlpatterns = [
    path('', views.SolicitationList.as_view(), name="solicitations"),
    path('<int:solicitation_id>', views.SolicitationDetails.as_view(), name="solicitation"),
]