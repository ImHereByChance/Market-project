# Generated by Django 3.1.1 on 2020-10-27 17:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
    ]
