$(document).ready(function(){

    let a = false

    $('.a_to_article').mouseenter(function(){
        
        let href = $(this).attr('href')
        let as1 = Number($($($(this).parents('div:first')).children('.views')).text())+1
        $.post('/views',{value:as1, href:href})
    })


    

    if($('meta').attr('name')=='article'){
        $('.navigator .a-navbar:last-of-type').css({'color': '#1c8784','text-decoration': 'underline'})
    }

    $('.tr-button').click(function(e){
        e.stopPropagation()
        alert('asd')
        $('.dl-form-main').animate({
            left: '20%'
        })

        $('.form dl:last-child').animate({
            left: '-150 %'

        })
        
        
        
        
    })
    $('.table tr:last-child').mouseup(function(e){
        e.stopPropagation()
        $('.form dl:first-child').animate({
            left:'-100%'
        })
        $('.form dl:last-child').animate({
            right:'9%',
            left:'0%'
        })

    })
    $('.add-articles').mousedown(function(e){
        e.stopPropagation()
        if( a === false ){
            if ($(window).width() <='900' ){
                $('.textarea-1').css({'right':'-150%', 'bottom':'1%', 'text-align':'center'})
                $('.dl-form-main').css('left','20%')
                $('.color-42').animate({
                    bottom: '1%'
                })  
                $(this).animate({
                    bottom: '33%'
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

            a = false
        }
        
    })
    
})