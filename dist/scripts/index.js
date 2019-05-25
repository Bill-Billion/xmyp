"use strict";

$(function () {
  var html = "";
  var index = 1;
  $.ajax({
    url: "scripts/list.json",
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

        html += " <a href=\"detail.html?values=".concat(item.gid, "\">\n                            <div class=\"swiper-slide\">\n                                <div class=\"m-goods-item-container \" >\n                                    <div class=\"bigtrap-img-tag-container\">\n                                        <div class=\"img-tag\">\n                                            <span>").concat(item.discount_desc, "</span>\n                                        </div>\n                                        <div class=\"small-item-img\">\n                                            <div class=\"m-product-image-container undefined\" style=\"width: 266px; height: 266px;\" data-src=\"https://img.youpin.mi-img.com/pic_square/100435_c4206322728fa4b38cee7b8de7356752.jpg\">\n                                                <div class=\"img-container-s\" style=\"width: 266px; height: 266px;\">\n                                                    <img src=\"").concat(item.imgs.img_square, "\" data-src=\"https://img.youpin.mi-img.com/pic_square/100435_c4206322728fa4b38cee7b8de7356752.jpg\" alt=\"").concat(item.name, "\" style=\"width: 266px; height: 266px;\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"bigtrap-box\">\n                                        <p class=\"pro-info\" title=\"").concat(item.name, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.name, "</p>\n                                        <p class=\"pro-price\">\n                                            <span class=\"pro-unit\">\xA5</span>\n                                            <span class=\"m-num\">").concat(item.flash_price / 100, "</span>\n                                            <span class=\"pro-flag\">\u8D77</span>\n                                            <span class=\"market-price\">\n                                                <span class=\"pro-unit\">\xA5</span>\n                                                <span class=\"m-num\">").concat(item.market_price / 100, "</span>\n                                            </span>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            </a>");
      });
      $(".p-trap-wrap .swiper-wrapper")[0].innerHTML = html;
      changeStyle();
      var _ref = [$(".p-trap-wrap .swiper-wrapper"), $(".p-trap-wrap .swiper-button-next"), $(".p-trap-wrap .swiper-button-prev"), $(".p-trap-wrap .swiper-slide")],
          limte_slide = _ref[0],
          limte_next = _ref[1],
          limte_prev = _ref[2],
          limite_goods = _ref[3];
      limte_next.click(function () {
        goNext(limte_slide, count2, limte_next, limte_prev, limite_goods);
        count2++;
      });
      limte_prev.click(function () {
        goPrev(limte_slide, count2, limte_next, limte_prev, limite_goods);
        count2--;
      });
    }
  });
}); //变量定义区域

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var news = "news";
var limte = "limte";
var timer = null;
var _ref2 = [$(".banner-nav .swiper-wrapper"), $(".banner-nav .swiper-button-next"), $(".banner-nav .swiper-button-prev"), $(".banner-nav .swiper-slide"), $(".p-trap-wrap .swiper-wrapper"), $(".p-trap-wrap .swiper-button-next"), $(".p-trap-wrap .swiper-button-prev"), $(".p-trap-wrap .swiper-slide"), $(".h-new-sec .swiper-wrapper"), $(".h-new-sec .swiper-button-next"), $(".h-new-sec .swiper-button-prev"), $(".h-new-sec .swiper-slide"), $(".h-hot-sec .swiper-wrapper"), $(".h-hot-sec .swiper-button-next"), $(".h-hot-sec .swiper-button-prev"), $(".h-hot-sec .swiper-slide")],
    banner_slide = _ref2[0],
    banner_next = _ref2[1],
    banner_prev = _ref2[2],
    banner_img = _ref2[3],
    limte_slide = _ref2[4],
    limte_next = _ref2[5],
    limte_prev = _ref2[6],
    limite_goods = _ref2[7],
    news_slide = _ref2[8],
    news_next = _ref2[9],
    news_prev = _ref2[10],
    news_goods = _ref2[11],
    hot_slide = _ref2[12],
    hot_next = _ref2[13],
    hot_prev = _ref2[14],
    hot_goods = _ref2[15]; // console.log($(".h-hot-sec .swiper-wrapper").children());
// console.log(hot_goods)

function bannerNext(evt) {
  count1++;
  evt.css({
    transform: "translate3d(" + -859 * count1 + "px, 0px, 0px)",
    "transition-duration": "1000ms"
  });

  if (count1 === 5) {
    evt.css({
      transform: "translate3d(0px, 0px, 0px)"
    });
    count1 = 0;
  }
}

function bannerPrev(evt) {
  count1--;
  evt.css({
    transform: "translate3d(" + -859 * count1 + "px, 0px, 0px)",
    "transition-duration": "1000ms"
  });

  if (count1 === -1) {
    evt.css({
      transform: "translate3d(" + -859 * 4 + "px, 0px, 0px)",
      "transition-duration": "1000ms"
    });
    count1 = 4;
  }
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
  num++; // console.log(num);

  evt.css({
    transform: "translate3d(" + -271 * num + "px, 0px, 0px)",
    "transition-duration": "600ms"
  });
  judgeClick(num, next, prev, good);
} //点击左移271px


function goPrev(evt, num, next, prev, good) {
  num--; // console.log(num);

  evt.css({
    transform: "translate3d(" + -271 * num + "px, 0px, 0px)",
    "transition-duration": "600ms"
  });
  judgeClick(num, next, prev, good);
}

function autoPlay() {
  timer = setInterval(function () {
    bannerNext(banner_slide);
  }, 3500);
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
autoPlay();
banner_slide.mouseenter(function () {
  clearTimeout(timer);
});
banner_slide.mouseleave(function () {
  autoPlay();
}); //倒计时

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

var changeStyle = function changeStyle() {
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
};

changeStyle(); //渲染商品界面

$(function () {
  var html = "";
  var index = 1;
  $.ajax({
    url: "scripts/xmyp.json",
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
          html += " <a href=\"detail.html?values=".concat(item.gid, "\">\n                                <div class=\"m-goods-item-container  pro-item-category\" data-src=\"/detail?gid=").concat(item.gid, "\" data-target=\"_blank\" style=\"margin-left:0\">\n                                    <div class=\"category-img-container\">\n                                        <div class=\"product-img\">\n                                            <div class=\"m-product-image-container\" data-src=\"").concat(item.imgs.img800, "\" style=\"width: 264px; height: 198px;\">\n                                                <div class=\"img-container\" style=\"padding: 45px 70px 28px; width: 124px; height: 125px;\">\n                                                    <img src=\"").concat(item.imgs.img800, "\" data-src=\"").concat(item.imgs.img800, "\" alt=\"").concat(item.name, "\" style=\"height: 125px; width: 125px; margin-left: -0.5px;\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <p class=\"pro-desc\">").concat(item.attr_ext.custom_summary, "</p>\n                                    </div>\n                                    ").concat(color_c, "\n                                    <div class=\"category-box\">\n                                        <div class=\"m-goods-common-tag-con\"></div>\n                                        <p class=\"pro-info\" title=\"").concat(item.name, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.name, "</p>\n                                        <p class=\"pro-price\">\n                                            <span class=\"pro-unit\">\xA5</span>\n                                            <span class=\"m-num\">").concat(item.price / 100, "</span>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>");
        } else {
          html += " <a href=\"detail.html?values=".concat(item.gid, "\">\n                                <div class=\"m-goods-item-container  pro-item-category\" data-src=\"/detail?gid=").concat(item.gid, "\" data-target=\"_blank\">\n                                    <div class=\"category-img-container\">\n                                        <div class=\"product-img\">\n                                            <div class=\"m-product-image-container\" data-src=\"").concat(item.imgs.img800, "\" style=\"width: 264px; height: 198px;\">\n                                                <div class=\"img-container\" style=\"padding: 45px 70px 28px; width: 124px; height: 125px;\">\n                                                    <img src=\"").concat(item.imgs.img800, "\" data-src=\"").concat(item.imgs.img800, "\" alt=\"").concat(item.name, "\" style=\"height: 125px; width: 125px; margin-left: -0.5px;\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <p class=\"pro-desc\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.summary, "</p>\n                                    </div>\n                                    ").concat(color_c, "\n                                    <div class=\"category-box\">\n                                        ").concat(a, "\n                                        <p class=\"pro-info\" title=\"").concat(item.name, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.name, "</p>\n                                        <p class=\"pro-price\">\n                                            <span class=\"pro-unit\">\xA5</span>\n                                            <span class=\"m-num\">").concat(item.price / 100, "</span>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>");
        }
      });
      $(".m-product-list")[0].innerHTML = html;
      changeStyle();
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
});
$(function () {
  var html = "";
  var index = 1;
  $.ajax({
    url: "scripts/hot.json",
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

        html += " <a href=\"detail.html?values=".concat(item.gid, "\">\n                            <div class=\"swiper-slide\">\n                                <div class=\"m-goods-item-container\" >\n                                    <div class=\"bigtrap-img-tag-container\">\n                                        <div class=\"small-item-img\">\n                                            <div class=\"m-product-image-container undefined\" style=\"width: 266px; height: 266px;\" data-src=\"").concat(item.imgs.img_square, "\">\n                                                <div class=\"img-container-s\" style=\"width: 266px; height: 266px;\">\n                                                    <img src=\"").concat(item.imgs.img_square, "\" data-src=\"").concat(item.imgs.img_square, "\" alt=\"").concat(item.name, "\" style=\"width: 266px; height: 266px;\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"m-goods-common-box\">\n                                        <p class=\"pro-info\" title=\"").concat(item.name, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.name, "</p>\n                                        <p class=\"pro-desc\" title=\"").concat(item.summary, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.summary, "</p>\n                                        <p class=\"pro-price\">\n                                            <span class=\"pro-unit\">\xA5</span>\n                                            <span class=\"m-num\">").concat(item.price_min / 100, "</span>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            </a>");
      });
      $(".h-hot-sec .swiper-wrapper")[0].innerHTML = html;
      changeStyle();
      var _ref3 = [$(".h-hot-sec .swiper-wrapper"), $(".h-hot-sec .swiper-button-next"), $(".h-hot-sec .swiper-button-prev"), $(".h-hot-sec .swiper-slide")],
          hot_slide = _ref3[0],
          hot_next = _ref3[1],
          hot_prev = _ref3[2],
          hot_goods = _ref3[3];
      hot_next.click(function () {
        goNext(hot_slide, count4, hot_next, hot_prev, hot_goods);
        count4++;
      });
      hot_prev.click(function () {
        goPrev(hot_slide, count4, hot_next, hot_prev, hot_goods);
        count4--;
      });
    }
  });
}); //banner侧边栏

$(function () {
  var _ref4 = [$(".nav-list"), $(".nav-item"), $(".nav-detail")],
      nav_list = _ref4[0],
      nav_item = _ref4[1],
      nav_detail = _ref4[2];
  $(function () {
    nav_item.mouseenter(function () {
      var getLi = $(this).index();
      console.log(getLi);
    });
  });
  $("#goTop").click(function () {
    $("html,body").animate({
      "scrollTop": 0
    }, 1000);
  });
  nav_item.mouseenter(function () {
    nav_detail.addClass("show");
  });
  nav_detail.mouseenter(function () {
    nav_detail.addClass("show");
  });
  nav_item.mouseleave(function () {
    nav_detail.removeClass("show");
  });
  nav_detail.mouseleave(function () {
    nav_detail.removeClass("show");
  });
});
$(function () {
  //搜索栏吸顶
  var m_header = $("#m-header"),
      set_top = m_header.offset(),
      search_form = $(".search-form"),
      search_input = $(".search-input-con input"),
      fixed_item = $(".m-fixedBar>ul>li"),
      service_pop = $(".fixed-service-pop"),
      download_pop = $(".fixed-down-pop"),
      gift_pop = $(".fixed-gift-pop"),
      wxchat_pop = $(".fixed-wx-pop"),
      m_clauses = $("#m-clauses"),
      site_item = $(".site-item-nav");
  console.log(site_item);
  $(document).on("scroll", function () {
    var header_top = $(document).scrollTop();

    if (header_top > 450) {
      m_header.addClass("m-header-fixed");
    } else {
      m_header.removeClass("m-header-fixed");
    }
  });
  m_clauses.mouseenter(function () {
    site_item.addClass("show");
  });
  m_clauses.mouseleave(function () {
    site_item.removeClass("show");
  }); //搜索选框

  search_input.focus(function () {
    search_form.addClass("active");
  });
  search_input.blur(function () {
    search_form.removeClass("active");
  }); // 侧边浮动栏

  fixed_item.mouseenter(function () {
    var getLi = $(this).index();

    switch (getLi) {
      case 0:
        service_pop.addClass("show");
        break;

      case 1:
        download_pop.addClass("show");
        break;

      case 2:
        gift_pop.addClass("show");
        break;

      case 3:
        wxchat_pop.addClass("show");
        break;
    }
  });
  fixed_item.mouseleave(function () {
    service_pop.removeClass("show");
    download_pop.removeClass("show");
    gift_pop.removeClass("show");
    wxchat_pop.removeClass("show");
  });
});
$(function () {
  var html = "";
  var index = 1;
  $.ajax({
    url: "scripts/new.json",
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

        html += " <a href=\"detail.html?values=".concat(item.gid, "\">\n                            <div class=\"swiper-slide\">\n                                <div class=\"m-goods-item-container\" >\n                                    <div class=\"bigtrap-img-tag-container\">\n                                        <div class=\"small-item-img\">\n                                            <div class=\"m-product-image-container undefined\" style=\"width: 266px; height: 266px;\" data-src=\"").concat(item.imgs.img_square, "\">\n                                                <div class=\"img-container-s\" style=\"width: 266px; height: 266px;\">\n                                                    <img src=\"").concat(item.imgs.img_square, "\" data-src=\"").concat(item.imgs.img_square, "\" alt=\"").concat(item.name, "\" style=\"width: 266px; height: 266px;\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"m-goods-common-box\">\n                                        <p class=\"pro-info\" title=\"").concat(item.name, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.name, "</p>\n                                        <p class=\"pro-desc\" title=\"").concat(item.summary, "\" style=\"overflow: hidden;text-overflow:ellipsis;white-space: nowrap;\">").concat(item.summary, "</p>\n                                        <p class=\"pro-price\">\n                                            <span class=\"pro-unit\">\xA5</span>\n                                            <span class=\"m-num\">").concat(item.price_min / 100, "</span>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            </a>");
        $(".h-new-sec .swiper-wrapper")[0].innerHTML = html;
        changeStyle();
      });
      var _ref5 = [$(".h-new-sec .swiper-wrapper"), $(".h-new-sec .swiper-button-next"), $(".h-new-sec .swiper-button-prev"), $(".h-new-sec .swiper-slide")],
          news_slide = _ref5[0],
          news_next = _ref5[1],
          news_prev = _ref5[2],
          news_goods = _ref5[3];
      console.log(news_goods.length);
      news_next.click(function () {
        goNext(news_slide, count3, news_next, news_prev, news_goods);
        count3++;
      });
      news_prev.click(function () {
        goPrev(news_slide, count3, news_next, news_prev, news_goods);
        count3--;
      });
    }
  });
});