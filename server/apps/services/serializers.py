from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Service


class ServiceSerialize(serializers.ModelSerializer):
    def create(self, validated_data):
        return Service.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.social = validated_data.get('social', instance.social)
        instance.category = validated_data.get('category', instance.category)
        instance.save()
        return instance

    class Meta:
        fields = '__all__'
        model = Service
