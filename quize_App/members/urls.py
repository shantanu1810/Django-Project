from django.urls import path
from . import views

urlpatterns = [
    path('members/',views.members),
    path('',views.home),
    path('about/',views.about),
    path('signin/',views.signin),
    path('knowledge/',views.knowledge),
    path('login/',views.login),
    path('forgetpassword/',views.forgetpassword),
    path('quize/homepage/<int:id>',views.homepage),
    path('quize/homepage/<int:id>/details',views.details),
    path('quize/homepage/<int:id>/marks',views.marks),
    path('quize/homepage/<int:id>/questions',views.questions),
    path('quize/homepage/<int:id>/quizeStart',views.quize),
    path('quize/homepage/<int:id>/quizes',views.quizepage),
]