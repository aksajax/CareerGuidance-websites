from django.db import models

# 1. Main Course Category (e.g., Full Stack Development)
class LearningPath(models.Model):
    title = models.CharField(max_length=200)
    # Note: ImageField ke liye 'Pillow' library install honi chahiye (pip install Pillow)
    thumbnail = models.ImageField(upload_to='paths/', null=True, blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# 2. Specific Subjects inside a Path (e.g., React Basics, Django ORM)
class Topic(models.Model):
    learning_path = models.ForeignKey(LearningPath, on_delete=models.CASCADE, related_name='topics')
    title = models.CharField(max_length=200)
    order = models.IntegerField(default=0) # To show topics in sequence

    def __str__(self):
        return f"{self.learning_path.title} - {self.title}"

# 3. The actual MCQ Questions
class QuizItem(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    
    # Options
    option_a = models.CharField(max_length=255)
    option_b = models.CharField(max_length=255)
    option_c = models.CharField(max_length=255)
    option_d = models.CharField(max_length=255)
    
    # Correct Answer (Store 'A', 'B', 'C', or 'D')
    correct_option = models.CharField(max_length=1)
    
    # Explanation (Optional: User ko answer ke baad samjhane ke liye)
    explanation = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.question_text[:50]