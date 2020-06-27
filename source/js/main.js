$(window).on('load', function () {
    var coursSlider = new Slider({
        items: 1,
        slideBy: 1,
        loop: true,
        // autoplay: true,
        // autoplayTimeout: 10000
    })
    coursSlider.init($('#reviews-slider'))
})
