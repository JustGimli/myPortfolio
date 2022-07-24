$(document).ready(function(){
    $('nav a[href^="#"]').click(function(){
        var scroll_el = $(this).attr('href');
        var destination = $(scroll_el).offset().top;
        if ($(scroll_el).length != 0){
            $('html, body').animate({
                scrollTop: destination
            },400);
        }
        return false;
    });

});
