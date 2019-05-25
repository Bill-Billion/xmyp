$(function () {
    var html="";
    var index=1;
    $.ajax({
        url: "scripts/list.json",//json文件位置
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
                                <div class="m-goods-item-container " >
                                    <div class="bigtrap-img-tag-container">
                                        <div class="img-tag">
                                            <span>${item.discount_desc}</span>
                                        </div>
                                        <div class="small-item-img">
                                            <div class="m-product-image-container undefined" style="width: 266px; height: 266px;" data-src="https://img.youpin.mi-img.com/pic_square/100435_c4206322728fa4b38cee7b8de7356752.jpg">
                                                <div class="img-container-s" style="width: 266px; height: 266px;">
                                                    <img src="${item.imgs.img_square}" data-src="https://img.youpin.mi-img.com/pic_square/100435_c4206322728fa4b38cee7b8de7356752.jpg" alt="${item.name}" style="width: 266px; height: 266px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bigtrap-box">
                                        <p class="pro-info" title="${item.name}" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${item.name}</p>
                                        <p class="pro-price">
                                            <span class="pro-unit">¥</span>
                                            <span class="m-num">${item.flash_price/100}</span>
                                            <span class="pro-flag">起</span>
                                            <span class="market-price">
                                                <span class="pro-unit">¥</span>
                                                <span class="m-num">${item.market_price/100}</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>`;
                    
            })
            $(".p-trap-wrap .swiper-wrapper")[0].innerHTML=html;
            changeStyle();
            let [
                limte_slide,limte_next,limte_prev,limite_goods
            ] = [
                $(".p-trap-wrap .swiper-wrapper"),$(".p-trap-wrap .swiper-button-next"),$(".p-trap-wrap .swiper-button-prev"),$(".p-trap-wrap .swiper-slide"),
            ]
            limte_next.click(function(){goNext(limte_slide,count2,limte_next,limte_prev,limite_goods);count2++});
            limte_prev.click(function(){goPrev(limte_slide,count2,limte_next,limte_prev,limite_goods);count2--});
        }
     })
  })