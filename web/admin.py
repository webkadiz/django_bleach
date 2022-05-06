from django.contrib import admin
from .models import Season, Serie, Film, Character, Comment

# Register your models here.

admin.site.register(Season)
admin.site.register(Serie)
admin.site.register(Film)
admin.site.register(Character)
admin.site.register(Comment)
