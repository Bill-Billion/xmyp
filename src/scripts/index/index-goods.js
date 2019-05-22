//鼠标移入商品，样式发生变化
$(function(){
    let goods = $(".m-goods-item-container");
    goods.mouseenter(function(){
        $(this).css({
            "transform" : "translate3d(0px, -3px, 0px)",
            "box-shadow" : "rgb(230,230,230) 0px 0px 5px 2px",
            "transition-duration" : "300ms"
        });
    })
    goods.mouseleave(function(){
        $(this).css({
            "box-shadow" : "",
            "transform" : "translate3d(0px, 0px, 0px)",
        })
    })
})
//渲染商品界面
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
                // console.log(item.tags===undefined);
                if(item.tags===undefined){
                    a = `<div class="m-goods-common-tag-con"></div>`
                }else if(item.tags.length===2){
                    a = `<div class="m-goods-common-tag-con">
                            <span class="common-tag common-tag-text" style="background-color: rgb(217, 107, 108);">${item.tags[0].name}</span>
                            <span class="common-tag common-tag-text" style="background-color: rgb(217, 107, 108);">${item.tags[1].name}</span>
                        </div>`
                }else{
                    a = `<div class="m-goods-common-tag-con">
                            <span class="common-tag common-tag-text" style="background-color: rgb(217, 107, 108);">${item.tags[0].name}</span>
                        </div>`
                }
                if(item.color_num===undefined){
                    color_c = ` `
                }else{
                    color_c =  `<div class="m-goods-pro-tag-con">${item.color_num}色可选</div>`
                }
                if(count%4==1){
                    html+=`<div class="m-goods-item-container  pro-item-category" data-src="/detail?gid=${item.gid}" data-target="_blank" style="margin-left:0">
                                <div class="category-img-container">
                                    <div class="product-img">
                                        <div class="m-product-image-container" data-src="${item.imgs.img800}" style="width: 264px; height: 198px;">
                                            <div class="img-container" style="padding: 45px 70px 28px; width: 124px; height: 125px;">
                                                <img src="${item.imgs.img800}" data-src="${item.imgs.img800}" alt="${item.name}" style="height: 125px; width: 125px; margin-left: -0.5px;">
                                            </div>
                                        </div>
                                    </div>
                                    <p class="pro-desc">${item.attr_ext.custom_summary}</p>
                                </div>
                                ${color_c}
                                <div class="category-box">
                                    <div class="m-goods-common-tag-con"></div>
                                    <p class="pro-info" title="${item.name}" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${item.name}</p>
                                    <p class="pro-price">
                                        <span class="pro-unit">¥</span>
                                        <span class="m-num">${item.price/100}</span>
                                    </p>
                                </div>
                            </div>`; 
                }
                else{
                    html+=`<div class="m-goods-item-container  pro-item-category" data-src="/detail?gid=${item.gid}" data-target="_blank">
                                <div class="category-img-container">
                                    <div class="product-img">
                                        <div class="m-product-image-container" data-src="${item.imgs.img800}" style="width: 264px; height: 198px;">
                                            <div class="img-container" style="padding: 45px 70px 28px; width: 124px; height: 125px;">
                                                <img src="${item.imgs.img800}" data-src="${item.imgs.img800}" alt="${item.name}" style="height: 125px; width: 125px; margin-left: -0.5px;">
                                            </div>
                                        </div>
                                    </div>
                                    <p class="pro-desc">${item.attr_ext.custom_summary}</p>
                                </div>
                                ${color_c}
                                <div class="category-box">
                                    ${a}
                                    <p class="pro-info" title="${item.name}" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${item.name}</p>
                                    <p class="pro-price">
                                        <span class="pro-unit">¥</span>
                                        <span class="m-num">${item.price/100}</span>
                                    </p>
                                </div>
                            </div>`;
                    }
            })
            $(".m-product-list")[0].innerHTML=html;
            $(function(){
                let goods = $(".m-goods-item-container");
                goods.mouseenter(function(){
                    $(this).css({
                        "transform" : "translate3d(0px, -3px, 0px)",
                        "box-shadow" : "rgb(230,230,230) 0px 0px 5px 2px",
                        "transition-duration" : "300ms"
                    });
                })
                goods.mouseleave(function(){
                    $(this).css({
                        "box-shadow" : "",
                        "transform" : "translate3d(0px, 0px, 0px)",
                    })
                })
            })
        }
     })
     

     var viewHeight = document.documentElement.clientHeight;

     function lazyload() {
         var imgs = document.querySelectorAll('img[data-original][lazyload]');
         imgs.forEach(item => {

             if (item.dataset.original == '') {
                 return;
             }
             var rect = item.getBoundingClientRect();
             if (rect.bottom >= -100 && rect.top < viewHeight-100) {
                 var img = new Image();
                 img.src = item.dataset.original;
                 img.onload = function() {
                     item.src = img.src;
                 }
                 item.removeAttribute('data-original');
                 item.removeAttribute('lazyload')
             }
         })
     }
    //  console.log(viewHeight);
     document.addEventListener('scroll', lazyload);
     
     setTimeout(() => {
         lazyload();
     }, 10);

        

  })

    
    