
    //变量定义区域
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var news = "news";
    var limte = "limte";
    var timer = null;
    let [
        banner_slide,banner_next,banner_prev,banner_img,
        limte_slide,limte_next,limte_prev,limite_goods,
        news_slide,news_next,news_prev,news_goods,
        hot_slide,hot_next,hot_prev,hot_goods
    ] = [
        $(".banner-nav .swiper-wrapper"),$(".banner-nav .swiper-button-next"),$(".banner-nav .swiper-button-prev"),$(".banner-nav .swiper-slide"),
        $(".p-trap-wrap .swiper-wrapper"),$(".p-trap-wrap .swiper-button-next"),$(".p-trap-wrap .swiper-button-prev"),$(".p-trap-wrap .swiper-slide"),
        $(".h-new-sec .swiper-wrapper"),$(".h-new-sec .swiper-button-next"),$(".h-new-sec .swiper-button-prev"),$(".h-new-sec .swiper-slide"),
        $(".h-hot-sec .swiper-wrapper"),$(".h-hot-sec .swiper-button-next"),$(".h-hot-sec .swiper-button-prev"),$(".h-hot-sec .swiper-slide")
    ]
    
    // console.log($(".h-hot-sec .swiper-wrapper").children());
    // console.log(hot_goods)
    function bannerNext(evt){
        count1++;
        evt.css({
            transform : "translate3d("+-859*count1+"px, 0px, 0px)",
            "transition-duration" : "1000ms"
        });
        if(count1===5){
            evt.css({
                transform : "translate3d(0px, 0px, 0px)",
            });
            count1 = 0;
        }
    }
    function bannerPrev(evt){
        count1--;
        evt.css({
            transform : "translate3d("+-859*count1+"px, 0px, 0px)",
            "transition-duration" : "1000ms"
        });
        if(count1===-1){
            evt.css({
                transform : "translate3d("+-859*4+"px, 0px, 0px)",
                "transition-duration" : "1000ms"
            });
            count1 = 4;
        }
    }
    // 头、尾部判断函数
    function judgeClick(num,next,prev,good){
        if(num === good.length-4){
            next.addClass("swiper-button-disabled");
            // limte_next.off("click");
        }else if(num === 0){
            prev.addClass("swiper-button-disabled");
            // limte_prev.off("click");
        }
        else{
            // limte_next.on("click");
            // limte_prev.on("click");
            next.removeClass("swiper-button-disabled");
            prev.removeClass("swiper-button-disabled");
        }
    }
    //点击右移271px
    function goNext(evt,num,next,prev,good){
        num++;
        // console.log(num);
        evt.css({
            transform : "translate3d("+-271*num+"px, 0px, 0px)",
            "transition-duration" : "600ms"
        });
        judgeClick(num,next,prev,good);
    }
    //点击左移271px
    function goPrev(evt,num,next,prev,good){
        num--;
        // console.log(num);
        evt.css({
            transform : "translate3d("+-271*num+"px, 0px, 0px)",
            "transition-duration" : "600ms"
        });
        judgeClick(num,next,prev,good);
    }
    function autoPlay(){
        timer = setInterval(() => {
            bannerNext(banner_slide);
        }, 3500);
    }  
    
    // timer = setInterval(function (){
    //     count1++;
    //     if(count1==banner_img.length){count1=0};
    //     banner_img.eq(count1).trigger("click");
    // },1000);

    banner_next.click(function(){bannerNext(banner_slide);});
    banner_prev.click(function(){bannerPrev(banner_slide);});
    autoPlay();
    banner_slide.mouseenter(function(){
        clearTimeout(timer);
    });
    banner_slide.mouseleave(function(){
        autoPlay();
    });
    
    
 
