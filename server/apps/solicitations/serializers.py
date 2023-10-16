from rest_framework import serializers
from .models import Solicitation


class SolicitationSerialize(serializers.ModelSerializer):
    def create(self, validated_data):
        return Solicitation.objects.create(**validated_data)
    
    class Meta:
        model = Solicitation
        fields = ['user', 'service_name', 'message', 'issue_date'];
