from django.db import models
from ..categories.models import Category


class Service(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    images = models.TextField(null=True)
    rating = models.DecimalField(default=0, decimal_places=1, max_digits=2)
    social = models.TextField()
    category = models.ForeignKey(
        Category,
        null=True,
        on_delete=models.SET_DEFAULT,
        default=None
    )