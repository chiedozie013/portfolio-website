from django.db import models

# Create your models here.

class ContactInfo(models.Model):
    firstName = models.CharField(max_length = 100, null=False, blank=False)
    email = models.EmailField(max_length=254, null=False, blank=False)
    enquiry = models.CharField(max_length=50, null=False, blank=False)
    comment = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.name