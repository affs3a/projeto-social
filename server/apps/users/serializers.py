from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User


class UserSerialize(serializers.ModelSerializer):
    username = serializers.CharField(
        validators=[UniqueValidator(queryset=User.objects.all())],
        write_only=False)

    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())],
        write_only=False)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()
        return instance

    class Meta:
        model = User
        exclude = ['last_login']
        read_only_fields = ['date_joined']
        extra_kwargs = {'password': {'write_only': True}}
