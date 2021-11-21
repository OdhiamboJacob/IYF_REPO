from django.http import HttpResponse

def index(request):
    return HttpResponse("jowii is the owner of poly app")
