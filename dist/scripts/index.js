"use strict";

$(function () {
  //变量定义区域
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var news = "news";
  var limte = "limte";
  var timer = null;
  var _ref = [$(".banner-nav .swiper-wrapper"), $(".banner-nav .swiper-button-next"), $(".banner-nav .swiper-button-prev"), $(".banner-nav .swiper-slide"), $(".p-trap-wrap .swiper-wrapper"), $(".p-trap-wrap .swiper-button-next"), $(".p-trap-wrap .swiper-button-prev"), $(".p-trap-wrap .swiper-slide"), $(".h-new-sec .swiper-wrapper"), $(".h-new-sec .swiper-button-next"), $(".h-new-sec .swiper-button-prev"), $(".h-new-sec .swiper-slide"), $(".h-hot-sec .swiper-wrapper"), $(".h-hot-sec .swiper-button-next"), $(".h-hot-sec .swiper-button-prev"), $(".h-hot-sec .swiper-slide")],
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
      news_goods = _ref[11],
      hot_slide = _ref[12],
      hot_next = _ref[13],
      hot_prev = _ref[14],
      hot_goods = _ref[15]; // console.log(banner_img.length)

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
  hot_next.click(function () {
    goNext(hot_slide, count4, hot_next, hot_prev, hot_goods);
    count4++;
  });
  hot_prev.click(function () {
    goPrev(hot_slide, count4, hot_next, hot_prev, hot_goods);
    count4--;
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
      "transform": "translate3d(0px, -3px, 0px)",
      "box-shadow": "rgb(230,230,230) 0px 0px 5px 2px",
      "transition-duration": "300ms"
    });
  });
  goods.mouseleave(function () {
    $(this).css({
      "box-shadow": "",
      "transform": "translate3d(0px, 0px, 0px)"
    });
  });
}); //渲染商品界面

$(function () {
  var html = "";
  var index = 1;
  $.ajax({
    url: "../scripts/xmyp.json",
    //json文件位置
    type: "GET",
    //请求方式为get
    dataType: "json",
    //返回数据格式为json
    success: function success(data) {
      var count = 0;
      var a = null;
      var color_c = null;
      $.each(data, function (i, item) {
        count++; // console.log(item.tags===undefined);

        if (item.tags === undefined) {
          a = "<div class=\"m-goods-common-tag-con\"></div>";
        } else if (item.tags.length === 2) {
          a = "<div class=\"m-goods-common-tag-con\">\n                            <span class=\"common-tag common-tag-text\" style=\"background-color: rgb(217, 107, 108);\">".concat(item.tags[0].name, "</span>\n                            <span class=\"common-tag common-tag-text\" style=\"background-color: rgb(217, 107, 108);\">").concat(item.tags[1].name, "</span>\n                        </div>");
        } else {
          a = "<div class=\"m-goods-common-tag-con\">\n                            <span class=\"common-tag common-tag-text\" style=\"background-color: rgb(217, 107, 108);\">".concat(item.tags[0].name, "</span>\n                        </div>");
        }

        if (item.color_num === undefined) {
          color_c = " ";
        } else {
          color_c = "<div class=\"m-goods-pro-tag-con\">".concat(item.color_num, "\u8272\u53EF\u9009</div>");
        }

        if (count % 4 == 1) {
          html += "<div class=\"m-goods-item-container  pro-item-category\" data-src=\"/detail?gid=".concat(item.gid, "\" data-target=\"_blank\" style=\"margin-left:0\">\n                                <div class=\"category-img-container\">\n                                    <div class=\"product-img\">\n                                        <div class=\"m-product-image-container\" data-src=\"").concat(item.imgs.img800, "\" style=\"width: 264px; height: 198px;\">\n                                            <div class=\"img-container\" style=\"padding: 45px 70px 28px; width: 124px; height: 125px;\">\n                                                <img src=\"").concat(item.imgs.img800, "\" data-src=\"").concat(item.imgs.img800, "\" alt=\"").concat(item.name, "\" style=\"height: 125px; width: 125px; margin-left: -0.5px;\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <p class=\"pro-desc\">").concat(item.attr_ext.custom_summary, "</p>\n                                </div>\n                                ").concat(color_c, "\n                                <div class=\"category-box\">\n                                    <div class=\"m-goods-common-tag-con\"></div>\n                                    <p class=\"pro-info\" title=\"").concat(item.name, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.name, "</p>\n                                    <p class=\"pro-price\">\n                                        <span class=\"pro-unit\">\xA5</span>\n                                        <span class=\"m-num\">").concat(item.price / 100, "</span>\n                                    </p>\n                                </div>\n                            </div>");
        } else {
          html += "<div class=\"m-goods-item-container  pro-item-category\" data-src=\"/detail?gid=".concat(item.gid, "\" data-target=\"_blank\">\n                                <div class=\"category-img-container\">\n                                    <div class=\"product-img\">\n                                        <div class=\"m-product-image-container\" data-src=\"").concat(item.imgs.img800, "\" style=\"width: 264px; height: 198px;\">\n                                            <div class=\"img-container\" style=\"padding: 45px 70px 28px; width: 124px; height: 125px;\">\n                                                <img src=\"").concat(item.imgs.img800, "\" data-src=\"").concat(item.imgs.img800, "\" alt=\"").concat(item.name, "\" style=\"height: 125px; width: 125px; margin-left: -0.5px;\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <p class=\"pro-desc\">").concat(item.attr_ext.custom_summary, "</p>\n                                </div>\n                                ").concat(color_c, "\n                                <div class=\"category-box\">\n                                    ").concat(a, "\n                                    <p class=\"pro-info\" title=\"").concat(item.name, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.name, "</p>\n                                    <p class=\"pro-price\">\n                                        <span class=\"pro-unit\">\xA5</span>\n                                        <span class=\"m-num\">").concat(item.price / 100, "</span>\n                                    </p>\n                                </div>\n                            </div>");
        }
      });
      $(".m-product-list")[0].innerHTML = html;
      $(function () {
        var goods = $(".m-goods-item-container");
        goods.mouseenter(function () {
          $(this).css({
            "transform": "translate3d(0px, -3px, 0px)",
            "box-shadow": "rgb(230,230,230) 0px 0px 5px 2px",
            "transition-duration": "300ms"
          });
        });
        goods.mouseleave(function () {
          $(this).css({
            "box-shadow": "",
            "transform": "translate3d(0px, 0px, 0px)"
          });
        });
      });
    }
  });
  var viewHeight = document.documentElement.clientHeight;

  function lazyload() {
    var imgs = document.querySelectorAll('img[data-original][lazyload]');
    imgs.forEach(function (item) {
      if (item.dataset.original == '') {
        return;
      }

      var rect = item.getBoundingClientRect();

      if (rect.bottom >= -100 && rect.top < viewHeight - 100) {
        var img = new Image();
        img.src = item.dataset.original;

        img.onload = function () {
          item.src = img.src;
        };

        item.removeAttribute('data-original');
        item.removeAttribute('lazyload');
      }
    });
  } //  console.log(viewHeight);


  document.addEventListener('scroll', lazyload);
  setTimeout(function () {
    lazyload();
  }, 10);
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