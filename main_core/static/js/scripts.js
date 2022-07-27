$(document).ready(function(){


    $('nav a[href^="#"]').click(function(){
        var scroll_el = $(this).attr('href');
        var destination = $(scroll_el).offset().top - 60;
        if ($(scroll_el).length != 0){
            console.log(destination+60)
            $('html, body').animate({
                scrollTop: destination
            },400 );
           
        }
        return false;
    });


    // var profile = $( ".profile-h1" ).offset()
    // var experiense = $( ".experiense" ).offset()
    // var abilities = $( ".abilities" ).offset()
    // var Contact = $( "#Contact" ).offset()
    // if (profile < $('html').offset() < experiense) {
    //     $('nav li[href="#profile"]').css('backgroun-color', 'blue')
    //     alert('[eq')
    // }
});
