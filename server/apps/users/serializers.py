from rest_framework import serializers
from . import models
from . import constants


class UserSerialize(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = constants.USER_SERIALIZATE_FIELDS