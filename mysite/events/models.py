from django.db import models

from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=100)  # Titre de l'événement
    description = models.TextField()  # Description de l'événement
    date = models.DateField()  # Date de l'événement
    time = models.TimeField()  # Heure de l'événement
    location = models.CharField(max_length=100)  # Lieu de l'événement

    def __str__(self):
        return self.title

