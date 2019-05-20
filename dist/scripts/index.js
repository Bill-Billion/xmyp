"use strict";

var totalTime = 3600;
var count = setInterval(function () {
  totalTime--;

  if (totalTime == 0) {
    clearInterval(count);
    return true;
  }

  var c_hours = "<span>" + parseInt(totalTime / 3600) + "</span>";

  if (parseInt(totalTime / 3600) < 10) {
    c_hours = "<span> 0" + parseInt(totalTime / 3600) + "</span>";
  }

  hour.innerHTML = c_hours;
  var c_minutes = "<span>" + parseInt(totalTime / 60 % 60) + "</span>";

  if (parseInt(totalTime / 60 % 60) < 10) {
    c_minutes = "<span> 0" + parseInt(totalTime / 60 % 60) + "</span>";
  }

  minute.innerHTML = c_minutes;
  var c_seconds = "<span>" + parseInt(totalTime % 60) + "</span>";

  if (parseInt(totalTime % 60) < 10) {
    c_seconds = "<span> 0" + parseInt(totalTime % 60) + "</span>";
  }

  second.innerHTML = c_seconds;
}, 1000); // let count = setInterval(countDown(),1000);
// function countDown(count){
//     totalTime--;
//     if(totalTime == 0){
//         clearInterval(count);
//         return true;
//     }
//     var c_hours = "<span>" + parseInt(totalTime/3600) +"</span>"
//         if(parseInt(totalTime/3600) <10){
//             c_hours = "<span> 0" + parseInt(totalTime/3600) +"</span>";
//         }
//     hour.innerHTML = c_hours;
//     var c_minutes = "<span>" + parseInt((totalTime/60)%60) +"</span>";
//         if(parseInt((totalTime/60)%60) < 10){
//             c_minutes =  "<span> 0" + parseInt((totalTime/60)%60) +"</span>";
//         }
//     minute.innerHTML = c_minutes;
//     var c_seconds = "<span>" + parseInt(totalTime%60) +"</span>";
//         if(parseInt(totalTime%60) <10){
//             c_seconds = "<span> 0" + parseInt(totalTime%60) +"</span>";
//         }
//     second.innerHTML = c_seconds;
// }