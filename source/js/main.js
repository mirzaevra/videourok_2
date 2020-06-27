$(document).ready(function () {

})

$(window).on('load', function () {
    Common.reviewsSlider()
})


$(window).on('resize', function () {

})

Common = {
    events: function () {

    },
    init: function () {
    },
    reviewsSlider: function () {
        $('#reviews-slider .owl-carousel').owlCarousel({
            items: 1,
            slideBy: 1,
            loop: true
        })
    }

}
