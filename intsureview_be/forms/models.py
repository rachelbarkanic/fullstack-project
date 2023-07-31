from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Created Form model class, instances represented as 'Posts' on the FE


class Form(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    username = models.CharField(max_length=50)
    difficulty = models.IntegerField(
        default=1, validators=[MaxValueValidator(10), MinValueValidator(1)])
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
