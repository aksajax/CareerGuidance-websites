import os
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from groq import Groq
import json

from .models import Roadmap, Milestone
from .serializers import RoadmapSerializer, RoadmapCreateSerializer

# Groq Client Initializing



class GenerateRoadmapView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = RoadmapCreateSerializer(data=request.data)
        
        if serializer.is_valid():
            target_role = serializer.validated_data['target_role']
            current_skills = serializer.validated_data['current_skills']

            # AI Prompt for Strict JSON output
            prompt = f"""
            You are an expert career counselor. Generate a structured career roadmap.
            Target Role: {target_role}
            Current Skills: {current_skills}

            Provide exactly 4-6 milestones. 
            Return ONLY a valid JSON object with the following structure:
            {{
                "title": "Roadmap to {target_role}",
                "milestones": [
                    {{
                        "week": 1,
                        "topic": "Topic Name",
                        "description": "Step-by-step learning guide",
                        "resources": "Link1, Link2, Link3"
                    }}
                ]
            }}
            """

            try:
                # API call to Groq
                completion = client.chat.completions.create(
                    model="groq/compound-mini", # Super fast response
                    messages=[{"role": "user", "content": prompt}],
                    response_format={"type": "json_object"}
                )

                # Parsing AI response
                ai_data = json.loads(completion.choices[0].message.content)

                # 1. Save Roadmap to Postgres
                new_roadmap = Roadmap.objects.create(
                    user=request.user if request.user.is_authenticated else None,
                    title=ai_data.get('title', f"Path to {target_role}"),
                    target_role=target_role,
                    current_skills=current_skills
                )

                # 2. Save Milestones linked to this roadmap
                milestone_objects = []
                for ms in ai_data.get('milestones', []):
                    milestone_objects.append(
                        Milestone(
                            roadmap=new_roadmap,
                            week_number=ms.get('week'),
                            topic=ms.get('topic'),
                            description=ms.get('description'),
                            resources=ms.get('resources')
                        )
                    )
                
                # Bulk create for better performance
                Milestone.objects.bulk_create(milestone_objects)

                # Final Response with nested data
                full_roadmap_serializer = RoadmapSerializer(new_roadmap)
                return Response(full_roadmap_serializer.data, status=status.HTTP_201_CREATED)

            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserRoadmapsListView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        # Abhi ke liye saare roadmaps dikha rahe hain, baad mein filter by user laga sakte hain
        # roadmaps = Roadmap.objects.all().order_by('-created_at')
        roadmaps = Roadmap.objects.filter(user=request.user).order_by('-created_at')

        serializer = RoadmapSerializer(roadmaps, many=True)
        return Response(serializer.data)

class UpdateMilestoneStatusView(APIView):
    permission_classes = [IsAuthenticated]
    """Checkbox tick karne par status update karne ke liye"""
    def patch(self, request, pk):
        try:
            milestone = Milestone.objects.get(pk=pk)
            milestone.is_completed = request.data.get('is_completed', milestone.is_completed)
            milestone.save()
            return Response({"status": "updated"})
        except Milestone.DoesNotExist:
            return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)