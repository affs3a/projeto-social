from django.contrib.auth.models import BaseUserManager
from .constants import UserRoleEnum


class UserManager(BaseUserManager):
    def create_user(self, username, name, email, phone, role, password):
        if not username:
            raise ValueError('faltou o campo "username"!')

        if not name:
            raise ValueError('faltou o compo "name"!')

        if not email:
            raise ValueError('faltou o campo "email"!')

        if not phone:
            raise ValueError('faltou o campo "phone"!')

        if not role:
            raise ValueError('faltou o campo "role"!')

        user = self.model(
            username=username,
            name=name,
            email=self.normalize_email(email),
            phone=phone,
            role=role
        )

        user.set_password(password)

        user.save(using=self._db)
        return user

    def create_superuser(self, username, name, email, phone, password):
        USER_ADMIN_ROLE_CONSTANT = UserRoleEnum.ADMIN.value
        user = self.create_user(
            username=username,
            name=name,
            email=email,
            password=password,
            phone=phone,
            role=USER_ADMIN_ROLE_CONSTANT
        )

        user.save(using=self._db)
        return user
