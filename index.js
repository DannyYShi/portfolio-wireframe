$("#logo").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 500);
});

$("#portfolio-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 500);
});

$("#about-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 500);
});