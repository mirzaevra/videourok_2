var Slider = function (settings) {
    this.instance = null
    this.container = null
    this.settings = $.extend({
        items: 1,
        slideBy: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000
    }, settings || {})
}

Slider.prototype.init = function (selector) {
    this.container = selector
    this.instance = selector.find('.owl-carousel')
    this.instance.owlCarousel(this.settings)
    this.events()
}
Slider.prototype.destroy = function () {
    this.instance.owlCarousel('destroy')
}
Slider.prototype.events = function () {
    var self = this
    var container = this.container

    container.on('click', '[data-move="prev"]', function () {
        self.instance.trigger('prev.owl.carousel')
    })
    container.on('click', '[data-move="next"]', function () {
        self.instance.trigger('next.owl.carousel')
    })
}
