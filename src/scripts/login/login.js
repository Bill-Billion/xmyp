var strength = 0;
let{
    usr,pwd,login,form
}={
    usr : document.getElementById("usrname"),
    pwd : document.getElementById("usrpwd"),
    login : document.getElementById("btn"),
    form : document.getElementById("login_form")
}
usr.addEventListener("blur",judgeUserName);
pwd.addEventListener("blur",judgeUserPwd);
function changeNormal(){
    usr.parentElement.className = "input-box";
    usr.nextElementSibling.className = "normal"
    strength ++;
}
function judgeUserName(){
    let usrValue = usr.value,
    //Node.nextSibling 是一个只读属性，返回其父节点的 childNodes 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 null。
        next = usr.nextElementSibling,
        parents = usr.parentElement;
    if(usrValue.length <= 4 || usrValue.length >=20){
        next.className = "warn_l";
        parents.className = "input-box warn";
        next.innerHTML = "用户名不能为空";
        return false;
    }
    changeNormal(); 
    console.log(strength );
}
function judgeUserPwd(){
    let pwdValue = pwd.value,
        next = pwd.nextElementSibling,
        parents = pwd.parentElement;
    if(pwdValue.length <= 6){
        parents.className = "input-box warn";
        next.className = "warn_l";
        next.innerHTML = "密码不能为空";
        return false;
    }
    changeNormal();
    console.log(strength);
}
form.onsubmit = function(evt){
    var e = evt || window.event;
    e.preventDefault();
}
// 获取数据发送请求;
login.onclick = function(evt){
    var usrname = usr.value;
    var usrpwd = pwd.value;
    console.log(usrname,usrpwd)
    xhrPost("./server/login.php",{usrname,usrpwd})
    .then((res)=>{
        var obj = JSON.parse(res);
        console.log(obj);
        console.log(obj.stateCode);
        if(obj.stateCode == 1){
            jump();
        }else{
            alert("失败");
        }
    })
}
function jump(){
    window.location.href="./index.html"
}