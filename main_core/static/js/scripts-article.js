$(document).ready(function(){

    $('.a_to_article').mouseenter(function(){
        
        let href = $(this).attr('href')
        let as1 = Number($($($(this).parents('div:first')).children('.views')).text())+1
        $.post('/views',{value:as1, href:href})
    })


    let a = false

    if($('meta').attr('name')=='article'){
        $('.navigator .a-navbar:last-of-type').css({'color': '#1c8784','text-decoration': 'underline'})
    }

    

    $('.add-articles').click(function(){
        if( a === false ){
            if ($(window).width() <='900' ){
                $('.textarea-1').css('display','none')
                $('.dl-form-main').css('left','20%')
                $('.color-42').animate({
                    bottom: '1%'
                })  
                $(this).animate({
                    bottom: '33 %'
                })
            }else if($(window).width() <= '1400' ){
                $('.color-42').animate({
                    bottom: '1%'
                })  
                $(this).animate({
                    bottom: '38%'
                })
            }else if($(window).width() <= '1700'){
                $('.color-42').animate({
                    bottom: '1%'
                })  
                $(this).animate({
                    bottom: '40%'
                })
            }else if($(window).width() <= '2000'){
                $('.color-42').animate({
                    bottom: '1%'
                })  
                $(this).animate({
                    bottom: '39%'
                    
                })
            }else{
                $('.color-42').animate({
                    bottom: '1%'
                })  
                $(this).animate({
                    bottom: '43%'})
            }

            a = true
        }else if( a === true){
            $('.color-42').animate({
                bottom: '-50%'
            })
            $(this).animate({
                bottom: '3%'
            })
            a = true
            a = false
        }
        
    })
    
})