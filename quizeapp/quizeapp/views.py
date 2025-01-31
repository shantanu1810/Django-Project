from django.http import HttpResponse
from django.shortcuts import render
def home(request):
    #return HttpResponse("<h1>This is first page</h1><a href='http://127.0.0.1:8000/about/'>about</a>")
    return render(request,'home.html')
def about(request):
    return HttpResponse("<h1>This is about page</h1>")