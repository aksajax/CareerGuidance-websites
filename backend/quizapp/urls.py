from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LearningPathViewSet, TopicViewSet, QuizItemViewSet

router = DefaultRouter()
router.register(r'learning-paths', LearningPathViewSet)
router.register(r'topics', TopicViewSet)
router.register(r'quiz-items', QuizItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]