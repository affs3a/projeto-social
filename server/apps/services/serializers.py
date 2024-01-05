from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Service


class ServiceSerialize(serializers.ModelSerializer):
    identifier = serializers.CharField(
        validators=[UniqueValidator(queryset=Service.objects.all())],
        write_only=False)
    
    def create(self, validated_data):
        print(validated_data)
        # return Service.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.identifier = validated_data.get('identifier', instance.identifier)
        instance.description = validated_data.get('description', instance.description)
        instance.social = validated_data.get('social', instance.social)
        instance.category = validated_data.get('category', instance.category)
        instance.images = validated_data.get('images', instance.images)
        instance.save()
        return instance

    class Meta:
        fields = '__all__'
        model = Service
