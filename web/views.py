from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(req):
    context = {}
    return render(req, 'index.html', context)
