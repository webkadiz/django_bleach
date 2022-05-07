from django.db import models

# Create your models here.


class Season(models.Model):
    number = models.SmallIntegerField(unique=True)
    release_date = models.DateField(unique=True)
    description = models.TextField()


class Serie(models.Model):
    name = models.CharField(max_length=50)
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    number = models.SmallIntegerField(unique=True)
    release_date = models.DateField(unique=True)
    duration = models.TimeField()
    description = models.TextField()
    preview = models.CharField(max_length=300, null=True)


class Film(models.Model):
    name = models.CharField(max_length=50, unique=True)
    release_date = models.DateField(unique=True)
    description = models.TextField()
    duration = models.TimeField()


class Character(models.Model):
    name = models.CharField(max_length=50, unique=True)
    appear_serie = models.ForeignKey(
        Serie, on_delete=models.CASCADE, related_name='appear_serie')
    disappear_serie = models.ForeignKey(
        Serie, on_delete=models.CASCADE, related_name='disappear_serie', null=True)


class Comment(models.Model):
    serie = models.ForeignKey(Serie, on_delete=models.CASCADE, null=True)
    season = models.ForeignKey(Season, on_delete=models.CASCADE, null=True)
    film = models.ForeignKey(Film, on_delete=models.CASCADE, null=True)
    content = models.TextField()
