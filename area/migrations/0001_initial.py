# Generated by Django 3.2.9 on 2021-11-19 08:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='shapes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shape', models.CharField(max_length=50)),
                ('calc_date', models.DateTimeField(verbose_name='date calculated')),
            ],
        ),
        migrations.CreateModel(
            name='area',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('area_1', models.IntegerField(max_length=10)),
                ('shape_text', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='area.shapes')),
            ],
        ),
    ]