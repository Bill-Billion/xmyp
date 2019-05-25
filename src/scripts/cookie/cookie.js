$(function () {
    var car=$("#merchantList")  //要加载的区域   
    show();  
    function show(index){
        $.ajax({
            url: "scripts/xmyp.json",
            type: "GET",
            dataType: "json",
            success: function(data) {

                $.each(data, function (i, item) {
                    //循环json里的code，当对应cookie里的code不为空时
                    if (getCookie(`code-${data[i].gid}`)!="") {   
                        console.log(data[i].gid);
                        var number=getCookie(`number-${data[i].gid}`);
                        //渲染购物车
                        showCar(data[i],number);     
                    } 
                })
            }
        })
    }
    function showCar(data,number){
        var html = "";
        html = ` <div>
        <div class="merchant-item-container">
            <div class="merchant-info">
                <a class="m-icons m-icons-check-active select-icon" data-src="" href="javascript:;"></a>
                <span class="name" data-src="/flagshipstore?id=1&amp;title=小米自营(特殊商品)">小米自营(特殊商品)</span>
                <div class="postmarginright mijiapost">
                    <span><span class="postimg">!</span>已免运费</span>
                    <span class="layer hide">小米/米家自营商品单笔订单支付金额满150元（以实际付款金额为准，代金券等不含在内）起包邮。小米电视、小米体重秤等因商品特殊性不参与满150元包邮，另小米电视系列产品需要单独配送费，请参见具体商品产品详情页说明。</span>
                </div>
            </div>
            <div>
                <div class="good-item-container cart-goods-con">
                    <div class="merchant-reduce-top"></div>
                    <div class="cart-good-items clearfix">
                        <div class="select">
                            <a class="m-icons m-icons-check-active select-icon" data-src="" href="javascript:;"></a>
                        </div>
                        <div class="image" data-src="/detail?gid=104365&amp;pid=20093" data-target="_blank">
                            <img class="" src="${data.imgs.img800}" data-src="//i1.mifile.cn/a1/pms_1524621229.56695068.jpg?t=webp" alt="小米6X 全网通版 6GB内存 64GB 樱花粉">
                        </div>
                        <div class="name" data-src="/detail?gid=104365&amp;pid=20093" data-target="_blank">
                            <div class="vertical-wrap">
                                <p class="good-name brown-hover">${data.name}</p>
                            </div>
                        </div>
                        <div class="price">
                            <span>￥${data.price/100}</span>
                        </div>
                        <div class="num">
                            <div class="can-edit">
                                <div class="num-reduce-add" style="width: 134px;">
                                    <a class="m-icons m-icons-reduce minus-plus" data-src="" href="javascript:;" id="addItem"></a>
                                    <span class="txt" style="width: 70px;">${number}</span>
                                    <a class="m-icons m-icons-add-active minus-plus" data-src="" href="javascript:;"></a>
                                </div>
                            </div>
                        </div>
                        <div class="subtotal">
                            <span>￥${data.price/100*number}</span>
                        </div>
                        <div class="del">
                            <a class="m-icons m-icons-close-hover icon" data-src="" href="javascript:;" id="remove"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        car[0].innerHTML += html; 
        //找到删除按钮
        var remove = document.querySelectorAll("#remove");
        // console.log(`code-${data.gid}`);
        for(var i=0;i<remove.length;i++){
            remove[i].addEventListener("click",function(){
                console.log(`code-${data.gid}`);
                var code=(this.dataset.gid);
                var none="";
                console.log(`code-${data.gid}`);
                setCookie(`code-${data.gid}`, none, 30); //赋值为空
                setCookie(`name-${data.gid}`, none, 30); //赋值为空
                alert("删除成功");
                location.reload();          //重新加载页面
            })
        }
        var additem = document.querySelectorAll("#addItem");
        for(var i=0;i<additem.length;i++){
            additem[i].addEventListener("click",function(){
                console.log(1)
            })
        }
        
    }


    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
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

      function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";         
      }
    
});
