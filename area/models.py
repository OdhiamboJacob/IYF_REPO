from django.db import models

class shapes(models.Model):
    shape = models.CharField(max_length=50)
    calc_date = models.DateTimeField('date calculated')

class area(models.Model):
    shape_text = models.ForeignKey(shapes, on_delete=models.CASCADE)
    area_1 = models.IntegerField(max_length=10)
