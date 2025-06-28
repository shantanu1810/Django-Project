let clk;
function startTime(){
    let s=0;
    let m=5;
    const c=document.getElementsByClassName('t')[0];
    clk=setInterval(function(){
        if(s==0 && m==0){
            clearInterval(clk);
            endexam();
            return;
        }
        if(s==0){
            m-=1;
            s=59;
        }else{
            s-=1;
        }
        let st;
        if(s<10){
            st=" 0"+m+" : 0"+s;
        }else{
            st=" 0"+m+" : "+s;
        }
        c.innerHTML=st;
    },999
)
}
function endexam(){
    const c=document.getElementsByClassName('blockfinish')[0];
    c.style.display='block';
}