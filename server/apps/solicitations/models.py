from django.db import models
from apps.users.models import User


class Solicitation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    service_name = models.CharField(max_length=150)
    message = models.TextField()
    issue_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.service_name

    class Meta:
        db_table = 'solicitations'