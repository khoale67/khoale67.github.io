$(function () {
    vitricuaedu = $('#khoiedu').offset().top;

    $(".xuong, .kn").click(function () {
        $('body, html').animate({ scrollTop: vitricuaedu});
        return false;
    });

    vitrikhoisp = $('#khoisp').offset().top;
    $(".sp").click(function () {
        $('body, html').animate({ scrollTop: vitrikhoisp});
        return false;
    });

})