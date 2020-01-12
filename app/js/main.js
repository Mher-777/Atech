$(function () {
    $('.professional-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="professional-arrows arrows-right"></button>',
        nextArrow: '<button class="professional-arrows arrows-left"></button>',
        autoplay: true,
    });
    $('.researches__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        centerMode: true,
        centerPadding: '80px'
    });
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        // fade: true,
        dots: true,
        dotsClass: 'reviews-dots',
        vertical: true,
        verticalSwiping: true,
    })
})