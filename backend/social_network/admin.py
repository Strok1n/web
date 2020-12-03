from django.contrib import admin
from .models import User, Followers, Post

admin.site.register(User)
admin.site.register(Followers)
admin.site.register(Post)
