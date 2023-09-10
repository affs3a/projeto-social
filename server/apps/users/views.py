from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import status, NotFound
from .serializers import UserSerialize
from .models import User


class UserList(APIView):
    def get(self, request, format=False):
        queryset = User.objects.all()
        serializer = UserSerialize(queryset, many=True)
        return Response(serializer.data)

    def put(self, request, format=False):
        serializer = UserSerialize(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        user = UserSerialize(serializer.create())
        return Response(user.data, status=status.HTTP_201_CREATED)


class UserDetails(APIView):
    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            raise NotFound()

    def get(self, request, user_id, format=False):
        user = self.get_user(user_id)
        serializer = UserSerialize(user)
        return Response(serializer.data)