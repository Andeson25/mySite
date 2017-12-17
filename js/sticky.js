// (function ($) {
//     "use strict";
//
//     var $navbar = $("#navbar"),
//         y_pos = $navbar.offset().top,
//         height = $navbar.height();
//
//     $(document).scroll(function () {
//         var scrollTop = $(this).scrollTop();
//
//         if (scrollTop > y_pos + height) {
//             $navbar.addClass("navbar-fixed").animate({
//                 top: 0
//             });
//         } else if (scrollTop <= y_pos) {
//             $navbar.removeClass("navbar-fixed").clearQueue().animate({
//                 top: "-48px"
//             }, 0);
//         }
//     });
//
// })(jQuery, undefined);
$(document).ready(function() {
    //change the integers below to match the height of your upper dive, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.
    $(window).scroll(function () {

        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 800) {
            $('#navbar').addClass('navbar-fixed');
        }

        if ($(window).scrollTop() < 801) {
            $('#navbar').removeClass('navbar-fixed');
        }
    });
});