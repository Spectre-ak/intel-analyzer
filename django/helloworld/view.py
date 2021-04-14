from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world from django and CI/CD is enabled now")
