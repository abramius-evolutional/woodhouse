from apitools import ApiResponse, GetParams
from django.views.decorators.csrf import csrf_exempt
import models


@csrf_exempt
def make_calculation_request(request):
    params, error = GetParams(request, 'POST', ('name', 'email', 'phone'))
    if error: return error

    new_request = models.HouseCalculationRequest.objects.create(name=params.name,
        phone=params.phone,
        email=params.email)
    new_request.save()

    return ApiResponse({
        'status': 'saved',
        'request_id': new_request.id
    })

@csrf_exempt
def make_design_request(request):
    params, error = GetParams(request, 'POST', ('name', 'email', 'phone', 'description'))
    if error: return error

    new_request = models.HouseDesignRequest.objects.create(name=params.name,
        phone=params.phone,
        email=params.email,
        description=params.description)
    new_request.save()

    return ApiResponse({
        'status': 'saved',
        'request_id': new_request.id
    })

