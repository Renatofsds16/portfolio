from rest_framework.generics import RetrieveAPIView
from .models import Profile
from .serializers import ProfileSerializer


class ProfileAPIView(RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        return Profile.objects.first()
