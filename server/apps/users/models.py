from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from .managers import UserManager
from . import constants


class User(AbstractBaseUser):
    username = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=254)
    date_joined = models.DateTimeField(auto_now_add=True)
    role = models.PositiveSmallIntegerField(
        choices=constants.USER_ROLES, null=False, blank=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name', 'email', 'role']

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'users'
