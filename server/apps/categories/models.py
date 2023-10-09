from django.db import models
from django.contrib.postgres.fields import ArrayField


class Category(models.Model):
    name = models.CharField(max_length=255)
    tags = ArrayField(
        models.CharField(max_length=10, blank=True), size=12)
