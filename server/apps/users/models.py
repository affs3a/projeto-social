from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from .managers import UserManager
from .constants import USER_ROLES_CHOICES


class User(AbstractBaseUser):
    username = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=15)
    date_joined = models.DateTimeField(auto_now_add=True)
    role = models.PositiveSmallIntegerField(
        choices=USER_ROLES_CHOICES, null=False, blank=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name', 'email', 'phone', 'role']

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'users'
