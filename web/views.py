from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .serializers import season_to_dict, serie_to_dict
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
