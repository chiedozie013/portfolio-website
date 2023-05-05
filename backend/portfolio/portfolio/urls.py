
from django.contrib import admin
from django.urls import path, include

from integrate.views import ContactInfoView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("", ContactInfoView, basename='contactinfoview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]
