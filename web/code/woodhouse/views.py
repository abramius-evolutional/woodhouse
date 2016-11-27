from django.http import HttpResponse
from django.conf import settings
import os

def main(request):
    path_to_file = os.path.join(settings.BASE_DIR, settings.STATIC_ROOT)
    path_to_file = os.path.join(path_to_file, 'app/index.html')
    return HttpResponse(open(path_to_file).read())