"""intsureview_be URL Configuration"""

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from intsureview_be.apps.api import views
from forms.views import FormViewset
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


# Swagger Added
schema_view = get_schema_view(
    openapi.Info(
        title="Intsureview API",
        default_version='v1',
        description="This is an Intsureview API",

    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path("admin/", admin.site.urls),

]

router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
# Register my Form view
router.register(r"forms", FormViewset)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
# Added swagger URLs
urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path('swagger/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
         cache_timeout=0), name='schema-redoc'),
]
