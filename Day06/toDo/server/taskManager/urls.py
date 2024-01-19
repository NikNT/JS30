from django.urls import path
from .views import TaskModelViewSet

urlpatterns = [
    path('task/', TaskModelViewSet.as_view({
        'get' : 'list', 
        'post' : 'create'
    })),

    path('task/<int:id>', TaskModelViewSet.as_view({
            'get': 'retrieve',
            'put': 'update',
           'patch': 'partial_update',
          'delete': 'destroy'
    }))
]