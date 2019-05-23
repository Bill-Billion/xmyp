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


