from enum import Enum

class UserFields(Enum):
    ID = 'id'
    NAME = 'name'
    USERNAME = 'username'
    EMAIL = 'email'
    PASSWORD = 'password'
    CREATED_AT = 'created_at'


USER_SERIALIZATE_FIELDS = (
    UserFields.ID.value,
    UserFields.NAME.value,
    UserFields.USERNAME.value,
    UserFields.PASSWORD.value,
    UserFields.CREATED_AT.value,
)