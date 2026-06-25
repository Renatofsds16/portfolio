from rest_framework import serializers
from .models import Profile,Delivery


class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = ['title', 'description','icon']


class ProfileSerializer(serializers.ModelSerializer):
    deliveries = DeliverySerializer(many=True, read_only=True)
    class Meta:
        model = Profile
        fields = "__all__"