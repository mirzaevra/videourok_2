$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($('#possibility').height() + 100 > this.pageYOffset) {
            var paralaxSpeed = .2
            var offset = this.pageYOffset * paralaxSpeed
            var paralaxElem = $('#possibility-img')
            paralaxElem.css({
                'transform': `translate3d(0,${offset}px,0)`
            })
        }
    })
});

$(window).on('load', function () {
    const coursSlider = new Slider({
        items: 1,
        slideBy: 1,
        loop: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 10000
    })
    coursSlider.init($('#reviews-slider'))
});
