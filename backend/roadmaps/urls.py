from django.urls import path
from .views import GenerateRoadmapView, UserRoadmapsListView, UpdateMilestoneStatusView

urlpatterns = [
    # Naya roadmap generate karne ke liye
    path('generate/', GenerateRoadmapView.as_view(), name='generate-roadmap'),
    
    # Dashboard par saare roadmaps dekhne ke liye
    path('list/', UserRoadmapsListView.as_view(), name='user-roadmaps'),
    
    # Milestone ka status (complete/incomplete) change karne ke liye
    path('milestone/<int:pk>/update/', UpdateMilestoneStatusView.as_view(), name='update-milestone'),
]