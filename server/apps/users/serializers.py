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

    def validate(self, attrs):
        password = self.initial_data.get('password')
        confirm = self.initial_data.get('confirm')

        if ((password and confirm) and password != confirm):
            raise serializers.ValidationError('Senhas não conferem!')

        return super().validate(attrs)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.username = validated_data.get('username', instance.username)

        password = self.initial_data.get('password')
        confirm = self.initial_data.get('confirm')

        if ((password and confirm) and password != confirm):
            raise serializers.ValidationError('Senhas não conferem!')
        
        if (validated_data.get('password')):
            instance.set_password(validated_data.get('password')) 

        instance.role = validated_data.get('role', instance.role)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ['date_joined']
        extra_kwargs = {'password': {'write_only': True}}
