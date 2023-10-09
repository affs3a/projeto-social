from django.db import models
from ..categories.models import Category
from django.contrib.postgres.fields import ArrayField
from . import constants


class Service(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    rating = models.DecimalField(default=0)
    social = ArrayField(
        models.CharField(max_length=10, blank=True), size=3)
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_DEFAULT,
        default=Category.objects.get(name=constants.DEFAULT_CATEGORY))

    
