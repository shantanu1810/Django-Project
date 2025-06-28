var clkt,le=100;
f=0;
function move(){
    clearInterval(cl);
    if(f!=0){
        document.getElementsByClassName('movehead')[0].innerHTML="Check Your Knowledge Here.";
        f=0;
    }else{
        document.getElementsByClassName('movehead')[0].innerHTML="Welcome to My Page";
        f=1;
    }
    document.getElementsByClassName('movehead')[0].style.left="100%";
    document.getElementsByClassName('Heading')[0].style.color="rgb(0,0,0)";
    clearInterval(cl);
    le=100;
    clkt=setInterval(function(){
        if(le<=34){
            clear();
        }else{
        document.getElementsByClassName('movehead')[0].style.left=(le-0.2)+"%";
        le=le-0.2;
        }
    },30
    )
}
g=0;
var cl;
function clear(){
    g=0
    clearInterval(clkt);
    cl=setInterval(function(){
        if(g>=255){
            move();
        }else{
        document.getElementsByClassName('Heading')[0].style.color="rgb(0,"+(g+1.275)+",0)";
        g+=1.275
        }
    },8
    )
}
function Python(){
    const que=document.getElementById('questions');
    que.innerHTML='<div style="font-weigth:bolder;font-size:20px;">Python Quize - Basic</div><br/><hr/>'
    +'<div><div class="qblock">Q1-Python is which type of language?<br><label>A.<input type="radio" name="q0" value="A">object Oriented Programming Language<br>B.<input type="radio" name="q0" value="B">Procedual Language<br>C.<input type="radio" name="q0" value="C">Low Level Language<br>D.<input type="radio" name="q0" value="D">Machine Level Language<p class="result"></p></label></div><br>'
+'<div class="qblock">Q2-When was Python developed?<br><label>A.<input type="radio" name="q1" value="A">1992<br>B.<input type="radio" name="q1" value="B">1989<br>C.<input type="radio" name="q1" value="C">1990<br>D.<input type="radio" name="q1" value="D">1995<p class="result"></p></label></div><br>'
+'<div class="qblock">Q3-Who created python programming language?<br><label>A.<input type="radio" name="q2" value="A">Orlinjin Michiel<br>B.<input type="radio" name="q2" value="B">James Gosling<br>C.<input type="radio" name="q2" value="C">Knapp-Van Rossum<br>D.<input type="radio" name="q2" value="D">Guido van Rossum<p class="result"></p></label></div><br>'
+'<div class="qblock">Q4-When was django invented?<br><label>A.<input type="radio" name="q3" value="A">2001<br>B.<input type="radio" name="q3" value="B">2003<br>C.<input type="radio" name="q3" value="C">2004<br>D.<input type="radio" name="q3" value="D">2002<p class="result"></p></label></div><br>'
+'<div class="qblock">Q5-In which language python is written? <br><label>A.<input type="radio" name="q4" value="A">C language<br>B.<input type="radio" name="q4" value="B">Php<br>C.<input type="radio" name="q4" value="C">java<br>D.<input type="radio" name="q4" value="D">All of the above<p class="result"></p></label></div><br>'
+'<div class="qblock">Q6-What is the correct extension of python file?<br><label>A.<input type="radio" name="q5" value="A"> .python<br>B.<input type="radio" name="q5" value="B"> .p<br>C.<input type="radio" name="q5" value="C"> .py<br>D.<input type="radio" name="q5" value="D"> .None of the above<p class="result"></p></label></div>'
+'<div class="qblock">Q7-How null List are delare in python?<br><label>A.<input type="radio" name="q6" value="A"> {}<br>B.<input type="radio" name="q6" value="B"> []<br>C.<input type="radio" name="q6" value="C"> ()<br>D.<input type="radio" name="q6" value="D"> {,}<p class="result"></p></label></div>'
+'<div class="qblock">Q8-How we get substring of a list?<br><label>A.<input type="radio" name="q7" value="A"> l[x:y]<br>B.<input type="radio" name="q7" value="B"> l[x:y:z]<br>C.<input type="radio" name="q7" value="C"> l[x,y]<br>D.<input type="radio" name="q7" value="D"> Both A and B<p class="result"></p></label></div>'
+'<div class="qblock">Q9-What variables in python actually store?<br><label>A.<input type="radio" name="q8" value="A"> Object<br>B.<input type="radio" name="q8" value="B"> Value<br>C.<input type="radio" name="q8" value="C"> Both Object and Value<br>D.<input type="radio" name="q8" value="D"> None of the Above<p class="result"></p></label></div>'
+'<div class="qblock">Q10-Find Output?<br/>>>s="Hello How are You?"<br/>>>print(s[::2])<br><label>A.<input type="radio" name="q9" value="A"> HlohwaeYu<br>B.<input type="radio" name="q9" value="B"> hlo o e o<br>C.<input type="radio" name="q9" value="C"> uYeawholH<br>D.<input type="radio" name="q9" value="D"> hlohw r Yu<p class="result"></p></label></div>'
+'<div style="height:50px;"><button onclick="check(0)">SUBMIT</button></div></div>'
const b1=document.getElementsByClassName('nav10');
b1[0].style.background='white';
for(let i=1;i<5;i++){
    b1[i].style.background='rgb(112, 212, 242)';
}
}

function Java(){
    const que=document.getElementById('questions');
    que.innerHTML='<div style="font-weigth:bolder;font-size:20px;">Java Quize - Basic</div><br/><hr/>'
+'<div><div class="qblock">Q1-Java is which type of language?<br><label>A.<input type="radio" name="q0" value="A">Object Oriented Programming Language<br>B.<input type="radio" name="q0" value="B">Procedual Language<br>C.<input type="radio" name="q0" value="C">Low Level Language<br>D.<input type="radio" name="q0" value="D">Machine Level Language<p class="result"></p></label></div><br>'
+'<div class="qblock">Q2-When was Java developed?<br><label>A.<input type="radio" name="q1" value="A">1992<br>B.<input type="radio" name="q1" value="B">1989<br>C.<input type="radio" name="q1" value="C">1990<br>D.<input type="radio" name="q1" value="D">1995<p class="result"></p></label></div><br>'
+'<div class="qblock">Q3-Who created python programming language?<br><label>A.<input type="radio" name="q2" value="A">Orlinjin Michiel<br>B.<input type="radio" name="q2" value="B">James Gosling<br>C.<input type="radio" name="q2" value="C">Knapp-Van Rossum<br>D.<input type="radio" name="q2" value="D">Guido van Rossum<p class="result"></p></label></div><br>'
+'<div class="qblock">Q4-When was django invented?<br><label>A.<input type="radio" name="q3" value="A">2001<br>B.<input type="radio" name="q3" value="B">2003<br>C.<input type="radio" name="q3" value="C">2004<br>D.<input type="radio" name="q3" value="D">2002<p class="result"></p></label></div><br>'
+'<div class="qblock">Q5-In which language python is written? <br><label>A.<input type="radio" name="q4" value="A">C language<br>B.<input type="radio" name="q4" value="B">Php<br>C.<input type="radio" name="q4" value="C">java<br>D.<input type="radio" name="q4" value="D">All of the above<p class="result"></p></label></div><br>'
+'<div class="qblock">Q6-What is the correct extension of python file?<br><label>A.<input type="radio" name="q5" value="A"> .python<br>B.<input type="radio" name="q5" value="B"> .p<br>C.<input type="radio" name="q5" value="C"> .py<br>D.<input type="radio" name="q5" value="D"> .None of the above<p class="result"></p></label></div>'
+'<div style="height:50px;"><button onclick="check(1)">SUBMIT</button></div></div>'
const b1=document.getElementsByClassName('nav10');
b1[1].style.background='white';
for(let i=0;i<5;i++){
    if(i==1)
        continue;
    b1[i].style.background='rgb(112, 212, 242)';
}
}

function Clang(){
    const que=document.getElementById('questions');
    que.innerHTML='<div><div class="qblock">Q1-C is which type of language?<br><label>A.<input type="radio" name="q0" value="A">object Oriented Programming Language<br>B.<input type="radio" name="q0" value="B">Procedual Language<br>C.<input type="radio" name="q0" value="C">Low Level Language<br>D.<input type="radio" name="q0" value="D">Machine Level Language<p class="result"></p></label></div><br>'
+'<div class="qblock">Q2-When was Python developed?<br><label>A.<input type="radio" name="q1" value="A">1992<br>B.<input type="radio" name="q1" value="B">1989<br>C.<input type="radio" name="q1" value="C">1990<br>D.<input type="radio" name="q1" value="D">1995<p class="result"></p></label></div><br>'
+'<div class="qblock">Q3-Who created python programming language?<br><label>A.<input type="radio" name="q2" value="A">Orlinjin Michiel<br>B.<input type="radio" name="q2" value="B">James Gosling<br>C.<input type="radio" name="q2" value="C">Knapp-Van Rossum<br>D.<input type="radio" name="q2" value="D">Guido van Rossum<p class="result"></p></label></div><br>'
+'<div class="qblock">Q4-When was django invented?<br><label>A.<input type="radio" name="q3" value="A">2001<br>B.<input type="radio" name="q3" value="B">2003<br>C.<input type="radio" name="q3" value="C">2004<br>D.<input type="radio" name="q3" value="D">2002<p class="result"></p></label></div><br>'
+'<div class="qblock">Q5-In which language python is written? <br><label>A.<input type="radio" name="q4" value="A">C language<br>B.<input type="radio" name="q4" value="B">Php<br>C.<input type="radio" name="q4" value="C">java<br>D.<input type="radio" name="q4" value="D">All of the above<p class="result"></p></label></div><br>'
+'<div class="qblock">Q6-What is the correct extension of python file?<br><label>A.<input type="radio" name="q5" value="A"> .python<br>B.<input type="radio" name="q5" value="B"> .p<br>C.<input type="radio" name="q5" value="C"> .py<br>D.<input type="radio" name="q5" value="D"> .None of the above<p class="result"></p></label></div>'
+'<div style="height:50px;"><button onclick="check(2)">SUBMIT</button></div></div>'
const b1=document.getElementsByClassName('nav10');
b1[2].style.background='white';
for(let i=0;i<5;i++){
    if(i==2)
        continue;
    b1[i].style.background='rgb(112, 212, 242)';
}
}

function Sql(){
    const que=document.getElementById('questions');
    que.innerHTML='<div><div class="qblock">Q1-Python is which type of language?<br><label>A.<input type="radio" name="q0" value="A">object Oriented Programming Language<br>B.<input type="radio" name="q0" value="B">Procedual Language<br>C.<input type="radio" name="q0" value="C">Low Level Language<br>D.<input type="radio" name="q0" value="D">Machine Level Language<p class="result"></p></label></div><br>'
+'<div class="qblock">Q2-When was Python developed?<br><label>A.<input type="radio" name="q1" value="A">1992<br>B.<input type="radio" name="q1" value="B">1989<br>C.<input type="radio" name="q1" value="C">1990<br>D.<input type="radio" name="q1" value="D">1995<p class="result"></p></label></div><br>'
+'<div class="qblock">Q3-Who created python programming language?<br><label>A.<input type="radio" name="q2" value="A">Orlinjin Michiel<br>B.<input type="radio" name="q2" value="B">James Gosling<br>C.<input type="radio" name="q2" value="C">Knapp-Van Rossum<br>D.<input type="radio" name="q2" value="D">Guido van Rossum<p class="result"></p></label></div><br>'
+'<div class="qblock">Q4-When was django invented?<br><label>A.<input type="radio" name="q3" value="A">2001<br>B.<input type="radio" name="q3" value="B">2003<br>C.<input type="radio" name="q3" value="C">2004<br>D.<input type="radio" name="q3" value="D">2002<p class="result"></p></label></div><br>'
+'<div class="qblock">Q5-In which language python is written? <br><label>A.<input type="radio" name="q4" value="A">C language<br>B.<input type="radio" name="q4" value="B">Php<br>C.<input type="radio" name="q4" value="C">java<br>D.<input type="radio" name="q4" value="D">All of the above<p class="result"></p></label></div><br>'
+'<div class="qblock">Q6-What is the correct extension of python file?<br><label>A.<input type="radio" name="q5" value="A"> .python<br>B.<input type="radio" name="q5" value="B"> .p<br>C.<input type="radio" name="q5" value="C"> .py<br>D.<input type="radio" name="q5" value="D"> .None of the above<p class="result"></p></label></div>'
+'<div style="height:50px;"><button onclick="check(3)">SUBMIT</button></div></div>'
const b1=document.getElementsByClassName('nav10');
b1[3].style.background='white';
for(let i=0;i<5;i++){
    if(i==3)
        continue;
    b1[i].style.background='rgb(112, 212, 242)';
}
}

function dsa(){
    const que=document.getElementById('questions');
    que.innerHTML='<div><div class="qblock">Q1-Python is which type of language?<br><label>A.<input type="radio" name="q0" value="A">object Oriented Programming Language<br>B.<input type="radio" name="q0" value="B">Procedual Language<br>C.<input type="radio" name="q0" value="C">Low Level Language<br>D.<input type="radio" name="q0" value="D">Machine Level Language<p class="result"></p></label></div><br>'
+'<div class="qblock">Q2-When was Python developed?<br><label>A.<input type="radio" name="q1" value="A">1992<br>B.<input type="radio" name="q1" value="B">1989<br>C.<input type="radio" name="q1" value="C">1990<br>D.<input type="radio" name="q1" value="D">1995<p class="result"></p></label></div><br>'
+'<div class="qblock">Q3-Who created python programming language?<br><label>A.<input type="radio" name="q2" value="A">Orlinjin Michiel<br>B.<input type="radio" name="q2" value="B">James Gosling<br>C.<input type="radio" name="q2" value="C">Knapp-Van Rossum<br>D.<input type="radio" name="q2" value="D">Guido van Rossum<p class="result"></p></label></div><br>'
+'<div class="qblock">Q4-When was django invented?<br><label>A.<input type="radio" name="q3" value="A">2001<br>B.<input type="radio" name="q3" value="B">2003<br>C.<input type="radio" name="q3" value="C">2004<br>D.<input type="radio" name="q3" value="D">2002<p class="result"></p></label></div><br>'
+'<div class="qblock">Q5-In which language python is written? <br><label>A.<input type="radio" name="q4" value="A">C language<br>B.<input type="radio" name="q4" value="B">Php<br>C.<input type="radio" name="q4" value="C">java<br>D.<input type="radio" name="q4" value="D">All of the above<p class="result"></p></label></div><br>'
+'<div class="qblock">Q6-What is the correct extension of python file?<br><label>A.<input type="radio" name="q5" value="A"> .python<br>B.<input type="radio" name="q5" value="B"> .p<br>C.<input type="radio" name="q5" value="C"> .py<br>D.<input type="radio" name="q5" value="D"> .None of the above<p class="result"></p></label></div>'
+'<div style="height:50px;"><button onclick="check(4)">SUBMIT</button></div></div>'
const b1=document.getElementsByClassName('nav10');
b1[4].style.background='white';
for(let i=0;i<5;i++){
    if(i==4)
        continue;
    b1[i].style.background='rgb(112, 212, 242)';
}
}

var clk,s=120;
function time(){
    s=60;
    clk=setInterval(function(){
        if(s==0){
            check();
            return;
        }
        document.getElementsByClassName('timer')[0].innerHTML='<b>Timer :-  '+s+' second</b>';
        s=s-1;
        },1000
    )
    }
var q=["q0","q1","q2","q3","q4","q5","q6","q7","q8","q9"];
var p_ans=['A','B','D','B','A','C','B','D','A','A'];
var j_ans=['A','B','D','B','A','C','B','D','A','A'];
var c_ans=['A','B','D','B','A','C','B','D','A','A'];
var sql_ans=['A','B','D','B','A','C','B','D','A','A'];
var dsa_ans=['A','B','D','B','A','C','B','D','A','A'];
function check(e){
    if(e==0)
    ans=p_ans;
    else if(e==1)
    ans=j_ans;
    else if(e==2)
    ans=c_ans;
    else if(e==3)
    ans=sql_ans;
    else
    ans=dsa_ans
    c=0;
    for(var i=0;i<10;i++){
        var el=document.getElementsByName(q[i]);
        for(var j=0;j<el.length;j++){
            if(el[j].checked){
                if(el[j].value==ans[i]){
                    document.getElementsByClassName('result')[i].innerHTML='<p style="color:green;">CORRECT</p>';
                    c++;
                }else{
                    document.getElementsByClassName('result')[i].innerHTML='<p style="color:red;">WRONG <br>Correct Answer -'+ans[i]+'</p>';
                }
                break;
            }
        }
        if(j==el.length){
            document.getElementsByClassName('result')[i].innerHTML='<p style="color:red;">NOT ANSWERED</p>';
        }
    }
    var p=(c/10)*100;
    let b=document.getElementsByClassName('result_card')[0];
    b.innerHTML='<b>Result : '+c+'/10<br>Percentage : '+p+'%<br>Accuracy : '+(c/15)*100+'</b><button class="rem" onclick="remove()">x</button>';
    b.style.color="black";
    b.style.display="block";
}
function remove(){
    let b=document.getElementsByClassName('result_card')[0].style.display="none";
}

