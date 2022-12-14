# Generated by Django 4.0.4 on 2022-05-08 11:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0005_alter_comment_serie'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='film',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='web.film'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='season',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='web.season'),
        ),
    ]
