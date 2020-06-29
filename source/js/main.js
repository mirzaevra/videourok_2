$(document).ready(function () {
    $(window).on('scroll', function () {
        Common.parallaxEffect(this)
        Common.floatTitle(this)
    })
})

$(window).on('load', function () {
    Common.reviewsSlider()
})

const Common = {
    reviewsSlider() {
        const reviewsSlider = new Slider({
            items: 1,
            slideBy: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    autoHeight: true
                },
                1024: {
                    autoHeight: false
                }
            }
        })
        reviewsSlider.init($('#reviews-slider'))
    },
    parallaxEffect(self) {
        if ($('#possibility').height() + 100 > self.pageYOffset) {
            var paralaxSpeed = .2
            var offset = self.pageYOffset * paralaxSpeed
            var paralaxElem = $('#possibility-img')
            paralaxElem.css({
                'transform': `translate3d(0,${offset}px,0)`
            })
        }
    },
    floatTitle(self) {
        if ($(window).width() <= 767) {
            const parent = $('.tools')
            const floatTtile = $('[data-float="title"]')
            const parentTopPositon = parent.offset().top + floatTtile.height() * 1.3
            const parentBottomPositon = parentTopPositon + parent.height() - floatTtile.height() * 3

            if (self.pageYOffset >= parentTopPositon && self.pageYOffset <= parentBottomPositon) {
                floatTtile.fadeIn()
            } else {
                floatTtile.fadeOut()
            }
        }
    }
}
