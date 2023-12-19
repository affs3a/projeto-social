# Criar usuário Dev

1. Digite o comando `python manage.py shell`
2. Cole o código abaixo dentro do shell e aperte `Enter`:

```python
from apps.users.models import User;
User.objects.create_user(
    name='Dev',
    username='dev',
    password='dev',
    email='dev@dev.com',
    phone='00912344321',
    role=2,
);
```

3. Digite `exit()` e aperte enter

```
username: dev
password: dev
```