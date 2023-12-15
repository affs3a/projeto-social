from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from ..users.models import User


class TokenSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['role'] = user.role

        return token


class AuthSerialize(serializers.ModelSerializer):
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
    class Meta:
        model = User
        exclude = ['last_login']
        read_only_fields = ['date_joined']
        extra_kwargs = {'password': {'write_only': True}}