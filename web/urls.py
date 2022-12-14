from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/season/list', views.season_list, name='season list'),
    path('api/season/<int:season_id>/serie/list',
         views.serie_list_by_season, name='series by season'),
    path('api/serie/<int:pk>', views.serie_by_id, name='serie by id'),
    path('api/film/list', views.film_list, name='film list'),
    path('api/character/list', views.character_list, name='character list'),
    path('api/comment/create', views.comment_create, name='comment create'),
    path('api/comment/list', views.comment_list, name='comment list'),
    path('api/comment/edit', views.comment_edit, name='comment edit'),
    path('api/serie/<int:serie_id>', views.get_serie, name='get serie'),
    path('api/film/<int:film_id>', views.get_film, name='get film'),
    path('api/serie/<int:serie_id>/character/list',
         views.get_characters_by_serie, name='character list by serie'),
]
