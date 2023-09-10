from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, username, name, email, role, password=None):
        if not username:
            raise ValueError('faltou o campo "username"!')

        if not name:
            raise ValueError('faltou o compo "name"!')

        if not email:
            raise ValueError('faltou o campo "email"!')

        if not role:
            raise ValueError('faltou o campo "role"!')

        user = self.model(
            username=username,
            name=name,
            email=self.normalize_email(email),
            role=role
        )

        user.set_password(password)

        user.save(using=self._db)
        return user

    def create_superuser(self, username, name, email, password=None):
        user = self.create_user(
            username=username,
            name=name,
            email=email,
            password=password,
            role=3
        )

        user.save(using=self._db)
        return user
