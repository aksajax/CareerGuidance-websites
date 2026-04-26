from django.contrib import admin
from .models import Roadmap, Milestone

@admin.register(Roadmap)
class RoadmapAdmin(admin.ModelAdmin):
    list_display = ('title', 'target_role', 'created_at')
    search_fields = ('title', 'target_role')

@admin.register(Milestone)
class MilestoneAdmin(admin.ModelAdmin):
    list_display = ('topic', 'roadmap', 'week_number', 'is_completed')
    list_filter = ('is_completed', 'roadmap')