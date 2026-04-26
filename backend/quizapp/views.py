from rest_framework import viewsets
from .models import LearningPath, Topic, QuizItem
from .serializers import LearningPathSerializer, TopicSerializer, QuizItemSerializer

class LearningPathViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LearningPath.objects.all().order_by('id')
    serializer_class = LearningPathSerializer

class TopicViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Topic.objects.all().order_by('order')
    serializer_class = TopicSerializer

    # Specific path ke topics filter karne ke liye
    def get_queryset(self):
        path_id = self.request.query_params.get('path_id')
        if path_id:
            return Topic.objects.filter(learning_path_id=path_id)
        return super().get_queryset()

class QuizItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = QuizItem.objects.all()
    serializer_class = QuizItemSerializer

    def get_queryset(self):
        topic_id = self.request.query_params.get('topic_id')
        if topic_id:
            return QuizItem.objects.filter(topic_id=topic_id)
        return super().get_queryset()