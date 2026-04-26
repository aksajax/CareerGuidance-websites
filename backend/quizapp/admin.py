from django.contrib import admin
from .models import LearningPath, Topic, QuizItem

@admin.register(LearningPath)
class LearningPathAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title',)

@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ('title', 'learning_path', 'order')
    list_filter = ('learning_path',)
    search_fields = ('title',)

@admin.register(QuizItem)
class QuizItemAdmin(admin.ModelAdmin):
    list_display = ('question_text', 'topic', 'correct_option')
    list_filter = ('topic',)
    search_fields = ('question_text',)