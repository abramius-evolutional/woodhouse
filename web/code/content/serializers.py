from rest_framework import serializers
import models
import json


class KeyIndicatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.KeyIndicator
        fields = (
            'id',
            'number',
            'label',
            'description',
        )

class AboutCompanySerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField('get_urls')
    class Meta:
        model = models.AboutCompany
        fields = (
            'title',
            'name',
            'phone',
            'address',
            'about',
            'position',
            'email',
            'url',
        )
    def get_urls(self, obj):
        return map(lambda im: im.image.url, obj.images.all())

class WorkItemSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField('get_urls')
    category = serializers.SerializerMethodField('get_itemcategory')
    class Meta:
        model = models.WorkItem
        fields = (
            'id',
            'url',
            'title',
            'description',
            'category',
        )
    def get_urls(self, obj):
        return map(lambda im: im.image.url, obj.images.all())
    def get_itemcategory(self, obj):
        return obj.category.name if obj.category else ''

class NewsSerializer(serializers.ModelSerializer):
    dt = serializers.SerializerMethodField('get_datetime')
    url = serializers.SerializerMethodField('get_urls')
    class Meta:
        model = models.News
        fields = (
            'id',
            'title',
            'description',
            'dt',
            'url',
            'video_url',
        )
    def get_urls(self, obj):
        return map(lambda im: im.image.url, obj.images.all())
    def get_datetime(self, obj):
        return obj.dt.strftime('%Y-%m-%d %H:%M')

class CommentSerializer(serializers.ModelSerializer):
    dt = serializers.SerializerMethodField('get_datetime')
    work_id = serializers.SerializerMethodField('get_workid')
    url = serializers.SerializerMethodField('get_urls')
    class Meta:
        model = models.News
        fields = (
            'id',
            'title',
            'description',
            'dt',
            'work_id',
            'url',
        )
    def get_datetime(self, obj):
        return obj.dt.strftime('%Y-%m-%d %H:%M')
    def get_workid(self, obj):
        return obj.work_item.id if obj.work_item else None
    def get_urls(self, obj):
        return obj.image.image.url

class VideoSerializer(serializers.ModelSerializer):
    dt = serializers.SerializerMethodField('get_datetime')
    class Meta:
        model = models.News
        fields = (
            'id',
            'title',
            'description',
            'dt',
            'video_url',
        )
    def get_datetime(self, obj):
        return obj.dt.strftime('%Y-%m-%d %H:%M')
