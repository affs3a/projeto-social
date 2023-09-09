from django.db import models


class User(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=150)
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=150)
    created_at = models.DateField(auto_now_add=True)
    is_admin = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "users"