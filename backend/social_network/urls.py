from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("users", views.UserViewSet, "users")
router.register("followers", views.FollowersViewSet, "followers")
router.register("posts", views.PostViewSet, "posts")
urlpatterns = router.urls