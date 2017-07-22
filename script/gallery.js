$(window).load(function(){


    $('.masonry_list_items li a').on('click', function(){
    $('.masonry_list_items li a.masonry_active').removeClass('masonry_active');
    $(this).addClass('masonry_active');
                
    })



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




})