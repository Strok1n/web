from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    status = models.CharField(max_length=64)


class Followers(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='user')
    follower = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='follower')


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=64)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now=True)

class Message(models.Model):
    src = models.ForeignKey(User, on_delete=models.CASCADE,
    related_name='src')
    dst = models.ForeignKey(User, on_delete=models.CASCADE,
    related_name='dst')
    sent_at = models.DateTimeField(auto_now=True)
    content = models.TextField()