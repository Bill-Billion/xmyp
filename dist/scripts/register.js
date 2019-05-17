"use strict";

var strength = 0;
var _usr$pwd$rPwd$reg$for = {
  usr: document.getElementById("usr"),
  pwd: document.getElementById("pwd"),
  rPwd: document.getElementById("r_pwd"),
  reg: document.getElementById("btn"),
  form: document.getElementById("register-form"),
  tag: document.querySelector("#tag")
},
    usr = _usr$pwd$rPwd$reg$for.usr,
    pwd = _usr$pwd$rPwd$reg$for.pwd,
    rPwd = _usr$pwd$rPwd$reg$for.rPwd,
    reg = _usr$pwd$rPwd$reg$for.reg,
    form = _usr$pwd$rPwd$reg$for.form,
    tag = _usr$pwd$rPwd$reg$for.tag;
usr.addEventListener("blur", judgeUserName);
pwd.addEventListener("blur", judgeUserPwd);
rPwd.addEventListener("blur", reJudgeUserPwd);
reg.addEventListener("click", submitMsg);

function changeNormal() {
  usr.parentElement.className = "input-box";
  usr.nextElementSibling.className = "normal";
  strength++;
}

function judgeUserName() {
  var usrValue = usr.value,
      //Node.nextSibling 是一个只读属性，返回其父节点的 childNodes 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 null。
  next = usr.nextElementSibling,
      parents = usr.parentElement,
      usrReg = /^[a-z\u2e80-\u9fff\-_0-9]{4,20}$/i;

  if (usrValue.length <= 4 || usrValue.length >= 20) {
    next.className = "warn_l";
    parents.className = "input-box warn";
    next.innerHTML = "请输入4-20位的用户名";
    return false;
  } else if (!usrReg.test(usrValue)) {
    next.innerHTML = "仅支持中文，英文，数字，字母，-，_ 的4~20位字符";
    next.className = " error_l";
    parents.className = "input-box error";
    return false;
  } else if (/^\d+$/.test(usrValue)) {
    next.innerHTML = "用户名不能为纯数字";
    next.className = " warn_l";
    parents.className = "input-box warn";
    return false;
  }

  changeNormal();
  console.log(strength);
}

function judgeUserPwd() {
  var pwdValue = pwd.value,
      next = pwd.nextElementSibling,
      parents = pwd.parentElement;

  if (pwdValue.length <= 6) {
    parents.className = "input-box warn";
    next.className = "warn_l";
    next.innerHTML = "密码需要大于6位";
    return false;
  } else {
    changeNormal();
  }

  console.log(strength);
}

function reJudgeUserPwd() {
  console.log(rPwd.value);
  var rPwdValue = rPwd.value,
      //Node.nextSibling 是一个只读属性，返回其父节点的 childNodes 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 null。
  next = rPwd.nextElementSibling;
  parents = rPwd.parentElement;

  if (rPwdValue != pwd.value) {
    parents.className = "input-box warn";
    next.className = "warn_l";
    next.innerHTML = "两次密码不一致";
    return false;
  }
}

function submitMsg() {
  var usrname = usr.value,
      usrpwd = pwd.value,
      usrlike = tag.value;
  console.log(usrname, usrpwd, usrlike);
  xhrPost("./server/register.php", {
    usrname: usrname,
    usrpwd: usrpwd,
    usrlike: usrlike
  }).then(function (res) {
    var obj = JSON.parse(res);
    console.log(obj);
    console.log(obj.stateCode);

    if (obj.stateCode == 1) {
      alert("成功，即将跳转登陆页面");
      jump();
    } else {
      alert("失败");
    }
  });
}

function jump() {
  window.location.href = "./login.html";
}