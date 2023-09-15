from enum import Enum


class UserRoleEnum(Enum):
    NORMAL = 1
    PROVIDER = 2
    ADMIN = 3


USER_ROLES_CHOICES = (
    (UserRoleEnum.NORMAL.value, UserRoleEnum.NORMAL.name),
    (UserRoleEnum.PROVIDER.value, UserRoleEnum.PROVIDER.name),
    (UserRoleEnum.ADMIN.value, UserRoleEnum.ADMIN.name),
)
