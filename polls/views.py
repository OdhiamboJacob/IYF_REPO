from django.http import HttpResponse

def index(request):
    return HttpResponse("you are using django and python")
    