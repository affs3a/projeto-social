from django.db import models
from ..categories.models import Category
from ..users.models import User


class Service(models.Model):
    name = models.CharField(max_length=255)
    identifier = models.CharField(max_length=255)
    description = models.CharField(max_length=255, null=True)
    images = models.TextField(null=True)
    whatsapp = models.CharField(max_length=255, null=True)
    instagram = models.CharField(max_length=255, null=True)
    rating = models.IntegerField(null=True)
    owner = models.ForeignKey(
        User,
        null=True,
        on_delete=models.SET_DEFAULT,
        default=None
    )
    category = models.ForeignKey(
        Category,
        null=True,
        on_delete=models.SET_DEFAULT,
        default=None
    )