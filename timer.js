var min=00,hour=00,sec=00;
var strt=document.getElementById("strt");
var restart=document.getElementById("restrt");
function clockstrt(){
    IntervalId=setInterval(function(){
        sec++;
       disable_button(true);
        document.getElementById("sec").innerHTML=format(sec);
        if(sec>59){
            if(min>=59){
                hour++;
                min=0;
                sec=0;
                document.getElementById("sec").innerHTML=format(sec);
                document.getElementById("mins").innerHTML=format(min);
                document.getElementById("hrs").innerHTML=format(hour);
            }
            else{
                min++;
            sec=0;
            document.getElementById("sec").innerHTML=format(sec);
            document.getElementById("mins").innerHTML=format(min);
            }
            
        }
       
    },1000);
}
function format(a){
    if(a<10){
        return "0"+a;
    }
    else{
        return a;
    }
}
function clockstop()
    {
        disable_button(false);
        disable_restrt_button(false);
        clearInterval(IntervalId);
        
    }
function clockrestrt()
    {
                hour=0;
                min=0;
                sec=0;
                document.getElementById("sec").innerHTML=format(sec);
                document.getElementById("mins").innerHTML=format(min);
                document.getElementById("hrs").innerHTML=format(hour);
                disable_restrt_button(true);
           
        
    }

    function disable_button(a){
        document.getElementById("strt").disabled=a;
    }
    function disable_restrt_button(a){
        document.getElementById("restrt").disabled=a;
    }