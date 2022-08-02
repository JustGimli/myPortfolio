$(document).ready(function(){

    if($('meta').attr('name')=='main'){
        $('.navigator .a-navbar:first-child').css({'color': '#1c8784','text-decoration': 'underline'})
    }


    $(window).resize(function(){

        if ($(window).width() <= '800'){
            null
        }else if ($(window).width() >= '800'){

            var experiense = $( ".experiense" ).offset()
            var abilities = $( ".abilities" ).offset()
            var Contact = $( "#Contact" ).offset()
        
            $('.main-na li[href^="#"]').click(function(){
                var scroll_el = $(this).attr('href');
                var destination = $(scroll_el).offset().top +30;
                if ($(scroll_el).length != 0){
                    $('html, body').animate({
                        scrollTop: destination
                    },400 );
                
                }
                return false;
            });
        
            var a = $('.stars').parents('tr')
            a.mouseenter(function(){
                $($(this).find('td')).css('color', '#22A39F')
                $($(this).find('img')).css({'transform': 'scale(1.1)', 'transition': 'all 0.3s ease-in-out'})
            })
        
            a.mouseleave(function(){
                $($(this).find('td')).css('color', 'grey')
                $($(this).find('img')).css({'transform': 'scale(1)', 'transition': 'all 0.2s ease-in-out'})
            })
            

            $(window).scroll(function(){
        
                var scr = $(this).scrollTop()
        
                if(scr <= experiense.top-60){
                    $('.main-na li').css('background-color', '#222222')
                    $('.main-na li[href="#profile"]').css('background-color', '#22A39F')
        
                } else if(experiense.top-30 <= scr && scr <= abilities.top-30){
                    $('.main-na li').css('background-color', '#222222')
                    $('.main-na li[href="#experienses"]').css('background-color', '#22A39F')
        
                } else if(abilities.top-30 <= scr && scr <= Contact.top-220){
                    $('.main-na li').css('background-color', '#222222')
                    $('.main-na li[href="#Abilities"]').css('background-color', '#22A39F')
        
                } else if(scr >= Contact.top-220){
                    $('.main-na li').css('background-color', '#222222')
                    $('.main-na li[href="#Contact"]').css('background-color', '#22A39F')
                }
        
                if (scr-150 < $('.profile').offset().top){
                    $('.main-na').css({'position':'absolute', 'top':'100%'})
                }
        
                if (scr+150 > $('.profile-h1').offset().top){
                    $('.main-na').css({'position':'fixed', 'top':'10%'})
                }
        
                
            })
        }
    })

    

});
