from django.db import models
from django.contrib.auth.models import User

class Roadmap(models.Model):
    # Agar aapne authentication setup kiya hai toh user se link karein, 
    # varna isse null=True rakhein development ke liye
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="roadmaps", null=True, blank=True)
    
    title = models.CharField(max_length=255)
    target_role = models.CharField(max_length=100)
    current_skills = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.target_role}"


class Milestone(models.Model):
    # Har milestone ek specific roadmap se juda hoga
    roadmap = models.ForeignKey(Roadmap, on_delete=models.CASCADE, related_name="milestones")
    
    week_number = models.IntegerField()
    topic = models.CharField(max_length=255)
    description = models.TextField()
    
    # Resources ko hum comma-separated string ya JSON mein store kar sakte hain
    # Yahan simple TextField use kar rahe hain resources ke links ke liye
    resources = models.TextField(help_text="Enter links separated by commas", null=True, blank=True)
    
    # Progress tracking ke liye checkbox logic
    is_completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['week_number'] # Sequence mein dikhane ke liye

    def __str__(self):
        return f"Week {self.week_number}: {self.topic}"