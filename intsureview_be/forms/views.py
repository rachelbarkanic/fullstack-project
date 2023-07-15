from django.shortcuts import render
from .models import Form
from rest_framework import viewsets
from .serializers import FormSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


class FormViewset(viewsets.ModelViewSet):
     # This viewset only accepts get, post and delete actions
    serializer_class=FormSerializer
    queryset=Form.objects.all()
    http_method_names = ['get', 'post', 'delete']

   
    @action(detail=True, methods=['delete'])
    def delete(self, request, pk=None):
        try:
            form = self.get_object()
            form.delete()
            return Response(status=204)  
        except Form.DoesNotExist:
            return Response(status=404)  

