$(function(){
    let[nav_list,nav_item,nav_detail]=[$(".nav-list"),$(".nav-item"),$(".nav-detail")]
    console.log(nav_item);
    nav_item.hover(
        function(){
            nav_detail.addClass("show");
    },
        function(){
            nav_detail.removeClass("show");
        }
    )

})