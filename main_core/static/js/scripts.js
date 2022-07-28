$(document).ready(function(){
    

    var profile = $( ".profile" ).offset()
    var experiense = $( ".experiense" ).offset()
    var abilities = $( ".abilities" ).offset()
    var Contact = $( "#Contact" ).offset()


    $('nav li[href^="#"]').click(function(){
        // ${this}.css
        var scroll_el = $(this).attr('href');
        var destination = $(scroll_el).offset().top - 60;
        if ($(scroll_el).length != 0){
            $('html, body').animate({
                scrollTop: destination
            },400 );
           
        }
        return false;
    });


    $(window).scroll(function(){

        var scr = $(this).scrollTop()

        

        if(profile.top <= scr && scr <= experiense.top){
            $('nav li').css('background-color', '#222222')
            $('nav li[href="#profile"]').css('background-color', 'rgb(5, 182, 252)')

        } else if(experiense.top <= scr && scr <= abilities.top){
            $('nav li').css('background-color', '#222222')
            $('nav li[href="#experienses"]').css('background-color', 'rgb(5, 182, 252)')

        } else if(abilities.top <= scr && scr <= Contact.top){
            $('nav li').css('background-color', '#222222')
            $('nav li[href="#Abilities"]').css('background-color', 'rgb(5, 182, 252)')

        } else if(scr > Contact.top){
            $('nav li').css('background-color', '#222222')
            $('nav li[href="#Contact"]').css('background-color', 'rgb(5, 182, 252)')
        }

        if (scr < $('.profile').offset().top){
            $('nav').css({'position':'absolute', 'top':'110%'})
        }

        if (scr > $('.profile-h1').offset().top){
            $('nav').css({'position':'fixed', 'top':'10%'})
        }
    })
    

});
