let flag=0;
    function block(){
        const b=document.getElementsByClassName("homeblock")[0];
        if(flag===0){
            b.style.display="block";
            flag=1;
        }else{
            b.style.display="none";
            flag=0;
        }
    }