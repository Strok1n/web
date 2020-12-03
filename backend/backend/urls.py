from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('social_network.urls')),
     url(r'^rest-auth/', include('rest_auth.urls'))
]