$(document).ready(function(){

    $('.a_to_article').mouseenter(function(){
        
        let href = $(this).attr('href')
        let as1 = Number($($($(this).parents('div:first')).children('.views')).text())+1
        $.post('/views',{value:as1, href:href})
    })


    let a = false

    if($('meta').attr('name')=='article'){
        $('.navigator a:last-of-type').css({'color': '#1c8784','text-decoration': 'underline'})
    }

    $('.add-articles').click(function(){
        if( a === false ){
            $('.add_article').animate({
                bottom: '1%'
            })
            a = true
        }else if( a === true){
            $('.add_article').animate({
                bottom: '-35%'
            })
            a = false
        }
        
    })
    
})