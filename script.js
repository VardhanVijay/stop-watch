const startBtn=document.getElementById("Start");
const stopBtn=document.getElementById("Stop");
const clock=document.getElementsByClassName("clock");

let hour=0;
let minute=0;
let second=0;

let val=false;
let interval;
startBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("clicked");
    if (!val) {
        val = true;
        interval = setInterval(display, 1000);
    }
})

stopBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    val = false;
    console.log("stop");
    clearInterval(interval);
})

function display() {
    const tim=document.querySelector(".time");

    second++;
    if(second==60){
        minute+=1;
        second=0;
    }

    if(minute==60){
        hour++;
        minute=0;
    }

    tim.innerText=`${hour}:${minute}:${second}`;

}

const reset=document.getElementById("reset");

reset.addEventListener("click",()=>{
    hour=0;
    second=0;
    minute=0;

    const tim=document.querySelector(".time");
    tim.innerText="00:00:00";
    val=false;
    clearInterval(interval);

})
const res=document.getElementById("resume");
res.addEventListener("click",(event)=>{
    event.preventDefault();
    if (!val) { 
        val = true;
        interval = setInterval(display, 1000);
    }
})
