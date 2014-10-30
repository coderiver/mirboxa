head.ready(function() {

	// slick

	$('.js-slick').slick({
		fade: true,
		autoplaySpeed: 5000
	});

	$('.js-boxers').slick({
		slidesToShow: 3,
		arrows: false,
		infinite: true,
		responsive: [
  		  {
  		    breakpoint: 960,
  		    settings: {
  		      slidesToShow: 2,
  		      dots: true,
  		      arrows: true
  		    }
  		  },
  		  {
  		  	breakpoint: 480,
  		  	settings: {
  		  		slidesToShow: 1,
  		  		dots: true
  		  	}
  		  }
  		]
	});

	$('.js-events').slick({
		dots: true,
  		arrows: true,
  		slidesToShow: 1
	});

	// mobile menu

	$('.js-menu-btn').on('click', function(){
		$('.js-menu').show();
		$('body').addClass('no-scroll');
	});
	$('.js-menu-close').on('click', function(){
		$('.js-menu').hide();
		$('body').removeClass('no-scroll');
	});

	// boxers links list height

	(function(){
		if ($('.boxers__list').length) {
			var height = $('.boxers__list').height();
			$('.boxers__list').each(function(){
				
				var h = $(this).height();
				
				if (h > height) {
					height = h;
				};

			});
			$('.boxers__list').css('height', height);
		};
	})();

// select
	$(".js-select").on("click",function(event) {
        event.stopPropagation();
    });
    $(".js-select-text").on("click",function(event) {
        if ($(this).parents(".js-select").hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(200);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(200);
            $(this).parents(".js-select").toggleClass("is-active");
            $(this).parents(".js-select").find(".js-select-list").slideToggle(200);
        }
       
    });
    $(".js-select-list a").on("click",function() {
        var val = $(this).attr("href");
        var text = $(this).text();
        $(this).parents(".js-select").find(".js-select-text").text(text);
        $(this).parents(".js-select").find("option").removeAttr("selected");
        $(this).parents(".js-select").find('option[value="'+val+'"]').attr("selected", "selected");
        $(this).parents(".js-select-list").find("a").removeClass("is-active");
        $(this).addClass("is-active");
        $(this).parents(".js-select").removeClass("is-active");
        $(this).parents(".js-select-list").slideUp(200);
        return false;
        
    });

// tabs
	
	function tab() {
       $(".js-tab").each(function(){
        	var tab_link = $(this).find("a");
        	var tab_item = $(this).find("li");
        	var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
        	tab_cont.hide();
        	tab_item.first().addClass("is-active");
        	tab_item.first().find('a').addClass("is-active");
        	$(this).parents(".js-tab-group").find(".js-tab1").show();
        	tab_link.on("click", function() {
        	    var index = $(this).attr("href");
        	    tab_item.removeClass("is-active");
        	    tab_link.removeClass('is-active');
        	    $(this).addClass("is-active");
        	    tab_cont.hide();
        	    $(this).parents(".js-tab-group").find("."+index).show();
        	    return false;
        	 });
       });
  	}
  	tab();    

// logo scroll
	function logoScroll(){
		if ($('.header__sticky').length) {
			if ($(window).scrollTop() > 1) {
				$('.header__sticky').addClass('is-scroll');
			}
			else{
				$('.header__sticky').removeClass('is-scroll');
			}
		};
		
	}
	logoScroll();
	
// fancybox
	
	$(".fancybox").fancybox({
		padding: 0,
		nextEffect: 'fade',
		prevEffect: 'fade'
	});	

// callback popup init

	if ($('.js-callback').length) {
		$('.js-callback').on('click', function() {
			$('.js-callback-popup').addClass('is-open').show();
		});
	};
	$('.js-popup-close').on('click', function(){
		$('.js-callback-popup').hide();
	});
	$('.js-callback-popup').on('click', function(event){
		$(this).hide();
	})
	$('.popup').on('click', function(event){
		event.stopPropagation();
	})

	$(window).scroll(function(){
		logoScroll();
	});

});