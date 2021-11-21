from django.http import HttpResponse

def index(request):
    class shapes:
        lenth = 30
        width = 20
        radius = 7
        height = 24
        def rectangle():
            area = lenth * width
            return area
        def circle():
            area = 3.14 * radius * radius
            return area
        def triangle():
            area = 0.5 * height * lenth
            return area
    return rectangle(), circle(), triangle()
    return HttpResponse("the areas are - ", shapes)

