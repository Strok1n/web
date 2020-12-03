from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from .models import User, Followers, Post
from .serializers import UserSerializer,FollowersSerializer, PostSerializer


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class FollowersViewSet(ModelViewSet):
    queryset = Followers.objects.all()
    serializer_class = FollowersSerializer
    permission_classes = [AllowAny]


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]
