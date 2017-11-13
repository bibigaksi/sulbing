+






$(function(){




	$('.accordion').on('click', '.title>a', function(e){
	e.preventDefault();
	$(this).closest('.acc-item').toggleClass('active2')
	.siblings().removeClass('active2');
	}).find('.title>a').eq(0).trigger('click');


	$(".btn_video").on("click", function(e) {
		e.preventDefault();
		$(".videoWrap").css({"display":"block"})
		
		$(".btnX").on("click", function(e){
			e.preventDefault();
		 $(".videoWrap").css({"display":"none"})
		});
	});




 $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css({"color":"#4c4c4c;", "font-weight":"bolder", "background":"none"});
         $(this).toggleClass("active").css("background", "#fff");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });


			$(".logo").on("click", function(e){
				e.preventDefault();
				var top = $('body').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300, 'easeInOutQuart');
			});

			$(".gnb li:nth-child(1)").on("click", function(e){
				e.preventDefault();
				var top = $('body').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300, 'easeInOutQuart');
			});

			$(".gnb li:nth-child(2)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub1').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');
			});


			$(".gnb li:nth-child(3)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub2').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');
			});


			$(".gnb li:nth-child(4)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub3').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');
			});


			$(".gnb li:nth-child(5)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub4').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');
			});


			$(".gnb li:nth-child(6)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub5').offset().top
				$("html,body").stop().animate({"scrollTop":top}, 1300,'easeInOutQuart');
			});




			$(".gnb_T li:nth-child(1)").on("click", function(e){
				e.preventDefault();
				var top = $('body').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300, 'easeInOutQuart');
				
			});

			$(".gnb_T li:nth-child(2)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub1').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');

			});


			$(".gnb_T li:nth-child(3)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub2').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');

			});


			$(".gnb_T li:nth-child(4)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub3').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');

			});


			$(".gnb_T li:nth-child(5)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub4').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');

			});


			$(".gnb_T li:nth-child(6)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub5').offset().top
				$("html,body").stop().animate({"scrollTop":top}, 1300,'easeInOutQuart');

			});


// phone
			
			$(".gnb_P li:nth-child(1)").on("click", function(e){
				e.preventDefault();
				var top = $('body').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300, 'easeInOutQuart');
				
			});

			$(".gnb_P li:nth-child(2)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub1').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');

			});


			$(".gnb_P li:nth-child(3)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub2').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');

			});


			$(".gnb_P li:nth-child(4)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub3').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');

			});


			$(".gnb_P li:nth-child(5)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub4').offset().top
				$("html,body").stop().animate({"scrollTop":top},1300,'easeInOutQuart');

			});


			$(".gnb_P li:nth-child(6)").on("click", function(e){
				e.preventDefault();
				var top = $('#sub5').offset().top
				$("html,body").stop().animate({"scrollTop":top}, 1300,'easeInOutQuart');

			});







	var $menu = $('.menu').find('a');

	$menu.click(function(e) {
		e.preventDefault();
		$(this).next().css({
			top : '-15%',
			display : 'block'
		}).animate({
			top : '0%'
		}, 2000, 'easeOutQuart');
	});

	$('.PopClose').click(function(e){
		e.preventDefault();
		$('.menuList').css('display','none');
	});

	
	slideShow(); 

	function slideShow() {

		var $sub3 = $('#sub3');
		var $article = $sub3.find('article');
		var count = 0; 
		var prev, next;
		var $indicator = $('.indicator').find('a');
		var autoSlide = setInterval(slideNext, 2500);

		
		$article.mouseenter(function(){
			clearInterval(autoSlide)
		});


		$article.mouseleave(function(){
			autoSlide = setInterval(slideNext,2500);
		});



		function slideNext() {
			prev = $article.eq(count);


			prev.css('left',0).stop().animate({
					left:'-100%'
			}, 1500);


			count++;

	
			if ( count == 3)
			{ count = 0;
			}

			next = $article.eq(count);

			next.css('left','100%').stop().animate({
					left:0
			}, 1500);

			indicator()
					
					}


			function slidePrev() {
			prev = $article.eq(count);
			
						
			prev.css('left',0).stop().animate({
			left:'100%'
			}, 1500);


			count--;

	
			if ( count < 0)
			{ count = 2;
			}

			next = $article.eq(count);

			next.css('left','-100%').stop().animate({
					left:0
			}, 1500);




			indicator()
			 

					}

		
			

		$('.next').click(function(){
			slideNext()
				
		});

		$('.prev').click(function(){
			slidePrev()
		
		
		});

		
		
		$indicator.click(function(){
			$indicator.removeClass('on');
			$(this).addClass('on');
 
			count = $(this).index()-1

			$article.css('left','100%')  
			slideNext();

		});


			function indicator() {

			$indicator.removeClass('on');
			$indicator.eq(count).addClass('on');
		
			}


	}

	var $img = $('.wrap2').find('img');
		$img.draggable( { containment: '.wrap2' });





var $window=$(window)


$window.scroll(function() {

$home=$('#home')
$sub1=$('#sub1')
$sub2=$('#sub2')
$sub3=$('#sub3')
$sub4=$('#sub4')
$sub5=$('#sub5')


homeOffsetTop=$home.offset().top;
sub1OffsetTop=$sub1.offset().top;
sub2OffsetTop=$sub2.offset().top;
sub3OffsetTop=$sub3.offset().top;
sub4OffsetTop=$sub4.offset().top;
sub5OffsetTop=$sub5.offset().top;


var result = 
	
($window.scrollTop() >= homeOffsetTop) && ( sub1OffsetTop > $window.scrollTop() )  

result ? $('.gnb_T li').eq(0).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_T li').eq(0).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub1OffsetTop) && ( sub2OffsetTop > $window.scrollTop() ) 

result ? $('.gnb_T li').eq(1).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_T li').eq(1).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub2OffsetTop) && ( sub3OffsetTop > $window.scrollTop() ) 

result ? $('.gnb_T li').eq(2).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_T li').eq(2).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub3OffsetTop) && ( sub4OffsetTop > $window.scrollTop() )

result ? $('.gnb_T li').eq(3).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_T li').eq(3).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub4OffsetTop) && ( sub5OffsetTop > $window.scrollTop() ) 

result ? $('.gnb_T li').eq(4).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_T li').eq(4).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub5OffsetTop) 

result ? $('.gnb_T li').eq(5).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_T li').eq(5).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})




/*phone*/


var result = 

($window.scrollTop() >= homeOffsetTop) && ( sub1OffsetTop > $window.scrollTop() )  

result ? $('.gnb_P li').eq(0).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_P li').eq(0).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub1OffsetTop) && ( sub2OffsetTop > $window.scrollTop() ) 

result ? $('.gnb_P li').eq(1).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_P li').eq(1).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub2OffsetTop) && ( sub3OffsetTop > $window.scrollTop() ) 

result ? $('.gnb_P li').eq(2).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_P li').eq(2).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub3OffsetTop) && ( sub4OffsetTop > $window.scrollTop() )

result ? $('.gnb_P li').eq(3).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_P li').eq(3).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub4OffsetTop) && ( sub5OffsetTop > $window.scrollTop() ) 

result ? $('.gnb_P li').eq(4).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_P li').eq(4).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})


var result = 

($window.scrollTop() >= sub5OffsetTop) 

result ? $('.gnb_P li').eq(5).css({'background':'rgb(58, 48, 29)', 'color':'#ffeee6'}) : $('.gnb_P li').eq(5).css({'background':'rgba(255,253,250,0.95)', 'color':'#400d00'})



});





		var sideNav = $('.gnb_P');
		var sideBtn = $('.hamberger');
		var state;

		sideBtn.click(function() {
			
			sideNav.toggleClass('open')
			state =  sideNav.hasClass('open');
			if(state) {
				sideNav.animate({
					top : '5px'
				}, 1000, 'easeOutBack');

				sideBtn.animate({
					top : '60px'
				}, 1000, 'easeOutBack');

				sideBtn.find('img').attr('src', 'images/ham_iconOv.png')
				
	
				
			} else {
				sideNav.animate({
					top : '-50px'
				}, 1000, 'easeInBack');

				sideBtn.animate({
					top : '10px'
				}, 1000, 'easeOutBack');


				sideBtn.find('img').attr('src', 'images/ham_icon.png')
					
			}
		
		});


});