
// common pages functions
$(document).ready(function(){
	$("#to_top").on("click", function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
	});

	$(window).on('scroll', function(){
		if ($(document).scrollTop() > 500)
	{
		$("#to_top").css({
			'visibility' : 'visible',
			'position' : 'fixed',
			'right' : '4rem',
			'bottom' : '4rem'
		})
	}
	else
	{
		$("#to_top").css({
			'visibility' : '',
			'position' : '',
			'right' : '',
			'bottom' : ''
		})
	}
	})
});



// home pagefunction
$(document).ready(function(){
	var click_counter=0;
	$('#menu_icon').on('click',function(){
		click_counter++;
		if (click_counter % 2 != 0)
		{
			$('.menu_side').css('left','0');
			$('#menu_icon').css({
				'left':'25rem',
				'transform':'rotate(-90deg)'
			});
		$('#menu_icon').removeClass('bar').addClass('close_x');
		}
		else
		{
			$('.menu_side').css('left','-50%');
			$('#menu_icon').css({
				'left':'',
				'transform':''
			});
			$('#menu_icon').removeClass('close_x').addClass('bar');

		}
	});
});
$(document).ready(function(){
	$('.menu_side .search_form input[type=text]').focus(function(){
		$('.menu_side .search_form label[for=search]').css({
			'transform':'scale(.8) translateY(0)',
			'left':'-1px',
			'top':'27px'
		})
	});
	$('.menu_side .search_form input[type=text]').blur(function(){
		$('.menu_side .search_form label[for=search]').css({
			'transform':'',
			'left':'',
			'top':''
		})	
	})
})

 function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

$(document).ready(function(){
	$name = $('.name_input');
	$email = $('.email_input');
	$name.blur(function(){
		if ($name.val() == '')
		{
			$('.name_validation').css('visibility','visible');
		}
		else
		{
			$('.name_validation').css('visibility','');	
		}
	})
	$email.blur(function(){
		if ($email.val() == '')
		{
			$('.email_validation').css('visibility','visible');
			$email.addClass('error');
		}
		if( !validateEmail())
		{
			$email.addClass('error');
		}
		else
		{
			$('.email_validation').css('visibility','');	
		}
	})
})

$(document).ready(function() {
 
  $("#testimonials .testimonial_slider #owl-demo").owlCarousel({
 
      navigation : true, 
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
 
  });
 
});

$(document).ready(function() {
 
  $("#our_team #owl-demo").owlCarousel({
 
      navigation : true, 
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 3, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
 
  });
 
});



// about page functions

$(document).ready(function(){
	$(document).on('scroll', function(){

		if ($(document).scrollTop() > 30)
		{
			$('.fixed_section').css({
			'width':'100%',
			'position':'fixed',
			'top':'0'
			})
		}
		else
		{
			$('.fixed_section').css({
			'width':'',
			'position':'',
			'top':''
			})
		}
	})
});

$(document).ready(function() {
 
  $("#testimonial #owl-demo").owlCarousel({
 
      navigation : true, 
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 3, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
 
  });
 
});




$(document).ready(function(){
    var $container = $('#shuffled_carousel .col-md-9 .services_info');
    $container.isotope({
        filter: '.general_dent',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.shuffle_list_items li a').click(function(){
        $('.shuffle_list_items .shuffle_active').removeClass('shuffle_active');
        $(this).addClass('shuffle_active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});


function hasCls(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
		}


$(".search-input input").focus(function(){
	$(".search-input span").css({"top":"0","left":"15px","fontSize":"12px"})
	})
	$(".search-input input").blur(function(){
	$(".search-input span").css({"top":"15px","left":"20px","fontSize":"28px"})
	$(".search-input").css("display","none");
	$(".menuNav").fadeIn();
	$(".nav-search i").removeClass("fa-times").addClass("fa-search");
	})	

	$(".nav-search i").click(function(e){
		e.preventDefault();
		searchIcon=document.querySelector(".nav-search i");
		if (hasCls(searchIcon,"fa-search")) {
			$(this).removeClass("fa-search").addClass("fa-times");
		$(".menuNav").css("display","none");
		$(".search-input").fadeIn();
		}
		else{
		$(this).removeClass("fa-times").addClass("fa-search");
		$(".search-input").css("display","none");
		$(".menuNav").fadeIn();
	}
})