# Generated by Django 4.2.1 on 2023-05-05 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('integrate', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactinfo',
            name='enquiry',
            field=models.CharField(max_length=50),
        ),
    ]