from django.shortcuts import redirect,render
from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.models import User
from django.contrib import messages
from .models import *
from django.views.decorators.csrf import csrf_protect
import random

def members(request):
    return HttpResponse("Hello world!")

def home(request):
    template=loader.get_template('homePage.html')
    return HttpResponse(template.render())

def about(request):
    template=loader.get_template('about.html')
    return HttpResponse(template.render())

def knowledge(request):
    template=loader.get_template('knowledge.html')
    return HttpResponse(template.render())

@csrf_protect
def signin(request):
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        print(username," ",password)
        a=list(Users.objects.all().values())
        flag=False
        for i in a:
            if i['user_Name']==username:
                flag=True
                break
        if flag:
            return render(request,'signin.html',{'message':"UserName is Already Taken."})
        user=Users(user_Name=username,password=password,firstname="",middlename="",lastname="",phone="+91 ",email="")
        user.save()
        return render(request,'login.html',{'success':"Account Successfully Created",'fail':""})

    return render(request,'signin.html')

user_data=None
id_main=0
def login(requests):
    if requests.method=="POST":
        username=requests.POST.get('username')
        password=requests.POST.get('password')
        user=Users.objects.filter(user_Name=username)
        if not user.exists():
            return render(requests,'login.html',{'sucess':"",'fail':"Invalid UserName"})
        
        flag=False
        global id_main
        a=list(Users.objects.all().values())
        i=None
        for i in a:
            if i['user_Name']==username:
                if i['password']==password:
                    flag=True
                    break
            id_main+=1
        if not flag:
            return render(requests,'login.html',{'sucess':"",'fail':"Invalid Password"})
        else:
            global user_data
            user_data=i
            index=0
            for i in range(4):
                index=index*10+random.randrange(1,10)
            return redirect('/quize/homepage/'+str(index),id=index)
        
    return render(requests,'login.html',{'sucess':"",'fail':""})
def logining(i):
    pass

def forgetpassword(requests):
    return render(requests,'forgetpassword.html')

def homepage(request,id):
    global user_data
    print(user_data)
    path_details="/quize/homepage/"+str(id)+"/details"
    path_home="/quize/homepage/"+str(id)
    path_mark="/quize/homepage/"+str(id)+"/marks"
    path_question="/quize/homepage/"+str(id)+"/questions"
    path_quizes="/quize/homepage/"+str(id)+"/quizes"
    return render(request,'home.html',{'user':user_data,'path_details':path_details,'path_home':path_home,'path_mark':path_mark,'path_question':path_question,'path_quize':path_quizes})
def details(request,id):
    global user_data
    global id_main
    if(request.method=="POST"):
        a=Users.objects.all()[id_main]
        firstname=request.POST.get('firstname')
        middlename=request.POST.get('middlename')
        lastname=request.POST.get('lastname')
        phone=request.POST.get('phonenumber')
        email=request.POST.get('email')
        a.firstname=firstname
        a.middlename=middlename
        a.lastname=lastname
        a.phone=phone
        a.email=email
        a.save()

    path_details="/quize/homepage/"+str(id)+"/details"
    path_home="/quize/homepage/"+str(id)
    path_mark="/quize/homepage/"+str(id)+"/marks"
    path_question="/quize/homepage/"+str(id)+"/questions"
    return render(request,'details.html',{'user':user_data,'path_details':path_details,'path_home':path_home,'path_mark':path_mark,'path_question':path_question})

def marks(request,id):
    path_details="/quize/homepage/"+str(id)+"/details"
    path_home="/quize/homepage/"+str(id)
    path_mark="/quize/homepage/"+str(id)+"/marks"
    path_question="/quize/homepage/"+str(id)+"/questions"
    return render(request,'markspage.html',{'user':user_data,'path_details':path_details,'path_home':path_home,'path_mark':path_mark,'path_question':path_question})

def questions(request,id):
    path_details="/quize/homepage/"+str(id)+"/details"
    path_home="/quize/homepage/"+str(id)
    path_mark="/quize/homepage/"+str(id)+"/marks"
    path_question="/quize/homepage/"+str(id)+"/questions"
    if(request.method=='POST'):
        ques=request.POST.get('ques')
        o1=request.POST.get('o1')
        o2=request.POST.get('o2')
        o3=request.POST.get('o3')
        o4=request.POST.get('o4')
        c=request.POST.get('Correct')
        question=Questions(Ques=ques,opt1=o1,opt2=o2,opt3=o3,opt4=o4,correct=c)
        question.save()
        return render(request,'question_add.html',{'user':user_data,'path_details':path_details,'path_home':path_home,'path_mark':path_mark,'path_question':path_question,'succ':"Question Added Successfully",'fail':""})
    return render(request,'question_add.html',{'user':user_data,'path_details':path_details,'path_home':path_home,'path_mark':path_mark,'path_question':path_question,'succ':"",'fail':""})

def quize(request,id):
    global user_data
    if(request.method=="POST"):
        pass
    else:
        print(user_data)
        q=user_data['qnumber']
        a=list(Questions.objects.all().values())
        if(q==len(a)-1):
            pass
        i=0
        q_list=[]
        while(i<5 and (q+i)<len(a)):
            q_list.append(a[q+i])
            i+=1
        return render(request,'Quize_Questions.html',{'ques':q_list})
    
def quizepage(request,id):
    path_details="/quize/homepage/"+str(id)+"/details"
    path_home="/quize/homepage/"+str(id)
    path_mark="/quize/homepage/"+str(id)+"/marks"
    path_quizes="/quize/homepage/"+str(id)+"/quizes"
    path_quizestart="/quize/homepage/"+str(id)+"/quizeStart"
    path_question="/quize/homepage/"+str(id)+"/questions"
    if(request.method=='POST'):
        pass
    else:
        return render(request,'quizepage.html',{'user':user_data,'path_details':path_details,'path_home':path_home,'path_mark':path_mark,'path_question':path_question,'path_quize':path_quizes,'path_quizestart':path_quizestart})