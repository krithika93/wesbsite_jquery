
	$(document).ready(function()

{
	var active;
	active=0;
	var h;
	var g;
	var anim=false;
	var n=9;
	var i=9;
	var previous;
	var copy;
$("#nav").find('a:eq(3),a:eq(4),a:eq(5)').click(function()
{
$("#dream").find('.door').stop(true);
i=2;
		i=parseInt(i);
			
			if(i==active) //|| $('.tabs').filter(":animated").length != 0||i==active)
	{
hre=$(this).attr("href");
		//$('html,bo').
		$(hre).scrollTop();
		
		//var temp=$('.tabs').eq(i);
		
		
	}
else
{
	//if( $('.tabs').filter(":animated").length != 0 && i == previous)
	//	{
		//	$('.tabs').eq(previous).css("left","100%");
		//}
		//}
			//$('.tabs').eq(previous).clone(true).appendTo()
			
			
		
			if( i == previous && $('.tabs').filter(":animated").length != 0)
		{
			//$('.tabs').eq(previous).clone(true).appendTo()
			return false;
			
		}
	anim=true;
	//if(i != previous)
	//{
		//if(i!=previous)
		//{
				var piv=$('.tabs').eq(active);
//stop true here?
		$('.tabs').not(piv).css("left","100%");
		
	
		n=i;
		
		
		
		//}
		previous=active;
		 g=active;
			//var s=$('.tabs').eq(n);
			//s.addBack(temp);
			$("#tabc").find(".tabs").eq(g).animate(
		{
			"left":"-100%"
		
		},{duration:1000,easing:"linear",
		
			step:function(now,fx)
			{
				
				//$("#tab2").css("right",(-now));
				$("#tabc").find(".tabs").eq(n).animate(
		{
			//"left": now+100
			"left":"0%"
			
		},{duration:1000,easing:"linear" ,always:
			function()
			{
				
			//	jQuery.fx.off =true;
			$('.tabs').eq(previous).css("left","100%");
				$(".tabs").eq(g).css("left","100%").stop(true);
				$(".tabs").eq(n).css("left","0%").stop(true);
				
				//jquery.fx.off=true;
			} }
	);

			},always:
			function()
			{
				
			//	jQuery.fx.off =true;
			$('.tabs').eq(previous).css("left","100%");
				$(".tabs").eq(g).css("left","100%").stop(true);
				$(".tabs").eq(n).css("left","0%").stop(true);
				
				//jquery.fx.off=true;
			}
			}
			);
			//$(".tabs").eq(g).css("left","100%").stop(true);
				//$(".tabs").eq(n).css("left","0%").stop(true);
				
			active=n;
			//previous=g;
			i=9;	
		
			anim=false;
			//$('.tabs').stop(true);			
			}	
}

		);
	$(".divcontain").find(".t").click(
	

		function()
		{
	$("#dream").find('.door').stop(true);
		
			i=$(this).attr('data-tar');
		i=parseInt(i);
			
			if(i==active) //|| $('.tabs').filter(":animated").length != 0||i==active)
	{
		
		//var temp=$('.tabs').eq(i);
		
		return false;
	}
	//if( $('.tabs').filter(":animated").length != 0 && i == previous)
	//	{
		//	$('.tabs').eq(previous).css("left","100%");
		//}
		//}
			//$('.tabs').eq(previous).clone(true).appendTo()
			
			
		
			if( i == previous && $('.tabs').filter(":animated").length != 0)
		{
			//$('.tabs').eq(previous).clone(true).appendTo()
			return false;
			
		}
	anim=true;
	//if(i != previous)
	//{
		//if(i!=previous)
		//{
				var piv=$('.tabs').eq(active);
//stop true here?
		$('.tabs').not(piv).css("left","100%");
		
	
		n=i;
		
		
		
		//}
		previous=active;
		 g=active;
			//var s=$('.tabs').eq(n);
			//s.addBack(temp);
			$("#tabc").find(".tabs").eq(g).animate(
		{
			"left":"-100%"
		
		},{duration:1000,easing:"linear",
		
			step:function(now,fx)
			{
				
				//$("#tab2").css("right",(-now));
				$("#tabc").find(".tabs").eq(n).animate(
		{
			//"left": now+100
			"left":"0%"
			
		},{duration:1000,easing:"linear" ,always:
			function()
			{
				
			//	jQuery.fx.off =true;
			$('.tabs').eq(previous).css("left","100%");
				$(".tabs").eq(g).css("left","100%").stop(true);
				$(".tabs").eq(n).css("left","0%").stop(true);
				
				//jquery.fx.off=true;
			} }
	);

			},always:
			function()
			{
				
			//	jQuery.fx.off =true;
			$('.tabs').eq(previous).css("left","100%");
				$(".tabs").eq(g).css("left","100%").stop(true);
				$(".tabs").eq(n).css("left","0%").stop(true);
				
				//jquery.fx.off=true;
			}
			}
			);
			//$(".tabs").eq(g).css("left","100%").stop(true);
				//$(".tabs").eq(n).css("left","0%").stop(true);
				
			active=n;
			//previous=g;
			i=9;	
		
			anim=false;
				
			}	
					

		
	);
	
	
	
	
	
	
	
	

	
});

	
	
	
	
	
	
	
	
	
	
