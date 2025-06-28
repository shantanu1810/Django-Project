from django.db import models

class Users(models.Model):
    user_Name=models.CharField(max_length=50)
    password=models.CharField(max_length=15)
    firstname=models.CharField(max_length=40,null=True)
    middlename=models.CharField(max_length=40,null=True)
    lastname=models.CharField(max_length=40,null=True)
    phone=models.CharField(max_length=10,null=True)
    email=models.CharField(max_length=50,null=True)
    totalmark=models.IntegerField(default=0)
    rank=models.IntegerField(default=1000)
    qnumber=models.IntegerField(default=0)

    def __str__(self):
        return self.user_Name
    
class Questions(models.Model):
    Ques=models.TextField(max_length=5000)
    opt1=models.CharField(max_length=100)
    opt2=models.CharField(max_length=100)
    opt3=models.CharField(max_length=100)
    opt4=models.CharField(max_length=100)
    correct=models.CharField(max_length=100, null=True)

    def __str__(self):
        return "question"
