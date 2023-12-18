import subprocess

username = 'dev'
password = 'dev'

create_user = f"""
from apps.users.models import User;
User.objects.create_user(
    name='Dev',
    username='{username}',
    password='{password}',
    email='dev@dev.com',
    phone='00912344321',
    role=2,
);
exit();
"""

try:
    proc = subprocess.run(
        f'python manage.py shell -c "{create_user}"',
        shell=True,
        check=True,
        capture_output=True,
        text=True
    )
    print('Usuário de desenvolvimento criado com sucesso!');
    print(f'username: {username}');
    print(f'password: {password}');

except subprocess.CalledProcessError as e:
    print('Usuário de desenvolvimento já existe!');
