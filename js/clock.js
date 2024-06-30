const clock=document.querySelector("#clock");
const dated=document.querySelector("#date");
const day=['일', '월', '화', '수', '목', '금', '토'];

function getDate(){
    const date=new Date();
    const years=String(date.getFullYear());
    const months=String(date.getMonth()+1).padStart(2,"0");
    const dates=String(date.getDate()).padStart(2,"0");
    const days=day[date.getDay()];
    dated.innerText=`${years}.${months}.${dates}(${days})`;
}
function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getDate();
getClock();
setInterval(getClock, 1000);