from .models import Form
from rest_framework import serializers

class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = '__all__'