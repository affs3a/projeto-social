from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User


class UserSerialize(serializers.ModelSerializer):
    username = serializers.CharField(
        validators=[UniqueValidator(queryset=User.objects.all())])
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())],
        write_only=True)

    def create(self):
        return User.objects.create_user(**self.validated_data)

    class Meta:
        model = User
        exclude = ['last_login']
        read_only_fields = ['date_joined']
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'write_only': True},
        }
