from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import UserSerialize
from .models import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerialize