$(function(){
    //加载公共头尾
    $('#header').load('public/header.html');
    $('#footer').load('public/footer.html');
    //表格隔行换色
    $("tbody>tr:even").addClass("even");
    //选项卡
    tab(".m-hd .ti a");
	tab(".m-hd .m-hd .ti a");
	tab(".m-hd .m-hd .m-hd .ti a");
	tab(".m-hd1 .ti a");
    $(".m-hd1>.ti").click(function(){
        $(this).next(".ct").slideToggle().siblings(".ct").slideUp();
    })
    
})
//选项卡
function tab(ti){
    $(ti).click(function(){
		$(this).addClass("z-crt").siblings().removeClass("z-crt");
		var index=$(ti).index(this);
		$(this).parent().siblings(".ct").eq(index).addClass("z-crt").siblings(".ct").removeClass("z-crt");
	});
}

