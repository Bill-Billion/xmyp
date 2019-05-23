//banner侧边栏
$(function(){
    let[nav_list,nav_item,nav_detail]=[$(".nav-list"),$(".nav-item"),$(".nav-detail")]
    $(function(){ 
        nav_item.mouseenter(function(){
            let getLi = $(this).index();
            console.log(getLi);
        })
    }); 
    nav_item.mouseenter(function(){nav_detail.addClass("show")});
    nav_detail.mouseenter(function(){nav_detail.addClass("show");})
    nav_item.mouseleave(function(){nav_detail.removeClass("show")})
    nav_detail.mouseleave(function(){nav_detail.removeClass("show")})
})