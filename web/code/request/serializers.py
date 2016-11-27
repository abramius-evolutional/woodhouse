from rest_framework import serializers
import models
import json


class HouseCalculationRequestSerializer(serializers.ModelSerializer):
    dt = serializers.SerializerMethodField('get_datetime')
    class Meta:
        model = models.HouseCalculationRequest
        fields = (
            'id',
            'name',
            'phone',
            'email',
            'dt',
        )
    def get_datetime(self, obj):
        return obj.dt.strftime('%Y-%m-%d %H:%M')

class HouseDesignRequestSerializer(serializers.ModelSerializer):
    dt = serializers.SerializerMethodField('get_datetime')
    class Meta:
        model = models.HouseDesignRequest
        fields = (
            'id',
            'name',
            'phone',
            'email',
            'description',
            'dt',
        )
    def get_datetime(self, obj):
        return obj.dt.strftime('%Y-%m-%d %H:%M')