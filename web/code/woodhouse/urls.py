from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
import content.urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/content/', include(content.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\
  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
