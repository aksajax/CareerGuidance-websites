from rest_framework import serializers
from .models import Roadmap, Milestone

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = ['id', 'week_number', 'topic', 'description', 'resources', 'is_completed']

class RoadmapSerializer(serializers.ModelSerializer):
    # 'milestones' related_name hai jo humne model mein define kiya tha
    # Many=True isliye kyunki ek roadmap mein bahut saare milestones honge
    milestones = MilestoneSerializer(many=True, read_only=True)

    class Meta:
        model = Roadmap
        fields = ['id', 'title', 'target_role', 'current_skills', 'created_at', 'milestones']

# Ye serializer hum use karenge jab user React se data bhejega roadmap generate karne ke liye
class RoadmapCreateSerializer(serializers.Serializer):
    target_role = serializers.CharField(max_length=100)
    current_skills = serializers.CharField()