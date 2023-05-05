from django.shortcuts import render
from .models import ContactInfo
from .serializers import ContactInfoSerializer
from rest_framework import viewsets

# Create your views here.

class ContactInfoView(viewsets.ModelViewSet):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer
