let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let second=document.getElementById("second")
let time=document.getElementById("time")

function clock(){
    let date=new Date()
    let hrs=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()
//if second and time lessthan10
  if(sec<10) {
    sec=`0${sec}`
   
  } 
  if(min<10){
    min=`0${min}`
  }
// to make time at(12) hours not(24)
if (hrs>12){
    hrs=hrs-12
    time.innerHTML="pm"
}
else{
    time.innerHTML="Am"
}
//to call clock in bromser.
hours.innerHTML=hrs
minutes.innerHTML=min
second.innerHTML=sec


}
//to recall function
setInterval(clock,1000)