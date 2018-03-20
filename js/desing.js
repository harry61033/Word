$(function(){
$("#Show").click(function(){
			$(this).next().slideToggle();
		});
 	$("#Showtwo").click(function(){
			$(this).next().slideToggle();
		});
 	$("#Abotu").click(function(){
			$(this).next().slideToggle();
		});
 	$(function(){
			$(window).scroll(function(){
				var $scroll_top = $(window).scrollTop();
			if($scroll_top >= 500){
				// alert();
				$('.GraphicDesignContentContainer').css({'opacity':'1'});
				$('.TextContent').css({'display':'block'});
				$('.GraphicDesignShowBoxContent').css({'display':'block'});

			}
			else{
				$('.TextContent').css({'display':'none'});
				$('.GraphicDesignContentContainer').css({'opacity':'0'});
				$('.GraphicDesignShowBoxContent').css({'display':'none'});
			}
			});
		});
 	$(function(){
 		   $(window).scroll(function(){
				var $scroll_top = $(window).scrollTop();
			if($scroll_top >= 100){
				// alert();
				$('.WesitbDesignContentContainer').css({'opacity':'1'});
				$('.TextContentTwo').css({'display':'block'});
				$('.WebDesignContentContainer').css({'display':'block'});
			}
			else{
				$('.TextContentTwo').css({'display':'none'});
				$('.WesitbDesignContentContainer').css({'opacity':'0'});
				$('.WebDesignContentContainer').css({'display':'none'});
			}
			});
		});
 $(function(){
	$('#top').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 1000);
	}); 
	
	$('#ct').click(function(){
		$('html,body').animate({scrollTop:$('.GraphicDesignContentContainer').offset().top}, 1000);
	});
	
	$('#ft').click(function(){
		$('html,body').animate({scrollTop:$('.WesitbDesignContentContainer').offset().top}, 1000);
	});
});