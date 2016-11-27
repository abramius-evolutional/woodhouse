# coding: utf-8
from __future__ import unicode_literals
from django.db import models
from django.utils import timezone

class HouseCalculationRequest(models.Model):
    name = models.CharField(max_length=40, verbose_name='Имя')
    phone = models.CharField(max_length=15, verbose_name='Телефон')
    email = models.EmailField(blank=True, default='', verbose_name='Email')
    dt = models.DateTimeField(default=timezone.now, verbose_name='Дата заявки')
    class Meta:
        verbose_name = 'Заявка на расчет сметы'
        verbose_name_plural = 'Заявки на расчет сметы'

class HouseDesignRequest(models.Model):
    name = models.CharField(max_length=40, verbose_name='Имя')
    phone = models.CharField(max_length=15, verbose_name='Телефон')
    email = models.EmailField(blank=True, default='', verbose_name='Email')
    description = models.TextField(verbose_name='Описание')
    dt = models.DateTimeField(default=timezone.now, verbose_name='Дата заявки')
    class Meta:
        verbose_name = 'Заявка на проектирование'
        verbose_name_plural = 'Заявки на проектирование'