from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('polls/', include('polls.urls')),
    path('poly/', include('poly.urls')),
    path('area/', include('area.urls')),
    path('admin/', admin.site.urls),
]
