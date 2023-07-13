from django.shortcuts import render
from .models import Form
from rest_framework import viewsets
from .serializers import FormSerializer


class FormViewset(viewsets.ModelViewSet):
    serializer_class=FormSerializer
    queryset=Form.objects.all()
