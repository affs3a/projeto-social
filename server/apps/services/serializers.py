from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from utils import uploads
import json
from .models import Service


class ServiceSerialize(serializers.ModelSerializer):
    identifier = serializers.CharField(
        validators=[UniqueValidator(queryset=Service.objects.all())],
        write_only=False)
    
    def create(self, validated_data):
        if (validated_data.get('images')):
            filenames = uploads.upload(validated_data.get('images'), to='images')
            validated_data['images'] = json.dumps(filenames)

        return Service.objects.create(**validated_data)


    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.identifier = validated_data.get('identifier', instance.identifier)
        instance.description = validated_data.get('description', instance.description)
        instance.whatsapp = validated_data.get('whatsapp', instance.whatsapp)
        instance.intagram = validated_data.get('instagram', instance.instagram)
        instance.category = validated_data.get('category', instance.category)
        if (validated_data.get('images')):
            instance.images = json.dumps(uploads.upload(validated_data.get('images'), to='images'))
        instance.save()
        return instance

    class Meta:
        fields = '__all__'
        model = Service
