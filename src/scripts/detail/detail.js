$(function(){
    $("#show").html(oneValues());
})

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";         
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

function checkCookie(data) {
//     var user=getCookie("username");
    var code=getCookie(`code-${data}`);
    if (code != "") {
        var number=getCookie(`number-${data}`);
        number++;
        setCookie(`number-${data}`, number, 30);
        console.log(document.cookie);
} else {
        code=data;
        var number=1;
        setCookie(`code-${data}`, code, 30);
        setCookie(`number-${data}`, number, 30);
    }
}

//接收一个值
function oneValues(){
    var result;
    //获取url中"?"符后的字串  
    var url=window.location.search; 
    if(url.indexOf("?")!=-1){
        result = url.substr(url.indexOf("=")+1);
    }
    return result;
}
//接收多值
function manyValues(){
    var url=window.location.search;
    if(url.indexOf("?")!=-1){
        var str = url.substr(1);
            strs = str.split("&"); 
            var key=new Array(strs.length);
            var value=new Array(strs.length);
            for(i=0;i<strs.length;i++){
                key[i]=strs[i].split("=")[0]
                value[i]=unescape(strs[i].split("=")[1]); 
                alert(key[i]+"="+value[i]);
        } 
    } 
}
// console.log(oneValues())
// 渲染商品
$(function () {
    var html="";
    var index=1;
    $.ajax({
        url: "scripts/xmyp.json",//json文件位置
        type: "GET",//请求方式为get
        dataType: "json", //返回数据格式为json
        success: function(data) {
            var count=0;
            var a = null;
            var color_c = null;
            $.each(data, function(i, item) {
                count++;
                // console.log(item.gid == oneValues());
                if(item.gid == oneValues()){
                html=`  <div class="detail">
                            <div class="container">
                                <div>
                                    <div class="header clearfix">
                                        <div class="banner clearfix">
                                            <div class="main fl">
                                                <img src="${item.imgs.img800}">
                                            </div>
                                            <div class="thumb fr" style="display: block;">
                                                <div class="thumb-container" style="top: 0px;">
                                                    <div class="thumb-pic" style="border-color: rgb(132, 95, 63);">
                                                        <img src="${item.imgs.img800}">
                                                    </div>
                                                    <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">
                                                        <img src="${item.imgs.img800s}">
                                                    </div>
                                                    <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">
                                                        <img src="${item.imgs.img_horizon}">
                                                    </div>
                                                    <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">
                                                        <img src="${item.imgs.img_safe_area_url}">
                                                    </div>
                                                    <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">
                                                        <img src="${item.imgs.img_square}">
                                                    </div>
                                                </div>
                                                <div class = "thumb-arrow-up">
                                                    <a class="m-icons m-icons-up " data-src="" href="javascript:;"></a>
                                                </div>
                                                <div class="thumb-arrow-down">
                                                    <a class="m-icons m-icons-down " data-src="" href="javascript:;"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sku-container">
                                            <div class="name clearfix">
                                                <div class="good-name fl">${item.name}</div>
                                            </div>
                                            <div class="summary">${item.summary}</div>
                                            <div class="promotion-box"></div>
                                            <div class="card">
                                                <div class="price-line">
                                                    <h5 class="sku-title">售价</h5>
                                                    <div class="price">
                                                        <span class="money-symbol">¥</span>
                                                        <span class="value">${item.price/100}</span>
                                                    </div>
                                                </div>
                                                <div class="service-line">
                                                    <h5 class="sku-title">服务</h5>
                                                    <div class="introduce-container">
                                                        <p class="icon">!</p>
                                                        <div class="content ">
                                                            <div class="cardmodal-outer-container" style="width: 500px; left: -20px; top: -20px;">
                                                                <div class="inner-container" style="width: 500px; left: 20px; top: 20px;">
                                                                    <div class="container" style="width: 494px;">
                                                                        <div class="content-main">
                                                                            <div class="text-item">
                                                                                <p class="text-title">满99包邮</p>
                                                                                <p class="text-content">本商品满99元可包邮，不足99元收取运费10元</p>
                                                                            </div>
                                                                            <div class="text-item">
                                                                                <p class="text-title">有品三方</p>
                                                                                <p class="text-content">本商品为有品精选精品，第三方品牌方为实际销售方，小米有品精心挑选，严格把关，为您精选品质上乘的精品商品。</p>
                                                                            </div>
                                                                            <div class="text-item">
                                                                                <p class="text-title">由有品配送发货，云丁网络技术（北京）有限公司提供售后</p>
                                                                                <p class="service-item-qualification">查看商家资质</p>
                                                                            </div>
                                                                            <div class="text-item">
                                                                                <p class="text-title">7天无理由</p>
                                                                                <p class="text-content">本商品支持7天无理由退货</p>
                                                                            </div>
                                                                            <div class="text-item">
                                                                                <p class="text-title">平台运费说明</p>
                                                                                <p class="text-content">由小米平台发货的小米自营商品,单笔满150元免运费,不满150元收取10元运费;</p>
                                                                                <p class="text-content">有品平台三方商品,单笔订单满99元免运费,不满99元收取10元运费;</p>
                                                                                <p class="text-content">特殊商品需要单独收取运费,具体以实际结算金额为准;</p>
                                                                                <p class="text-content">优惠券不能抵扣运费。</p>
                                                                            </div>
                                                                            <div class="text-item">
                                                                                <p class="text-title">退换货运费声明</p>
                                                                                <p class="text-content">非质量问题退换货,运费不予返还;</p>
                                                                                <p class="text-content">因质量问题退换货,运费予以返还,多件产品只退部分产品时,运费按比例返还;</p>
                                                                                <p class="text-content">电视等大件商品,无质量问题退货产生的运费由购买者承担,从退款中直接扣除。</p>
                                                                            </div><div class="text-item">
                                                                                <p class="text-title">企业信息</p>
                                                                                <p class="text-content">企业名称： 云丁网络技术（北京）有限公司</p>
                                                                                <p class="text-content">企业执照注册号： 91110108399514950D</p>
                                                                                <p class="text-content">企业地址： 北京市海淀区花园路1号27幢333号</p>
                                                                                <p class="text-content">企业电话： 010-56234691</p>
                                                                                <p class="text-content">营业期限： 2014年05月21日至2034年05月20日</p>
                                                                                <p class="text-content">经营范围： 技术开发、技术转让、技术咨询、技术服务、技术推广；电脑动画设计；维修计算机；办公设备维修；仪器仪表维修；销售计算机、软件及辅助设备、电子产品。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="size">
                                                                    <div class="content-main">
                                                                        <div class="text-item">
                                                                            <p class="text-title">满99包邮</p>
                                                                            <p class="text-content">本商品满99元可包邮，不足99元收取运费10元</p>
                                                                        </div>
                                                                        <div class="text-item">
                                                                            <p class="text-title">有品三方</p>
                                                                            <p class="text-content">本商品为有品精选精品，第三方品牌方为实际销售方，小米有品精心挑选，严格把关，为您精选品质上乘的精品商品。</p>
                                                                        </div>
                                                                        <div class="text-item">
                                                                            <p class="text-title">由有品配送发货，云丁网络技术（北京）有限公司提供售后</p>
                                                                            <p class="service-item-qualification">查看商家资质</p>
                                                                        </div>
                                                                        <div class="text-item">
                                                                            <p class="text-title">7天无理由</p>
                                                                            <p class="text-content">本商品支持7天无理由退货</p>
                                                                        </div>
                                                                        <div class="text-item">
                                                                            <p class="text-title">平台运费说明</p>
                                                                            <p class="text-content">由小米平台发货的小米自营商品,单笔满150元免运费,不满150元收取10元运费;</p>
                                                                            <p class="text-content">有品平台三方商品,单笔订单满99元免运费,不满99元收取10元运费;</p>
                                                                            <p class="text-content">特殊商品需要单独收取运费,具体以实际结算金额为准;</p>
                                                                            <p class="text-content">优惠券不能抵扣运费。</p>
                                                                        </div>
                                                                        <div class="text-item">
                                                                            <p class="text-title">退换货运费声明</p>
                                                                            <p class="text-content">非质量问题退换货,运费不予返还;</p>
                                                                            <p class="text-content">因质量问题退换货,运费予以返还,多件产品只退部分产品时,运费按比例返还;</p>
                                                                            <p class="text-content">电视等大件商品,无质量问题退货产生的运费由购买者承担,从退款中直接扣除。</p>
                                                                        </div>
                                                                        <div class="text-item">
                                                                            <p class="text-title">企业信息</p>
                                                                            <p class="text-content">企业名称： 云丁网络技术（北京）有限公司</p>
                                                                            <p class="text-content">企业执照注册号： 91110108399514950D</p>
                                                                            <p class="text-content">企业地址： 北京市海淀区花园路1号27幢333号</p>
                                                                            <p class="text-content">企业电话： 010-56234691</p>
                                                                            <p class="text-content">营业期限： 2014年05月21日至2034年05月20日</p>
                                                                            <p class="text-content">经营范围： 技术开发、技术转让、技术咨询、技术服务、技术推广；电脑动画设计；维修计算机；办公设备维修；仪器仪表维修；销售计算机、软件及辅助设备、电子产品。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="service">
                                                        <div class="service-item">
                                                            <a class="m-icons m-icons-service " data-src="" href="javascript:;"></a>
                                                            <span class="service-item-text">满99包邮</span>
                                                        </div>
                                                        <div class="service-item">
                                                            <a class="m-icons m-icons-service " data-src="" href="javascript:;"></a>
                                                            <span class="service-item-text">有品三方</span>
                                                        </div>
                                                        <div class="service-item">
                                                            <a class="m-icons m-icons-service " data-src="" href="javascript:;"></a>
                                                            <span class="service-item-text">7天无理由</span>
                                                        </div>
                                                        <div class="service-item">
                                                            <a class="m-icons m-icons-service " data-src="" href="javascript:;"></a>
                                                            <span class="service-item-text">由有品配送发货，云丁网络技术（北京）有限公司提供售后</span>
                                                            <span class="service-item-qualification">(查看商家资质)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="address-line">
                                                <h5 class="sku-title">配送区域</h5>
                                                <div class="address">
                                                    <div>
                                                        <span>北京 北京市 海淀区</span>
                                                        <span>&nbsp;</span>
                                                        <a>修改</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div style="overflow: hidden; padding: 0px 0px 12px;">
                                                    <div class="size-line clearfix">
                                                        <h5 class="sku-title"> 选择${item.style} </h5>
                                                        <div class="size-container">
                                                            <div class="tag-item-onSaled">白色</div>
                                                            <div class="tag-item-onSaled">黑色</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="count-line">
                                                    <h5 class="sku-title count-title">数量</h5>
                                                    <div class="count-container">
                                                        <div>
                                                            <div class="minus-btn">
                                                                <a class="m-icons m-icons-reduce " data-src="" href="javascript:;"></a>
                                                            </div>
                                                            <input type="text" value="1" class="count-input">
                                                            <div class="minus-btn-active">
                                                                <a class="m-icons m-icons-add-active " data-src="" href="javascript:;"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="btn-line">
                                                <div class="buy-btn-container">
                                                    <a class="m-btns m-btn-middle m-btn-brown" href="javascript:;" data-gid="${item.gid}" id="cart">加入购物车</a>
                                                    <a class="m-btns m-btn-middle m-btn-brown-stroke" href="javascript:;">立即购买</a>
                                                </div>
                                                <div class="favor-btn ">
                                                    <div>
                                                        <a class="m-icons m-icons-collection " data-src="" href="javascript:;"></a>
                                                        <p>收藏</p>
                                                    </div>
                                                </div>
                                                <div class="faver-service-btn favor-btn ">
                                                    <div>
                                                        <a class="m-icons m-icons-service-detail " data-src="" href="javascript:;"></a>
                                                        <p>客服</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`; 
                }
                
                
                
            })
            $(".detail")[0].innerHTML=html;
            var btn1 = $("#cart");
            var btn = document.querySelector("[data-gid]");
            btn.addEventListener("click",function(){
                console.log(btn)
                checkCookie(btn1.data("gid"));
            });
            var imgSmall = document.querySelectorAll(".thumb-pic");
            var imgBig = document.querySelector(".main")
            imgSmall.forEach(item=>{
                item.addEventListener("mouseover",function(){
                    console.log(item)
                    imgBig.children[0].src = item.children[0].src;
                    item.style.borderColor = "rgb(132, 95, 63)"
                })
                item.addEventListener("mouseleave",function(){
                    console.log(item)
                    item.style.borderColor = "rgb(236, 236, 236)"
                })
            })
            
            // imgSmall.forEach(item => {
            //     item.addEventListener("click",function(){
            //         console.log(imgBig[0].children[0].src)
            //     })
            // })
        }
    })   
})
$(function(){
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
    $(document).on("scroll",function(){
        var header_top = $(document).scrollTop();
        if(header_top>450){
            m_header.addClass("m-header-fixed")
        }else{
            m_header.removeClass("m-header-fixed")
        }
    })
    m_clauses.mouseenter(function(){
        site_item.addClass("show");
    })
    m_clauses.mouseleave(function(){
        site_item.removeClass("show");
    })
    //搜索选框
    search_input.focus(function(){
        search_form.addClass("active");
    });
    search_input.blur(function(){
        search_form.removeClass("active");
    })
    // 侧边浮动栏
    fixed_item.mouseenter(function(){
        let getLi = $(this).index();
        switch(getLi){
            case 0 : service_pop.addClass("show");
            break;
            case 1 : download_pop.addClass("show");
            break;
            case 2 : gift_pop.addClass("show");
            break;
            case 3 : wxchat_pop.addClass("show");
            break;
        }
    })
    fixed_item.mouseleave(function(){
        service_pop.removeClass("show");
        download_pop.removeClass("show")
        gift_pop.removeClass("show");
        wxchat_pop.removeClass("show");
    })
})


