$(document).ready(function(){
    $('.header-slider_items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        easing: 'ease',
        // autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.expert-items').slick({
       dots: true,
       slidesToShow: 5,
       slidesToScroll: 3,
       speed: 700,
       easing: 'ease',
    //    autoplay: true,
       autoplaySpeed: 3000,
    });
    $('.interior-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        easing: 'ease',
        // autoplay: true,
        autoplaySpeed: 3000,
     });
 });