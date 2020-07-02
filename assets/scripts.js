$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(".scroll-to-div").click(function(e) {
    e.preventDefault();
    var target = $(this).data('target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 300);
});

$(".project-details-toggle").click(function (e) {
    e.preventDefault();
    var target = $(this).data('target');
    $(target).css("z-index", "1");
    $(target).animate({width:'100%'}, 200);
});

$(".project-details-close").click(function (e) {
    e.preventDefault();
    var target = $(this).closest(".project-details");
    target.animate({width: '0'}, 200, 'swing', function () {
        target.css("z-index", "-1");
    });
});