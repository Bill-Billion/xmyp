//鼠标移入商品，样式发生变化
$(function(){
    let goods = $(".m-goods-item-container");
    goods.mouseenter(function(){
        $(this).css({
            "transition" : "0.5s",
            "transform" : "translate3d(0px, -3px, 0px)",
            "box-shadow" : "rgb(230,230,230) 0px 0px 5px 2px",
            "transition-duration" : "600ms"
        });
    })
    goods.mouseleave(function(){
        $(this).css({
            "box-shadow" : "",
            "transform" : "translate3d(0px, 0px, 0px)",
        })
    })
})