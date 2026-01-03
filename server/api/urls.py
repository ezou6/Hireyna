from django.urls import path
import api.views

urlpatterns = [
    path("health/", api.views.health),
    path("applications/", api.views.applications),
]
