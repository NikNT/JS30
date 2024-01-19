from .serializers import TaskSerializer
from rest_framework.viewsets import ModelViewSet
from .models import Task

# Create your views here.
class TaskModelViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_field = "id"