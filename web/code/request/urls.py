from django.conf.urls import include, url
import views


urlpatterns = [
    url(r'^make_calculation_request/{0,1}$', views.make_calculation_request),
    url(r'^make_design_request/{0,1}$', views.make_design_request),
]
