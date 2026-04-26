from rest_framework import serializers
from .models import LearningPath, Topic, QuizItem

class QuizItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizItem
        fields = '__all__'

class TopicSerializer(serializers.ModelSerializer):
    # Yeh line topic ke sath uske saare questions bhi bhej degi
    questions = QuizItemSerializer(many=True, read_only=True)

    class Meta:
        model = Topic
        fields = ['id', 'title', 'order', 'questions']

class LearningPathSerializer(serializers.ModelSerializer):
    topics = TopicSerializer(many=True, read_only=True)

    class Meta:
        model = LearningPath
        fields = ['id', 'title', 'thumbnail', 'description', 'topics']