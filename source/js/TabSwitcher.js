$(document).ready(function () {
    TabSwitcher.events();
});

var TabSwitcher = {
    events: function () {
        $(document).on('click', '[tab-button]', TabSwitcher.activationCurrentTab);
    },
    activationCurrentTab: function () {
        TabSwitcher.toggleTab($(this));
        TabSwitcher.toggleContent($(this));
    },
    toggleTab: function (self) {
        $('[tab-button]').removeClass('active');
        self.addClass('active');
    },
    toggleContent: function (self) {
        var getElement = $('.tab-switcher__unit#' + self.data('id'));

        getElement.siblings('.tab-switcher__unit:visible').fadeOut(250, function () {
            getElement.fadeIn(250);
        });
    }
};
