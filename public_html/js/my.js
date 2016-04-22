/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function() {


    $(".fancybox").attr('rel', 'gallery').fancybox();

    $('a[rel="relativeanchor"]').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 65
        }, 500);
        return false;
    });
    $(".marketing-nav__hamburger").click(function() {

        $("#NavDrawer").fadeIn(1000);
        $(".drawer__items>li").css({"opacity": "1"});
        $(".icon-close").css({"transform": "translateX(0px)"});

    });
    $(".icon-close,.drawer__items  li a").click(function() {
        $("#NavDrawer").fadeOut();
        $(".drawer__items>li").css({"opacity": "0"});
        $(".icon-close").css({"transform": "translateX(100px)"});
    });

    wow = new WOW(
            {
                animateClass: 'animated',
                offset: 100,
                callback: function(box) {

                }
            }
    );
    wow.init();
 

});


   setTimeout(function() {

        $(".site_content").css({"opacity": "1"});
        $(".pre-loder").hide();
        $("body").css({"background": "#F2F2F0"});

    }, 1000);

