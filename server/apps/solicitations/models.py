from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from apps.users.models import User


class Solicitation(AbstractBaseUser):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service_name = models.CharField(max_length=150)
    message = models.TextField()

    def __str__(self):
        return self.service_name

    class Meta:
        db_table = 'solicitations'