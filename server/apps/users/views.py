from django.shortcuts import render
from django.http import HttpResponseRedirect


def users(request):
    return render(request, HttpResponseRedirect("Hello World"))