# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
import uuid


class KeyIndicator(models.Model):
    number = models.IntegerField(verbose_name='Число')
    label = models.CharField(max_length=10, verbose_name='Подпись')
    description = models.TextField(blank=True, default='', verbose_name='Описание')
    def __unicode__(self):
        return "%i %s" % (self.number, self.label)
    class Meta:
        verbose_name = 'Ключевой показатель'
        verbose_name_plural = 'Ключевые показатели'

class AboutCompany(models.Model):
    title = models.CharField(blank=True, default='', max_length=200, verbose_name='Заголовок')
    name = models.CharField(blank=True, default='', max_length=200, verbose_name='Имя')
    phone = models.CharField(max_length=200, blank=True, default='', verbose_name='Телефон')
    address = models.TextField(blank=True, default='', verbose_name='Адрес')
    about = models.TextField(blank=True, default='', verbose_name='О компании')
    position = models.CharField(max_length=200, blank=True, default='', verbose_name='Должность')
    class Meta:
        verbose_name = 'Контактная информация'
        verbose_name_plural = 'Контактная информация'

class WorkItemCategory(models.Model):
    name = models.CharField(max_length=60, verbose_name='Категория')
    def __unicode__(self):
        return self.name
    class Meta:
        verbose_name = 'Категория работ'
        verbose_name_plural = 'Категории работ'

class WorkItem(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    sort_index = models.IntegerField(verbose_name='Сортировочный индекс', default=0)
    category = models.ForeignKey(WorkItemCategory, blank=True, null=True)
    def __unicode__(self):
        return self.title
    class Meta:
        verbose_name = 'Работа'
        verbose_name_plural = 'Работы'

class WorkImage(models.Model):
    work_item = models.ForeignKey(WorkItem, related_name='images', verbose_name='Связанная работа')
    image = models.ImageField(upload_to='images_works/', verbose_name='Изображение')
    def __unicode__(self):
        return self.image.url
    class Meta:
        verbose_name = 'Фото работы'
        verbose_name_plural = 'Фото работ'
    def image_tag(self):
        return u'<a href="%s"><img src="%s" style="max-height: 150px; max-width: 300px" /></a>' % (
            self.image.url, self.image.url
        )
    image_tag.short_description = 'Предпросмотр'
    image_tag.allow_tags = True

class News(models.Model):
    title = models.CharField(max_length=200, verbose_name='Название')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    dt = models.DateTimeField(default=timezone.now, verbose_name='Дата новости')
    def __unicode__(self):
        return self.title
    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

class NewsImage(models.Model):
    news_item = models.ForeignKey(News, related_name='images', verbose_name='Связанная новость')
    image = models.ImageField(upload_to='images_news/', verbose_name='Изображение')
    def __unicode__(self):
        return self.image.url
    class Meta:
        verbose_name = 'Фото новости'
        verbose_name_plural = 'Фото новостей'
    def image_tag(self):
        return u'<a href="%s"><img src="%s" style="max-height: 150px; max-width: 300px" /></a>' % (
            self.image.url, self.image.url
        )
    image_tag.short_description = 'Предпросмотр'
    image_tag.allow_tags = True

class Comment(models.Model):
    title = models.CharField(max_length=200, verbose_name='Заголовок')
    description = models.TextField(default='', blank=True, verbose_name='Описание')
    dt = models.DateTimeField(default=timezone.now, verbose_name='Дата комментария')
    work_item = models.ForeignKey(WorkItem, blank=True, null=True, 
        related_name='comments', verbose_name='Связанная работа')
    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

class CommentImage(models.Model):
    comment = models.OneToOneField(Comment, related_name='image', verbose_name='Связанный отзыв')
    image = models.ImageField(upload_to='images_comments/', verbose_name='Изображение')
    def __unicode__(self):
        return self.image.url
    class Meta:
        verbose_name = 'Изображение отзыва'
        verbose_name_plural = 'Изображения отзывов'
    def image_tag(self):
        return u'<a href="%s"><img src="%s" style="max-height: 150px; max-width: 300px" /></a>' % (
            self.image.url, self.image.url
        )
    image_tag.short_description = 'Предпросмотр'
    image_tag.allow_tags = True
