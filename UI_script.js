$(document).ready(function(){
//ProductNav
    $('.products_nav').click(function(){
        $('.subnav:eq(0)').addClass('subnav_active')
        $('.products_nav i').addClass('fa-angle-up').removeClass('fa-angle-down')
    })

    $('.products_nav').mouseleave(function(){
        $('.subnav:eq(0)').removeClass('subnav_active')
        $('.products_nav i').removeClass('fa-angle-up').addClass('fa-angle-down')
    })

//ReviewsNav
    $('.reviews_nav').click(function(){
        $('.subnav:eq(1)').addClass('subnav_active')
        $('.reviews_nav i').addClass('fa-angle-up').removeClass('fa-angle-down')
    })

    $('.reviews_nav').mouseleave(function(){
        $('.subnav:eq(1)').removeClass('subnav_active')
        $('.reviews_nav i').removeClass('fa-angle-up').addClass('fa-angle-down')
    })

    //Sticky Menu Animation
    $(window).scroll(function(){
        if($(this).scrollTop()>150) {
            $('#navlogo').css({'width':'100px'})
        }
        else {
            $('#navlogo').css({'width':'0px'})
        }
    })
//SLICK CARAOUSEL
$('.single-item').slick({
    arrows: true,
    dots: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    autoplay: true,
    autoplaySpeed: 4000,
    // dotsClass: 'dots'
  });
$('.fa-bars').click(function(){
    $('.blackop').css({
        'opacity': '1',
        'z-index': '2',
    })
    $('body').css ({
        'overflow-y': 'hidden'
    })
    $('.sidepanel').css({
       'width': '250px' 
    })
});
$('.fa-times').click(function(){
    $('.blackop').css({
        'opacity': '0',
        'z-index': '0',
    })
    $('body').css ({
        'overflow-y': 'none'
    })
    $('.sidepanel').css({
       'width': '0px' 
    })
    
});
$('.blackop').click(function(){
    $('.blackop').css({
        'opacity': '0',
        'z-index': '0',
    })
    $('body').css ({
        'overflow-y': 'none'
    })
    $('.sidepanel').css({
       'width': '0px' 
    })
})
  });