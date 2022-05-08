from django.shortcuts import render
import json
from django.http import HttpResponse, JsonResponse
from .serializers import season_to_dict, serie_to_dict, film_to_dict, comment_to_dict, character_to_dict
from .models import Season, Serie, Character, Comment, Film

# Create your views here.


def index(req):
    context = {}
    return render(req, 'index.html', context)


def season_list(req):
    res = []
    seasons = Season.objects.all()

    for season in seasons:
        s_season = season_to_dict(season)
        res.append(s_season)

    return JsonResponse(res, safe=False)


def serie_list_by_season(req, season_id):
    res = []
    series = Serie.objects.filter(season_id=season_id)

    for serie in series:
        s_serie = serie_to_dict(serie)
        res.append(s_serie)

    return JsonResponse(res, safe=False)


def serie_by_id(req, pk):
    try:
        serie = Serie.objects.get(id=pk)

        s_serie = serie_to_dict(serie)

        return JsonResponse(s_serie, safe=False)
    except:
        return JsonResponse({})


def film_list(req):
    res = []
    films = Film.objects.all()

    for film in films:
        s_film = film_to_dict(film)
        res.append(s_film)

    return JsonResponse(res, safe=False)


def comment_create(req):
    if req.method != 'POST':
        return HttpResponse('')

    body = json.loads(req.body)

    comment = Comment(
        season_id=body['seasonId'],
        film_id=body['filmId'],
        serie_id=body['serieId'],
        name=body['name'],
        content=body['content']
    )

    try:
        comment.save()

        return JsonResponse({'success': True})
    except:
        return JsonResponse({'error': True})


def comment_list(req):
    try:
        body = json.loads(req.body)
        res = []

        comments = Comment.objects.filter(season_id=body['seasonId'])

        for comment in comments:
            s_comment = comment_to_dict(comment)
            res.append(s_comment)

        return JsonResponse(res, safe=False)
    except:
        return JsonResponse([], safe=False)


def get_serie(req, serie_id):
    try:
        serie = Serie.objects.get(id=serie_id)
        s_serie = serie_to_dict(serie)

        return JsonResponse(s_serie)
    except:
        return JsonResponse({})


def get_film(req, film_id):
    try:
        film = Film.objects.get(id=film_id)
        s_film = film_to_dict(film)

        return JsonResponse(s_film)
    except:
        return JsonResponse({})


def get_characters_by_serie(req, serie_id):
    res = []
    characters = Character.objects.filter(appear_serie_id=serie_id)

    for character in characters:
        s_character = character_to_dict(character)
        res.append(s_character)

    return JsonResponse(res, safe=False)
