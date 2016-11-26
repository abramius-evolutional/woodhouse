from django.contrib import admin
from django.contrib.auth.models import Group
import models


class WorkImageInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.WorkImage

class WorkItemAdmin(admin.ModelAdmin):
    inlines = [
        WorkImageInline,
    ]
    list_display = ('sort_index', 'category', 'title')
    def get_queryset(self, request):
        qs = super(WorkItemAdmin, self).get_queryset(request)
        return qs.order_by('sort_index')

class WorkImageAdmin(admin.ModelAdmin):
    readonly_fields = ('image_tag', )

class KeyIndicatorAdmin(admin.ModelAdmin):
    list_display = ('number', 'label', 'description')

class AboutCompanyAdmin(admin.ModelAdmin):
    list_display = ('title', 'name', 'phone')

class NewsImageInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.NewsImage

class NewsAdmin(admin.ModelAdmin):
    inlines = [
        NewsImageInline,
    ]
    list_display = ('title', 'description', 'dt')
    def get_queryset(self, request):
        qs = super(NewsAdmin, self).get_queryset(request)
        return qs.order_by('dt')

class CommentImageInline(admin.StackedInline):
    readonly_fields = ('image_tag',)
    model = models.CommentImage

class CommentAdmin(admin.ModelAdmin):
    inlines = [
        CommentImageInline,
    ]
    list_display = ('title', 'description', 'dt', 'work_item')
    def get_queryset(self, request):
        qs = super(CommentAdmin, self).get_queryset(request)
        return qs.order_by('dt')

admin.site.register(models.WorkItem, WorkItemAdmin)
admin.site.register(models.AboutCompany, AboutCompanyAdmin)
admin.site.register(models.WorkItemCategory)
admin.site.register(models.KeyIndicator, KeyIndicatorAdmin)
admin.site.register(models.News, NewsAdmin)
admin.site.register(models.Comment, CommentAdmin)

admin.site.unregister(Group)
