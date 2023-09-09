from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from .models import User


class UserSerialize(serializers.ModelSerializer):
    def create(self):
        user = User(
            username=self.validated_data['username'],
            name=self.validated_data['name'],
            email=self.validated_data['email'],
            role=self.validated_data['role'])

        user.set_password(self.validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ('id', 'name', 'username', 'password',
                  'email', 'date_joined', 'role')
        read_only_fields = ('date_joined', 'email', 'role')
        validators = UniqueTogetherValidator(
            queryset=User.objects.all(),
            fields=('username', 'email'))
