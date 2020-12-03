from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'first_name', 'last_name', 'status')
        model = models.User

class FollowersSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'user', 'follower')
        model = models.Followers

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'user', 'title', 'content', 'created_at')
        model = models.Post