# Generated by Django 4.0.4 on 2022-05-08 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0003_film_preview'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='name',
            field=models.CharField(max_length=50, null=True, unique=True),
        ),
    ]
