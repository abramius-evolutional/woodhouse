from django.contrib import admin
import models

class HouseCalculationRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'dt')

class HouseDesignRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'dt', 'description')

admin.site.register(models.HouseCalculationRequest, HouseCalculationRequestAdmin)
admin.site.register(models.HouseDesignRequest, HouseDesignRequestAdmin)
