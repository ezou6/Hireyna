from django.db import models

# Create your models here.

class JobApplication(models.Model):
    company_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    date_applied = models.DateField(auto_now_add=True)
    up_coming_deadline = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=50, 
                              choices=[
                                  ("under_review", "Under Review"),
                                  ("interview", "Interview"),
                                  ("OA_received", "OA Received"),
                                  ("offer_received", "Offer Received"),
                                  ("rejected", "Rejected"),
                              ],
                              default="under_review")
    link = models.URLField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.company_name} - {self.position}"
    
    

