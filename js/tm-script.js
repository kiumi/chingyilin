function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* Owl Carousel*/
// ;(function ($) {
//     var o = $('.owl-carousel1');
//     if (o.length > 0) {
//         include('js/owl.carousel.min.js');
//         $(document).ready(function () {
//             o.owlCarousel({
//                 margin: 0,
//                 smartSpeed: 450,
//                 loop: true,
//                 dots: true,
//                 dotsEach: 1,
//                 nav: false,
//                 items:1,
//                 animateOut: 'fadeOut',
//                 autoplay:true,
// 				autoplayTimeout:3000,
// 				//autoplayHoverPause:true,
//                 navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
//                 responsive: {
//                     0: { dots:false},
//                     769:{dots:true}
//                 }
//             });
//         });
//     }
// })(jQuery);

/*toTop*/
$(document).ready(function(){
        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    });
/*navsticky*/
;(function ($) { 
    include('js/jquery.sticky.min.js'); 
})(jQuery);
if ($(window).width() > 1000) {
    $(document).ready(function(){
    $("#navigation").sticky({topSpacing:0});
    $('a.external').click(function(){
    var url = $(this).attr('href');
    $('.mask').fadeIn(250, function(){
    document.location.href = url;
    });
    $("#loader").fadeIn("slow");
    return false;
    });
    
    });
    }
/*page-scroll*/
$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -80
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});




/*page-scroll*/
// $('.page-scroll').bind('click', function(event) {
//     var $anchor = $(this);
//     $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top -80
//     }, 1500, 'easeInOutExpo');
//     event.preventDefault();
// });
/* smoothscroll*/ 
;(function ($) { 
    include('js/smoothscroll.min.js'); 
})(jQuery);

/* easing*/ 
;(function ($) { 
    include('js/jquery.easing.min.js'); 
})(jQuery);
/* Parallax */ 
;(function ($) { 
    include('js/jquery.rd-parallax.js'); 
})(jQuery);


/*signbox*/
;(function ($) {
    $(".signupbtn").click(function(event) {
        $(".signbox").css({
           display: 'none'
        });
 
        $(".signup").css({
            display: 'block'
        });
    });
     $(".signinbtn").click(function(event) {
        $(".signbox").css({
           display: 'none'
        });
 
        $(".signin").css({
            display: 'block'
        });
    });
      $(".forgetbtn").click(function(event) {
        $(".signbox").css({
           display: 'none'
        });
 
        $(".forget").css({
            display: 'block'
        });
    });

 })(jQuery);

/*record*/ 
;(function ($) {
    $("#record").click(function(event) {
        $(".record-body").slideToggle("200");
        $("#record i").toggle("200");
         
    });



    var o = $('.accordion');
    if (o.length > 0) {
        
        include('js/jquery.ui.accordion.min.js');

        $(document).ready(function () {
            o.accordion({
                active: false,
                header: '.accordion_header',
                heightStyle: 'content',
                collapsible: true
            });
        });
    }

    
 })(jQuery);

