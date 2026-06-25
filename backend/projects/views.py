from rest_framework.generics import ListAPIView
from .models import Project
from .serializers import ProjectSerializer


class ProjectListAPIView(ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        my_list = Project.objects.all()[:6]
        print(my_list[0].image)
        return my_list

    def get_serializer_context(self):
        return {"request": self.request}
