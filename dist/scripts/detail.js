"use strict";

$(function () {
  $("#show").html(oneValues());
});

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function checkCookie(data) {
  //     var user=getCookie("username");
  var code = getCookie("code-".concat(data));

  if (code != "") {
    var number = getCookie("number-".concat(data));
    number++;
    setCookie("number-".concat(data), number, 30);
    console.log(document.cookie);
  } else {
    code = data;
    var number = 1;
    setCookie("code-".concat(data), code, 30);
    setCookie("number-".concat(data), number, 30);
  }
} //接收一个值


function oneValues() {
  var result; //获取url中"?"符后的字串  

  var url = window.location.search;

  if (url.indexOf("?") != -1) {
    result = url.substr(url.indexOf("=") + 1);
  }

  return result;
} //接收多值


function manyValues() {
  var url = window.location.search;

  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    var key = new Array(strs.length);
    var value = new Array(strs.length);

    for (i = 0; i < strs.length; i++) {
      key[i] = strs[i].split("=")[0];
      value[i] = unescape(strs[i].split("=")[1]);
      alert(key[i] + "=" + value[i]);
    }
  }
} // console.log(oneValues())
// 渲染商品


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
        count++; // console.log(item.gid == oneValues());

        if (item.gid == oneValues()) {
          html = "  <div class=\"detail\">\n                            <div class=\"container\">\n                                <div>\n                                    <div class=\"header clearfix\">\n                                        <div class=\"banner clearfix\">\n                                            <div class=\"main fl\">\n                                                <img src=\"".concat(item.imgs.img800, "\">\n                                            </div>\n                                            <div class=\"thumb fr\" style=\"display: block;\">\n                                                <div class=\"thumb-container\" style=\"top: 0px;\">\n                                                    <div class=\"thumb-pic\" style=\"border-color: rgb(132, 95, 63);\">\n                                                        <img src=\"").concat(item.imgs.img800, "\">\n                                                    </div>\n                                                    <div class=\"thumb-pic\" style=\"border-color: rgb(236, 236, 236);\">\n                                                        <img src=\"").concat(item.imgs.img800s, "\">\n                                                    </div>\n                                                    <div class=\"thumb-pic\" style=\"border-color: rgb(236, 236, 236);\">\n                                                        <img src=\"").concat(item.imgs.img_horizon, "\">\n                                                    </div>\n                                                    <div class=\"thumb-pic\" style=\"border-color: rgb(236, 236, 236);\">\n                                                        <img src=\"").concat(item.imgs.img_safe_area_url, "\">\n                                                    </div>\n                                                    <div class=\"thumb-pic\" style=\"border-color: rgb(236, 236, 236);\">\n                                                        <img src=\"").concat(item.imgs.img_square, "\">\n                                                    </div>\n                                                </div>\n                                                <div class = \"thumb-arrow-up\">\n                                                    <a class=\"m-icons m-icons-up \" data-src=\"\" href=\"javascript:;\"></a>\n                                                </div>\n                                                <div class=\"thumb-arrow-down\">\n                                                    <a class=\"m-icons m-icons-down \" data-src=\"\" href=\"javascript:;\"></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"sku-container\">\n                                            <div class=\"name clearfix\">\n                                                <div class=\"good-name fl\">").concat(item.name, "</div>\n                                            </div>\n                                            <div class=\"summary\">").concat(item.summary, "</div>\n                                            <div class=\"promotion-box\"></div>\n                                            <div class=\"card\">\n                                                <div class=\"price-line\">\n                                                    <h5 class=\"sku-title\">\u552E\u4EF7</h5>\n                                                    <div class=\"price\">\n                                                        <span class=\"money-symbol\">\xA5</span>\n                                                        <span class=\"value\">").concat(item.price / 100, "</span>\n                                                    </div>\n                                                </div>\n                                                <div class=\"service-line\">\n                                                    <h5 class=\"sku-title\">\u670D\u52A1</h5>\n                                                    <div class=\"introduce-container\">\n                                                        <p class=\"icon\">!</p>\n                                                        <div class=\"content \">\n                                                            <div class=\"cardmodal-outer-container\" style=\"width: 500px; left: -20px; top: -20px;\">\n                                                                <div class=\"inner-container\" style=\"width: 500px; left: 20px; top: 20px;\">\n                                                                    <div class=\"container\" style=\"width: 494px;\">\n                                                                        <div class=\"content-main\">\n                                                                            <div class=\"text-item\">\n                                                                                <p class=\"text-title\">\u6EE199\u5305\u90AE</p>\n                                                                                <p class=\"text-content\">\u672C\u5546\u54C1\u6EE199\u5143\u53EF\u5305\u90AE\uFF0C\u4E0D\u8DB399\u5143\u6536\u53D6\u8FD0\u8D3910\u5143</p>\n                                                                            </div>\n                                                                            <div class=\"text-item\">\n                                                                                <p class=\"text-title\">\u6709\u54C1\u4E09\u65B9</p>\n                                                                                <p class=\"text-content\">\u672C\u5546\u54C1\u4E3A\u6709\u54C1\u7CBE\u9009\u7CBE\u54C1\uFF0C\u7B2C\u4E09\u65B9\u54C1\u724C\u65B9\u4E3A\u5B9E\u9645\u9500\u552E\u65B9\uFF0C\u5C0F\u7C73\u6709\u54C1\u7CBE\u5FC3\u6311\u9009\uFF0C\u4E25\u683C\u628A\u5173\uFF0C\u4E3A\u60A8\u7CBE\u9009\u54C1\u8D28\u4E0A\u4E58\u7684\u7CBE\u54C1\u5546\u54C1\u3002</p>\n                                                                            </div>\n                                                                            <div class=\"text-item\">\n                                                                                <p class=\"text-title\">\u7531\u6709\u54C1\u914D\u9001\u53D1\u8D27\uFF0C\u4E91\u4E01\u7F51\u7EDC\u6280\u672F\uFF08\u5317\u4EAC\uFF09\u6709\u9650\u516C\u53F8\u63D0\u4F9B\u552E\u540E</p>\n                                                                                <p class=\"service-item-qualification\">\u67E5\u770B\u5546\u5BB6\u8D44\u8D28</p>\n                                                                            </div>\n                                                                            <div class=\"text-item\">\n                                                                                <p class=\"text-title\">7\u5929\u65E0\u7406\u7531</p>\n                                                                                <p class=\"text-content\">\u672C\u5546\u54C1\u652F\u63017\u5929\u65E0\u7406\u7531\u9000\u8D27</p>\n                                                                            </div>\n                                                                            <div class=\"text-item\">\n                                                                                <p class=\"text-title\">\u5E73\u53F0\u8FD0\u8D39\u8BF4\u660E</p>\n                                                                                <p class=\"text-content\">\u7531\u5C0F\u7C73\u5E73\u53F0\u53D1\u8D27\u7684\u5C0F\u7C73\u81EA\u8425\u5546\u54C1,\u5355\u7B14\u6EE1150\u5143\u514D\u8FD0\u8D39,\u4E0D\u6EE1150\u5143\u6536\u53D610\u5143\u8FD0\u8D39;</p>\n                                                                                <p class=\"text-content\">\u6709\u54C1\u5E73\u53F0\u4E09\u65B9\u5546\u54C1,\u5355\u7B14\u8BA2\u5355\u6EE199\u5143\u514D\u8FD0\u8D39,\u4E0D\u6EE199\u5143\u6536\u53D610\u5143\u8FD0\u8D39;</p>\n                                                                                <p class=\"text-content\">\u7279\u6B8A\u5546\u54C1\u9700\u8981\u5355\u72EC\u6536\u53D6\u8FD0\u8D39,\u5177\u4F53\u4EE5\u5B9E\u9645\u7ED3\u7B97\u91D1\u989D\u4E3A\u51C6;</p>\n                                                                                <p class=\"text-content\">\u4F18\u60E0\u5238\u4E0D\u80FD\u62B5\u6263\u8FD0\u8D39\u3002</p>\n                                                                            </div>\n                                                                            <div class=\"text-item\">\n                                                                                <p class=\"text-title\">\u9000\u6362\u8D27\u8FD0\u8D39\u58F0\u660E</p>\n                                                                                <p class=\"text-content\">\u975E\u8D28\u91CF\u95EE\u9898\u9000\u6362\u8D27,\u8FD0\u8D39\u4E0D\u4E88\u8FD4\u8FD8;</p>\n                                                                                <p class=\"text-content\">\u56E0\u8D28\u91CF\u95EE\u9898\u9000\u6362\u8D27,\u8FD0\u8D39\u4E88\u4EE5\u8FD4\u8FD8,\u591A\u4EF6\u4EA7\u54C1\u53EA\u9000\u90E8\u5206\u4EA7\u54C1\u65F6,\u8FD0\u8D39\u6309\u6BD4\u4F8B\u8FD4\u8FD8;</p>\n                                                                                <p class=\"text-content\">\u7535\u89C6\u7B49\u5927\u4EF6\u5546\u54C1,\u65E0\u8D28\u91CF\u95EE\u9898\u9000\u8D27\u4EA7\u751F\u7684\u8FD0\u8D39\u7531\u8D2D\u4E70\u8005\u627F\u62C5,\u4ECE\u9000\u6B3E\u4E2D\u76F4\u63A5\u6263\u9664\u3002</p>\n                                                                            </div><div class=\"text-item\">\n                                                                                <p class=\"text-title\">\u4F01\u4E1A\u4FE1\u606F</p>\n                                                                                <p class=\"text-content\">\u4F01\u4E1A\u540D\u79F0\uFF1A \u4E91\u4E01\u7F51\u7EDC\u6280\u672F\uFF08\u5317\u4EAC\uFF09\u6709\u9650\u516C\u53F8</p>\n                                                                                <p class=\"text-content\">\u4F01\u4E1A\u6267\u7167\u6CE8\u518C\u53F7\uFF1A 91110108399514950D</p>\n                                                                                <p class=\"text-content\">\u4F01\u4E1A\u5730\u5740\uFF1A \u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u82B1\u56ED\u8DEF1\u53F727\u5E62333\u53F7</p>\n                                                                                <p class=\"text-content\">\u4F01\u4E1A\u7535\u8BDD\uFF1A 010-56234691</p>\n                                                                                <p class=\"text-content\">\u8425\u4E1A\u671F\u9650\uFF1A 2014\u5E7405\u670821\u65E5\u81F32034\u5E7405\u670820\u65E5</p>\n                                                                                <p class=\"text-content\">\u7ECF\u8425\u8303\u56F4\uFF1A \u6280\u672F\u5F00\u53D1\u3001\u6280\u672F\u8F6C\u8BA9\u3001\u6280\u672F\u54A8\u8BE2\u3001\u6280\u672F\u670D\u52A1\u3001\u6280\u672F\u63A8\u5E7F\uFF1B\u7535\u8111\u52A8\u753B\u8BBE\u8BA1\uFF1B\u7EF4\u4FEE\u8BA1\u7B97\u673A\uFF1B\u529E\u516C\u8BBE\u5907\u7EF4\u4FEE\uFF1B\u4EEA\u5668\u4EEA\u8868\u7EF4\u4FEE\uFF1B\u9500\u552E\u8BA1\u7B97\u673A\u3001\u8F6F\u4EF6\u53CA\u8F85\u52A9\u8BBE\u5907\u3001\u7535\u5B50\u4EA7\u54C1\u3002\uFF08\u4F01\u4E1A\u4F9D\u6CD5\u81EA\u4E3B\u9009\u62E9\u7ECF\u8425\u9879\u76EE\uFF0C\u5F00\u5C55\u7ECF\u8425\u6D3B\u52A8\uFF1B\u4F9D\u6CD5\u987B\u7ECF\u6279\u51C6\u7684\u9879\u76EE\uFF0C\u7ECF\u76F8\u5173\u90E8\u95E8\u6279\u51C6\u540E\u4F9D\u6279\u51C6\u7684\u5185\u5BB9\u5F00\u5C55\u7ECF\u8425\u6D3B\u52A8\uFF1B\u4E0D\u5F97\u4ECE\u4E8B\u672C\u5E02\u4EA7\u4E1A\u653F\u7B56\u7981\u6B62\u548C\u9650\u5236\u7C7B\u9879\u76EE\u7684\u7ECF\u8425\u6D3B\u52A8\u3002\uFF09</p>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"size\">\n                                                                    <div class=\"content-main\">\n                                                                        <div class=\"text-item\">\n                                                                            <p class=\"text-title\">\u6EE199\u5305\u90AE</p>\n                                                                            <p class=\"text-content\">\u672C\u5546\u54C1\u6EE199\u5143\u53EF\u5305\u90AE\uFF0C\u4E0D\u8DB399\u5143\u6536\u53D6\u8FD0\u8D3910\u5143</p>\n                                                                        </div>\n                                                                        <div class=\"text-item\">\n                                                                            <p class=\"text-title\">\u6709\u54C1\u4E09\u65B9</p>\n                                                                            <p class=\"text-content\">\u672C\u5546\u54C1\u4E3A\u6709\u54C1\u7CBE\u9009\u7CBE\u54C1\uFF0C\u7B2C\u4E09\u65B9\u54C1\u724C\u65B9\u4E3A\u5B9E\u9645\u9500\u552E\u65B9\uFF0C\u5C0F\u7C73\u6709\u54C1\u7CBE\u5FC3\u6311\u9009\uFF0C\u4E25\u683C\u628A\u5173\uFF0C\u4E3A\u60A8\u7CBE\u9009\u54C1\u8D28\u4E0A\u4E58\u7684\u7CBE\u54C1\u5546\u54C1\u3002</p>\n                                                                        </div>\n                                                                        <div class=\"text-item\">\n                                                                            <p class=\"text-title\">\u7531\u6709\u54C1\u914D\u9001\u53D1\u8D27\uFF0C\u4E91\u4E01\u7F51\u7EDC\u6280\u672F\uFF08\u5317\u4EAC\uFF09\u6709\u9650\u516C\u53F8\u63D0\u4F9B\u552E\u540E</p>\n                                                                            <p class=\"service-item-qualification\">\u67E5\u770B\u5546\u5BB6\u8D44\u8D28</p>\n                                                                        </div>\n                                                                        <div class=\"text-item\">\n                                                                            <p class=\"text-title\">7\u5929\u65E0\u7406\u7531</p>\n                                                                            <p class=\"text-content\">\u672C\u5546\u54C1\u652F\u63017\u5929\u65E0\u7406\u7531\u9000\u8D27</p>\n                                                                        </div>\n                                                                        <div class=\"text-item\">\n                                                                            <p class=\"text-title\">\u5E73\u53F0\u8FD0\u8D39\u8BF4\u660E</p>\n                                                                            <p class=\"text-content\">\u7531\u5C0F\u7C73\u5E73\u53F0\u53D1\u8D27\u7684\u5C0F\u7C73\u81EA\u8425\u5546\u54C1,\u5355\u7B14\u6EE1150\u5143\u514D\u8FD0\u8D39,\u4E0D\u6EE1150\u5143\u6536\u53D610\u5143\u8FD0\u8D39;</p>\n                                                                            <p class=\"text-content\">\u6709\u54C1\u5E73\u53F0\u4E09\u65B9\u5546\u54C1,\u5355\u7B14\u8BA2\u5355\u6EE199\u5143\u514D\u8FD0\u8D39,\u4E0D\u6EE199\u5143\u6536\u53D610\u5143\u8FD0\u8D39;</p>\n                                                                            <p class=\"text-content\">\u7279\u6B8A\u5546\u54C1\u9700\u8981\u5355\u72EC\u6536\u53D6\u8FD0\u8D39,\u5177\u4F53\u4EE5\u5B9E\u9645\u7ED3\u7B97\u91D1\u989D\u4E3A\u51C6;</p>\n                                                                            <p class=\"text-content\">\u4F18\u60E0\u5238\u4E0D\u80FD\u62B5\u6263\u8FD0\u8D39\u3002</p>\n                                                                        </div>\n                                                                        <div class=\"text-item\">\n                                                                            <p class=\"text-title\">\u9000\u6362\u8D27\u8FD0\u8D39\u58F0\u660E</p>\n                                                                            <p class=\"text-content\">\u975E\u8D28\u91CF\u95EE\u9898\u9000\u6362\u8D27,\u8FD0\u8D39\u4E0D\u4E88\u8FD4\u8FD8;</p>\n                                                                            <p class=\"text-content\">\u56E0\u8D28\u91CF\u95EE\u9898\u9000\u6362\u8D27,\u8FD0\u8D39\u4E88\u4EE5\u8FD4\u8FD8,\u591A\u4EF6\u4EA7\u54C1\u53EA\u9000\u90E8\u5206\u4EA7\u54C1\u65F6,\u8FD0\u8D39\u6309\u6BD4\u4F8B\u8FD4\u8FD8;</p>\n                                                                            <p class=\"text-content\">\u7535\u89C6\u7B49\u5927\u4EF6\u5546\u54C1,\u65E0\u8D28\u91CF\u95EE\u9898\u9000\u8D27\u4EA7\u751F\u7684\u8FD0\u8D39\u7531\u8D2D\u4E70\u8005\u627F\u62C5,\u4ECE\u9000\u6B3E\u4E2D\u76F4\u63A5\u6263\u9664\u3002</p>\n                                                                        </div>\n                                                                        <div class=\"text-item\">\n                                                                            <p class=\"text-title\">\u4F01\u4E1A\u4FE1\u606F</p>\n                                                                            <p class=\"text-content\">\u4F01\u4E1A\u540D\u79F0\uFF1A \u4E91\u4E01\u7F51\u7EDC\u6280\u672F\uFF08\u5317\u4EAC\uFF09\u6709\u9650\u516C\u53F8</p>\n                                                                            <p class=\"text-content\">\u4F01\u4E1A\u6267\u7167\u6CE8\u518C\u53F7\uFF1A 91110108399514950D</p>\n                                                                            <p class=\"text-content\">\u4F01\u4E1A\u5730\u5740\uFF1A \u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u82B1\u56ED\u8DEF1\u53F727\u5E62333\u53F7</p>\n                                                                            <p class=\"text-content\">\u4F01\u4E1A\u7535\u8BDD\uFF1A 010-56234691</p>\n                                                                            <p class=\"text-content\">\u8425\u4E1A\u671F\u9650\uFF1A 2014\u5E7405\u670821\u65E5\u81F32034\u5E7405\u670820\u65E5</p>\n                                                                            <p class=\"text-content\">\u7ECF\u8425\u8303\u56F4\uFF1A \u6280\u672F\u5F00\u53D1\u3001\u6280\u672F\u8F6C\u8BA9\u3001\u6280\u672F\u54A8\u8BE2\u3001\u6280\u672F\u670D\u52A1\u3001\u6280\u672F\u63A8\u5E7F\uFF1B\u7535\u8111\u52A8\u753B\u8BBE\u8BA1\uFF1B\u7EF4\u4FEE\u8BA1\u7B97\u673A\uFF1B\u529E\u516C\u8BBE\u5907\u7EF4\u4FEE\uFF1B\u4EEA\u5668\u4EEA\u8868\u7EF4\u4FEE\uFF1B\u9500\u552E\u8BA1\u7B97\u673A\u3001\u8F6F\u4EF6\u53CA\u8F85\u52A9\u8BBE\u5907\u3001\u7535\u5B50\u4EA7\u54C1\u3002\uFF08\u4F01\u4E1A\u4F9D\u6CD5\u81EA\u4E3B\u9009\u62E9\u7ECF\u8425\u9879\u76EE\uFF0C\u5F00\u5C55\u7ECF\u8425\u6D3B\u52A8\uFF1B\u4F9D\u6CD5\u987B\u7ECF\u6279\u51C6\u7684\u9879\u76EE\uFF0C\u7ECF\u76F8\u5173\u90E8\u95E8\u6279\u51C6\u540E\u4F9D\u6279\u51C6\u7684\u5185\u5BB9\u5F00\u5C55\u7ECF\u8425\u6D3B\u52A8\uFF1B\u4E0D\u5F97\u4ECE\u4E8B\u672C\u5E02\u4EA7\u4E1A\u653F\u7B56\u7981\u6B62\u548C\u9650\u5236\u7C7B\u9879\u76EE\u7684\u7ECF\u8425\u6D3B\u52A8\u3002\uFF09</p>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"service\">\n                                                        <div class=\"service-item\">\n                                                            <a class=\"m-icons m-icons-service \" data-src=\"\" href=\"javascript:;\"></a>\n                                                            <span class=\"service-item-text\">\u6EE199\u5305\u90AE</span>\n                                                        </div>\n                                                        <div class=\"service-item\">\n                                                            <a class=\"m-icons m-icons-service \" data-src=\"\" href=\"javascript:;\"></a>\n                                                            <span class=\"service-item-text\">\u6709\u54C1\u4E09\u65B9</span>\n                                                        </div>\n                                                        <div class=\"service-item\">\n                                                            <a class=\"m-icons m-icons-service \" data-src=\"\" href=\"javascript:;\"></a>\n                                                            <span class=\"service-item-text\">7\u5929\u65E0\u7406\u7531</span>\n                                                        </div>\n                                                        <div class=\"service-item\">\n                                                            <a class=\"m-icons m-icons-service \" data-src=\"\" href=\"javascript:;\"></a>\n                                                            <span class=\"service-item-text\">\u7531\u6709\u54C1\u914D\u9001\u53D1\u8D27\uFF0C\u4E91\u4E01\u7F51\u7EDC\u6280\u672F\uFF08\u5317\u4EAC\uFF09\u6709\u9650\u516C\u53F8\u63D0\u4F9B\u552E\u540E</span>\n                                                            <span class=\"service-item-qualification\">(\u67E5\u770B\u5546\u5BB6\u8D44\u8D28)</span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"address-line\">\n                                                <h5 class=\"sku-title\">\u914D\u9001\u533A\u57DF</h5>\n                                                <div class=\"address\">\n                                                    <div>\n                                                        <span>\u5317\u4EAC \u5317\u4EAC\u5E02 \u6D77\u6DC0\u533A</span>\n                                                        <span>&nbsp;</span>\n                                                        <a>\u4FEE\u6539</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div>\n                                                <div style=\"overflow: hidden; padding: 0px 0px 12px;\">\n                                                    <div class=\"size-line clearfix\">\n                                                        <h5 class=\"sku-title\"> \u9009\u62E9").concat(item.style, " </h5>\n                                                        <div class=\"size-container\">\n                                                            <div class=\"tag-item-onSaled\">\u767D\u8272</div>\n                                                            <div class=\"tag-item-onSaled\">\u9ED1\u8272</div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"count-line\">\n                                                    <h5 class=\"sku-title count-title\">\u6570\u91CF</h5>\n                                                    <div class=\"count-container\">\n                                                        <div>\n                                                            <div class=\"minus-btn\">\n                                                                <a class=\"m-icons m-icons-reduce \" data-src=\"\" href=\"javascript:;\"></a>\n                                                            </div>\n                                                            <input type=\"text\" value=\"1\" class=\"count-input\">\n                                                            <div class=\"minus-btn-active\">\n                                                                <a class=\"m-icons m-icons-add-active \" data-src=\"\" href=\"javascript:;\"></a>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"btn-line\">\n                                                <div class=\"buy-btn-container\">\n                                                    <a class=\"m-btns m-btn-middle m-btn-brown\" href=\"javascript:;\" data-gid=\"").concat(item.gid, "\" id=\"cart\">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                                    <a class=\"m-btns m-btn-middle m-btn-brown-stroke\" href=\"javascript:;\">\u7ACB\u5373\u8D2D\u4E70</a>\n                                                </div>\n                                                <div class=\"favor-btn \">\n                                                    <div>\n                                                        <a class=\"m-icons m-icons-collection \" data-src=\"\" href=\"javascript:;\"></a>\n                                                        <p>\u6536\u85CF</p>\n                                                    </div>\n                                                </div>\n                                                <div class=\"faver-service-btn favor-btn \">\n                                                    <div>\n                                                        <a class=\"m-icons m-icons-service-detail \" data-src=\"\" href=\"javascript:;\"></a>\n                                                        <p>\u5BA2\u670D</p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>");
        }
      });
      $(".detail")[0].innerHTML = html;
      var btn1 = $("#cart");
      var btn = document.querySelector("[data-gid]");
      btn.addEventListener("click", function () {
        console.log(btn);
        checkCookie(btn1.data("gid"));
      });
      var imgSmall = document.querySelectorAll(".thumb-pic");
      var imgBig = document.querySelector(".main");
      imgSmall.forEach(function (item) {
        item.addEventListener("mouseover", function () {
          console.log(item);
          imgBig.children[0].src = item.children[0].src;
          item.style.borderColor = "rgb(132, 95, 63)";
        });
        item.addEventListener("mouseleave", function () {
          console.log(item);
          item.style.borderColor = "rgb(236, 236, 236)";
        });
      }); // imgSmall.forEach(item => {
      //     item.addEventListener("click",function(){
      //         console.log(imgBig[0].children[0].src)
      //     })
      // })
    }
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