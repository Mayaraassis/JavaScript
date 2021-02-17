import Countdown from "./countdown.js";
const tempoNiver=new Countdown('18 August 2021  GMT-0300');
let D= document.querySelector('.text_days');
let H= document.querySelector('.text_hours');
let M= document.querySelector('.text_minutes');
let S= document.querySelector('.text_seconds');

setInterval(()=>{
  
  D.innerHTML=tempoNiver.total.days;
  H.innerHTML=tempoNiver.total.hours;
  M.innerHTML=tempoNiver.total.minutes;
  S.innerHTML=tempoNiver.total.seconds;

  
  console.log(tempoNiver.total);
},1000
)

