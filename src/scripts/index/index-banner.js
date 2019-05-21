//变量定义区域
let count1 = 0;
let [
    limte_slide,
    limte_next,
    limte_prev,
    limite_goods,
    hot_slide,
    hot_next,
    hot_prev,
    hot_goods
] = [
    $(".p-trap-wrap .swiper-wrapper"),
    $(".p-trap-wrap .swiper-button-next"),
    $(".p-trap-wrap .swiper-button-prev"),
    $(".p-trap-wrap .swiper-slide"),
    $(".h-new-sec .swiper-wrapper"),
    $(".h-new-sec .swiper-button-next"),
    $(".h-new-sec .swiper-button-prev"),
    $(".h-new-sec .swiper-slide")
]
// 头、尾部判断函数
function judgeClick(){
    if(count1===limite_goods.length-3){
        limte_next.addClass("swiper-button-disabled");
        // limte_next.off("click");
    }else if(count1===0){
        limte_prev.addClass("swiper-button-disabled");
        // limte_prev.off("click");
    }
    else{
        // limte_next.on("click");
        // limte_prev.on("click");
        limte_next.removeClass("swiper-button-disabled");
        limte_prev.removeClass("swiper-button-disabled");
    }
}
//点击右移271px
function goNext(evt){
    count1++;
    console.log(count1);
    evt.css({
        transform : "translate3d("+-271*count1+"px, 0px, 0px)",
        "transition-duration" : "600ms"
    });
    judgeClick();
}
//点击左移271px
function goPrev(evt){
    count1--;
    console.log(count1);
    evt.css({
        transform : "translate3d("+-271*count1+"px, 0px, 0px)",
        "transition-duration" : "600ms"
    });
    judgeClick();
}
limte_next.click(function(){goNext(limte_slide);});
limte_prev.click(function(){goPrev(limte_slide);});
hot_next.click(function(){goNext(hot_slide)});
hot_prev.click(function(){goPrev(hot_slide)});
