"use strict";

$(function () {
  //变量定义区域
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var news = "news";
  var limte = "limte";
  var timer = null;
  var _ref = [$(".banner-nav .swiper-wrapper"), $(".banner-nav .swiper-button-next"), $(".banner-nav .swiper-button-prev"), $(".banner-nav .swiper-slide"), $(".p-trap-wrap .swiper-wrapper"), $(".p-trap-wrap .swiper-button-next"), $(".p-trap-wrap .swiper-button-prev"), $(".p-trap-wrap .swiper-slide"), $(".h-new-sec .swiper-wrapper"), $(".h-new-sec .swiper-button-next"), $(".h-new-sec .swiper-button-prev"), $(".h-new-sec .swiper-slide")],
      banner_slide = _ref[0],
      banner_next = _ref[1],
      banner_prev = _ref[2],
      banner_img = _ref[3],
      limte_slide = _ref[4],
      limte_next = _ref[5],
      limte_prev = _ref[6],
      limite_goods = _ref[7],
      news_slide = _ref[8],
      news_next = _ref[9],
      news_prev = _ref[10],
      news_goods = _ref[11]; // console.log(banner_img.length)

  function bannerNext(evt) {
    count1++;
    evt.css({
      transform: "translate3d(" + -864 * count1 + "px, 0px, 0px)",
      "transition-duration": "1000ms"
    });
  }

  function bannerPrev(evt) {
    count1--;
    evt.css({
      transform: "translate3d(" + -864 * count1 + "px, 0px, 0px)",
      "transition-duration": "1000ms"
    });
  } // 头、尾部判断函数


  function judgeClick(num, next, prev, good) {
    if (num === good.length - 4) {
      next.addClass("swiper-button-disabled"); // limte_next.off("click");
    } else if (num === 0) {
      prev.addClass("swiper-button-disabled"); // limte_prev.off("click");
    } else {
      // limte_next.on("click");
      // limte_prev.on("click");
      next.removeClass("swiper-button-disabled");
      prev.removeClass("swiper-button-disabled");
    }
  } //点击右移271px


  function goNext(evt, num, next, prev, good) {
    num++;
    console.log(num);
    evt.css({
      transform: "translate3d(" + -271 * num + "px, 0px, 0px)",
      "transition-duration": "600ms"
    });
    judgeClick(num, next, prev, good);
  } //点击左移271px


  function goPrev(evt, num, next, prev, good) {
    num--;
    console.log(num);
    evt.css({
      transform: "translate3d(" + -271 * num + "px, 0px, 0px)",
      "transition-duration": "600ms"
    });
    judgeClick(num, next, prev, good);
  } // timer = setInterval(function (){
  //     count1++;
  //     if(count1==banner_img.length){count1=0};
  //     banner_img.eq(count1).trigger("click");
  // },1000);


  banner_next.click(function () {
    bannerNext(banner_slide);
  });
  banner_prev.click(function () {
    bannerPrev(banner_slide);
  });
  limte_next.click(function () {
    goNext(limte_slide, count2, limte_next, limte_prev, limite_goods);
    count2++;
  });
  limte_prev.click(function () {
    goPrev(limte_slide, count2, limte_next, limte_prev, limite_goods);
    count2--;
  });
  news_next.click(function () {
    goNext(news_slide, count3, news_next, news_prev, news_goods);
    count3++;
  });
  news_prev.click(function () {
    goPrev(news_slide, count3, news_next, news_prev, news_goods);
    count3--;
  });
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
//鼠标移入商品，样式发生变化

$(function () {
  var goods = $(".m-goods-item-container");
  goods.mouseenter(function () {
    $(this).css({
      "transition": "0.5s",
      "transform": "translate3d(0px, -3px, 0px)",
      "box-shadow": "rgb(230,230,230) 0px 0px 5px 2px",
      "transition-duration": "600ms"
    });
  });
  goods.mouseleave(function () {
    $(this).css({
      "box-shadow": "",
      "transform": "translate3d(0px, 0px, 0px)"
    });
  });
}); //搜索栏吸顶

$(function () {
  var m_header = $("#m-header"),
      set_top = m_header.offset();
  $(document).on("scroll", function () {
    var header_top = $(document).scrollTop();

    if (header_top > 450) {
      m_header.addClass("m-header-fixed");
    } else {
      m_header.removeClass("m-header-fixed");
    }
  });
});