# Generated by Django 4.2.5 on 2023-12-18 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.PositiveSmallIntegerField(choices=[(1, 'PROVIDER'), (2, 'ADMIN')]),
        ),
    ]
