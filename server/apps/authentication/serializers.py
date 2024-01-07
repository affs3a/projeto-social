from typing import Any, Dict
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
    TokenVerifySerializer,
)
from rest_framework import serializers
from ..users.models import User
import jwt


class TokenObtain(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['name'] = user.name
        token['username'] = user.username
        token['role'] = user.role

        return token
    
    def validate(self, attrs: Dict[str, Any]) -> Dict[str, str]:
        data = super().validate(attrs)

        data.update({
            'user': {
                'id': self.user.id,
                'name': self.user.name,
                'username': self.user.username,
                'role': self.user.role,
            }
        })

        return data
    

class AuthSerialize(serializers.ModelSerializer):
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    class Meta:
        model = User
        exclude = ['last_login']
        read_only_fields = ['date_joined']
        extra_kwargs = {'password': {'write_only': True}}
