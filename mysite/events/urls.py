from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api_views import EventViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('', include(router.urls)),  # '' pour éviter les répétitions
]

