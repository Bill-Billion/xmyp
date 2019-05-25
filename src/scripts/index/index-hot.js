$(function () {
    var html="";
    var index=1;
    $.ajax({
        url: "scripts/hot.json",//json文件位置
        type: "GET",//请求方式为get
        dataType: "json", //返回数据格式为json
        success: function(data) {
            var count=0;
            var a = null;
            var color_c = null;
            $.each(data, function(i, item) {
                count++;
                // console.log(item.tags===undefined);
                
                    html+=` <a href="detail.html?values=${item.gid}">
                            <div class="swiper-slide">
                                <div class="m-goods-item-container" >
                                    <div class="bigtrap-img-tag-container">
                                        <div class="small-item-img">
                                            <div class="m-product-image-container undefined" style="width: 266px; height: 266px;" data-src="${item.imgs.img_square}">
                                                <div class="img-container-s" style="width: 266px; height: 266px;">
                                                    <img src="${item.imgs.img_square}" data-src="${item.imgs.img_square}" alt="${item.name}" style="width: 266px; height: 266px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-goods-common-box">
                                        <p class="pro-info" title="${item.name}" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${item.name}</p>
                                        <p class="pro-desc" title="${item.summary}" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${item.summary}</p>
                                        <p class="pro-price">
                                            <span class="pro-unit">¥</span>
                                            <span class="m-num">${item.price_min/100}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>`;
                    
            })
            $(".h-hot-sec .swiper-wrapper")[0].innerHTML=html;
            changeStyle();
            let [
                hot_slide,hot_next,hot_prev,hot_goods
            ] = [
                $(".h-hot-sec .swiper-wrapper"),$(".h-hot-sec .swiper-button-next"),$(".h-hot-sec .swiper-button-prev"),$(".h-hot-sec .swiper-slide")
            ]
            hot_next.click(function(){goNext(hot_slide,count4,hot_next,hot_prev,hot_goods);count4++});
            hot_prev.click(function(){goPrev(hot_slide,count4,hot_next,hot_prev,hot_goods);count4--});
        }
     })
     
  })