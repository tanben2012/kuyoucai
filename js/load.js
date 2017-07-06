$(function(){
    //导航定位
    var currenturl = location.href;				//获取到地址栏
    var re = new RegExp("https://", "g");		//获取到https://
    currenturl = currenturl.replace(re, "");	//去掉http://
    var currentpagename = currenturl.substring(currenturl.indexOf("/") + 1);	//去掉域名
    $(".m-nav").find("a[href$='" + currentpagename + "']").addClass("z-crt").siblings().removeClass("z-crt");
    //侧边栏返回顶部显示状态
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $("#lastitem").fadeIn(150);
        }
        if ($(window).scrollTop() < 70) {
            $("#lastitem").fadeOut(150);
        }
    });
})
