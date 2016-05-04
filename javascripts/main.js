$(document).ready(function () {
    //aside toggaling on responsive
    $(document).on('click', '.header .nav-toggle', function (e) {
        $('.aside-menu').toggleClass('open');
        $('body').toggleClass('aside-menu-open');
        e.stopPropagation();
        e.preventDefault();
    }).on('click', function (e) {
        if ($(e.target).closest('.aside-menu').hasClass('open')) { return; }
        $('.aside-menu.open').removeClass('open');
        $('body.aside-menu-open').removeClass('aside-menu-open');
    });
});