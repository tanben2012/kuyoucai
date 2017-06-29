$(function(){
    //轮播图
	var bannimg=$(".bimg");
	var quence=$(".u-pointer");
	var smes=bannimg.find("li").length;
	for(var i=1;i<=smes;i++){
		quence.append("<i></i>");
	}
	bannimg.find("li").eq(0).show().siblings().hide();	
	quence.find("i").eq(0).addClass("z-crt").siblings().removeClass("z-crt");
	$(".m-slide").hover(
		function () {
			$(".u-prev,.u-next").fadeIn("200");
		},
		function () {
			$(".u-prev,.u-next").hide();
		}
	);
	
	var bannumb=function()
	{
		var inde=quence.find("i").index($(".u-pointer .z-crt"));
		var next=inde+1;
		if(next<smes){
			mov_b(next);
		}else{
			mov_b("0");
		}
	};
	var lobannbs=setInterval(bannumb,4000);
	
	function mov_b(indtx)
	{
		if (!bannimg.find("li").is(":animated"))
		{
		bannimg.find("li").eq(indtx).fadeIn(500).siblings().fadeOut(400);	
		quence.find("i").eq(indtx).addClass("z-crt").siblings().removeClass("z-crt");
		}
	}
	quence.find("i").mousemove(function()
	{
		var indd=quence.find("i").index($(this));
		mov_b(indd);
		clearInterval(lobannbs);
	}).mouseout(function()
	{
		lobannbs=setInterval(bannumb,4000);	
	});
	$(".u-prev").click(function(){
		var inde=quence.find("i").index($(".u-pointer .z-crt"));
		var prev=inde-1;
		if(prev<smes){
			mov_b(prev);
		}else{
			mov_b(smes);
		}
	});
	$(".u-next").click(function(){
		var inde=quence.find("i").index($(".u-pointer .z-crt"));
		var next=inde+1;
		if(next<smes){
			mov_b(next);
		}else{
			mov_b("0");
		}
	});
    
    //翻屏公告垂直滚动
    var $$=function(id){return document.getElementById(id);};
    $$('box2').innerHTML=$$('box1').innerHTML;
    function roll(){
        wrap.scrollTop++;
         if($$('box1').offsetHeight-wrap.scrollTop>0){  //尚未滚动到第二部分的顶部位置时
             if(wrap.scrollTop%wrap.offsetHeight!=0)  //
             {
                return(setTimeout(roll,10));	 //10毫秒即递归一次
             }
             else{						//当滚动的累计距离达到显示域高度的倍数时
                return(setTimeout(roll,3000));  //等待3秒才递归调用
             }
         }
         else{
             wrap.scrollTop=0;
                setTimeout(roll,3000);
            }
    }
    setTimeout(roll,3000);
	
	//圆形进度图
	$('.indicatorContainer').radialIndicator({
		radius: 28,
		barColor: '#f2571d',
		barWidth: 3,
		fontSize: 16,
		percentage: true
	});
	var indicatorContainer=$(".indicatorContainer");
	for(var i=0;i<indicatorContainer.length;i++){
		var radialObj = indicatorContainer.eq(i).data('radialIndicator');
		if(i>2){
			radialObj.option('barColor','#518fec'); 
		}
		var progress = indicatorContainer.eq(i).attr('progress');
		radialObj.animate(progress);
	}
    
    

})
