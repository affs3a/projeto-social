from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import status
from security.permissions import IsAdmin
from .serializers import AuthSerialize

class AuthList(APIView):
    permission_classes = [IsAdmin]
    
    def put(self, request, format=False):
        serializer = AuthSerialize(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)