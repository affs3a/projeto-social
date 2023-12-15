from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import status, NotFound
from .serializers import ServiceSerialize
from .models import Service


class ServicesList(APIView):
    def get(self, request, format=False):
        queryset = Service.objects.all()
        serializer = ServiceSerialize(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, format=False):
        serializer = ServiceSerialize(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ServiceDetails(APIView):
    permission_classes = [IsAuthenticated]
    
    def get_service(self, service_id):
        try:
            return Service.objects.get(pk=service_id)
        except Service.DoesNotExist:
            raise NotFound()

    def get(self, request, service_id, format=False):
        service = self.get_service(service_id)
        serializer = ServiceSerialize(service)
        print(type(serializer.data))
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, service_id, format=False):
        service = self.get_service(service_id)
        serializer = ServiceSerialize(service, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, service_id, format=False):
        service = self.get_service(service_id)
        service.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
