from rest_framework import serializers
from .models import Category


class CategorySerialize(serializers.ModelSerializer):
    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.tags = validated_data.get('tags', instance.tags)
        instance.save()
        return instance
    
    class Meta:
        model = Category
        fields = '__all__'
