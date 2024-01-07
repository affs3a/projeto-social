# Criar usuário Dev

1. Digite o comando `python manage.py shell`
2. Cole o código abaixo dentro do shell e aperte `Enter`:

```python
from apps.users.models import User;
User.objects.create_user(
    name='Renan',
    username='renan',
    password='Renan_77Admin77_Renan',
    email='alvesrenan990@gmail.com',
    phone='8800000000',
    role=2,
);
```

3. Digite `exit()` e aperte enter

```
username: dev
password: dev
```