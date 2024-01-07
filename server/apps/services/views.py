from rest_framework.views import APIView
from rest_framework.response import Response
from security.permissions import IsProvider, PublicView
from rest_framework.exceptions import status, NotFound
from rest_framework.generics import GenericAPIView
from rest_framework.filters import SearchFilter
from rest_framework import serializers
from .serializers import ServiceSerialize
from .models import Service
from utils import uploads
import json


class ServicesList(GenericAPIView):
    permission_classes = [IsProvider | PublicView]
    serializer_class = ServiceSerialize

    search_fields=['name', 'category__name']
    filter_backends=[SearchFilter]

    queryset=Service.objects.all()

    def get(self, request, format=False):
        queryset = self.get_queryset()
        if(category_id := request.query_params.get('category')):
            queryset = Service.objects.filter(category__id=category_id).all()
        if(owner_id := request.query_params.get('owner')):
            queryset = Service.objects.filter(owner__id=owner_id).all()
        serializer = self.get_serializer(self.filter_queryset(queryset), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, format=False):
        if (request.user.role != 2):
            raise serializers.ValidationError("Apenas admins podem adicionar serviços!")
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ServiceDetails(APIView):
    permission_classes = [IsProvider | PublicView]
    
    def get_service(self, service_id):
        try:
            return Service.objects.get(pk=service_id)
        except Service.DoesNotExist:
            raise NotFound()

    def get(self, request, service_id, format=False):
        service = self.get_service(service_id)
        serializer = ServiceSerialize(service)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, service_id, format=False):
        service = self.get_service(service_id)
        if (request.user.role != 2 and request.user != service.owner):
            raise serializers.ValidationError("Você não é dono desta loja!")
        serializer = ServiceSerialize(service, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, service_id, format=False):
        service = self.get_service(service_id)
        uploads.delete(json.loads(service.images))
        service.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
