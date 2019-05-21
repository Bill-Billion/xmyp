"use strict";

//变量定义区域
var count1 = 0;
var _ref = [$(".p-trap-wrap .swiper-wrapper"), $(".p-trap-wrap .swiper-button-next"), $(".p-trap-wrap .swiper-button-prev"), $(".p-trap-wrap .swiper-slide"), $(".h-new-sec .swiper-wrapper"), $(".h-new-sec .swiper-button-next"), $(".h-new-sec .swiper-button-prev"), $(".h-new-sec .swiper-slide")],
    limte_slide = _ref[0],
    limte_next = _ref[1],
    limte_prev = _ref[2],
    limite_goods = _ref[3],
    hot_slide = _ref[4],
    hot_next = _ref[5],
    hot_prev = _ref[6],
    hot_goods = _ref[7]; // 头、尾部判断函数

function judgeClick() {
  if (count1 === limite_goods.length - 3) {
    limte_next.addClass("swiper-button-disabled"); // limte_next.off("click");
  } else if (count1 === 0) {
    limte_prev.addClass("swiper-button-disabled"); // limte_prev.off("click");
  } else {
    // limte_next.on("click");
    // limte_prev.on("click");
    limte_next.removeClass("swiper-button-disabled");
    limte_prev.removeClass("swiper-button-disabled");
  }
} //点击右移271px


function goNext(evt) {
  count1++;
  console.log(count1);
  evt.css({
    transform: "translate3d(" + -271 * count1 + "px, 0px, 0px)",
    "transition-duration": "600ms"
  });
  judgeClick();
} //点击左移271px


function goPrev(evt) {
  count1--;
  console.log(count1);
  evt.css({
    transform: "translate3d(" + -271 * count1 + "px, 0px, 0px)",
    "transition-duration": "600ms"
  });
  judgeClick();
}

limte_next.click(function () {
  goNext(limte_slide);
});
limte_prev.click(function () {
  goPrev(limte_slide);
});
hot_next.click(function () {
  goNext(hot_slide);
});
hot_prev.click(function () {
  goPrev(hot_slide);
});
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
// $("swiper-silde")