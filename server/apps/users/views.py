from security.permissions import IsAdmin
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import status, NotFound
from rest_framework.generics import GenericAPIView
from rest_framework.filters import SearchFilter
from .serializers import UserSerialize
from .models import User


class UserList(GenericAPIView):
    permission_classes = [IsAdmin]
    serializer_class = UserSerialize

    search_fields=['username', 'email', 'name']
    filter_backends=[SearchFilter]

    def get(self, request, format=False):
        queryset = self.filter_queryset(User.objects.all())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, format=False):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class UserDetails(APIView):
    permission_classes = [IsAdmin]

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            raise NotFound()

    def get(self, request, user_id, format=False):
        user = self.get_user(user_id)
        serializer = UserSerialize(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, user_id, format=False):
        user = self.get_user(user_id)
        serializer = UserSerialize(user, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response({'erro': {'senhas não conferem'}}, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, user_id, format=False):
        user = self.get_user(user_id)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

