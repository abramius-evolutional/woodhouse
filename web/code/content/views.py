from django.shortcuts import render
from django.http import HttpResponse
from apitools import ApiResponse
from models import KeyIndicator, AboutCompany, WorkItem, News, Comment
from serializers import KeyIndicatorSerializer, AboutCompanySerializer, WorkItemSerializer, NewsSerializer, CommentSerializer


MODEL_NAMES = ( 'KeyIndicator', 'AboutCompany', 'WorkItem', 'News', 'Comment')

def content_provider(request, model_name):
    
    if model_name in MODEL_NAMES:

        cls = globals()[model_name]
        serializer_cls = globals()[model_name + 'Serializer']

        objects = cls.objects.all()
        serializer = serializer_cls(objects, many=True)

        return ApiResponse(serializer.data)

    return ApiResponse({'status': 'not found'}, 404)
