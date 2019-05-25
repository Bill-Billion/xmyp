"use strict";

$(function () {
  var car = $("#merchantList"); //要加载的区域   

  show();

  function show(index) {
    $.ajax({
      url: "scripts/xmyp.json",
      type: "GET",
      dataType: "json",
      success: function success(data) {
        $.each(data, function (i, item) {
          //循环json里的code，当对应cookie里的code不为空时
          if (getCookie("code-".concat(data[i].gid)) != "") {
            console.log(data[i].gid);
            var number = getCookie("number-".concat(data[i].gid)); //渲染购物车

            showCar(data[i], number);
          }
        });
      }
    });
  }

  function showCar(data, number) {
    var html = "";
    html = " <div>\n        <div class=\"merchant-item-container\">\n            <div class=\"merchant-info\">\n                <a class=\"m-icons m-icons-check-active select-icon\" data-src=\"\" href=\"javascript:;\"></a>\n                <span class=\"name\" data-src=\"/flagshipstore?id=1&amp;title=\u5C0F\u7C73\u81EA\u8425(\u7279\u6B8A\u5546\u54C1)\">\u5C0F\u7C73\u81EA\u8425(\u7279\u6B8A\u5546\u54C1)</span>\n                <div class=\"postmarginright mijiapost\">\n                    <span><span class=\"postimg\">!</span>\u5DF2\u514D\u8FD0\u8D39</span>\n                    <span class=\"layer hide\">\u5C0F\u7C73/\u7C73\u5BB6\u81EA\u8425\u5546\u54C1\u5355\u7B14\u8BA2\u5355\u652F\u4ED8\u91D1\u989D\u6EE1150\u5143\uFF08\u4EE5\u5B9E\u9645\u4ED8\u6B3E\u91D1\u989D\u4E3A\u51C6\uFF0C\u4EE3\u91D1\u5238\u7B49\u4E0D\u542B\u5728\u5185\uFF09\u8D77\u5305\u90AE\u3002\u5C0F\u7C73\u7535\u89C6\u3001\u5C0F\u7C73\u4F53\u91CD\u79E4\u7B49\u56E0\u5546\u54C1\u7279\u6B8A\u6027\u4E0D\u53C2\u4E0E\u6EE1150\u5143\u5305\u90AE\uFF0C\u53E6\u5C0F\u7C73\u7535\u89C6\u7CFB\u5217\u4EA7\u54C1\u9700\u8981\u5355\u72EC\u914D\u9001\u8D39\uFF0C\u8BF7\u53C2\u89C1\u5177\u4F53\u5546\u54C1\u4EA7\u54C1\u8BE6\u60C5\u9875\u8BF4\u660E\u3002</span>\n                </div>\n            </div>\n            <div>\n                <div class=\"good-item-container cart-goods-con\">\n                    <div class=\"merchant-reduce-top\"></div>\n                    <div class=\"cart-good-items clearfix\">\n                        <div class=\"select\">\n                            <a class=\"m-icons m-icons-check-active select-icon\" data-src=\"\" href=\"javascript:;\"></a>\n                        </div>\n                        <div class=\"image\" data-src=\"/detail?gid=104365&amp;pid=20093\" data-target=\"_blank\">\n                            <img class=\"\" src=\"".concat(data.imgs.img800, "\" data-src=\"//i1.mifile.cn/a1/pms_1524621229.56695068.jpg?t=webp\" alt=\"\u5C0F\u7C736X \u5168\u7F51\u901A\u7248 6GB\u5185\u5B58 64GB \u6A31\u82B1\u7C89\">\n                        </div>\n                        <div class=\"name\" data-src=\"/detail?gid=104365&amp;pid=20093\" data-target=\"_blank\">\n                            <div class=\"vertical-wrap\">\n                                <p class=\"good-name brown-hover\">").concat(data.name, "</p>\n                            </div>\n                        </div>\n                        <div class=\"price\">\n                            <span>\uFFE5").concat(data.price / 100, "</span>\n                        </div>\n                        <div class=\"num\">\n                            <div class=\"can-edit\">\n                                <div class=\"num-reduce-add\" style=\"width: 134px;\">\n                                    <a class=\"m-icons m-icons-reduce minus-plus\" data-src=\"\" href=\"javascript:;\" id=\"addItem\"></a>\n                                    <span class=\"txt\" style=\"width: 70px;\">").concat(number, "</span>\n                                    <a class=\"m-icons m-icons-add-active minus-plus\" data-src=\"\" href=\"javascript:;\"></a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"subtotal\">\n                            <span>\uFFE5").concat(data.price / 100 * number, "</span>\n                        </div>\n                        <div class=\"del\">\n                            <a class=\"m-icons m-icons-close-hover icon\" data-src=\"\" href=\"javascript:;\" id=\"remove\"></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>");
    car[0].innerHTML += html; //找到删除按钮

    var remove = document.querySelectorAll("#remove"); // console.log(`code-${data.gid}`);

    for (var i = 0; i < remove.length; i++) {
      remove[i].addEventListener("click", function () {
        console.log("code-".concat(data.gid));
        var code = this.dataset.gid;
        var none = "";
        console.log("code-".concat(data.gid));
        setCookie("code-".concat(data.gid), none, 30); //赋值为空

        setCookie("name-".concat(data.gid), none, 30); //赋值为空

        alert("删除成功");
        location.reload(); //重新加载页面
      });
    }

    var additem = document.querySelectorAll("#addItem");

    for (var i = 0; i < additem.length; i++) {
      additem[i].addEventListener("click", function () {
        console.log(1);
      });
    }
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
});