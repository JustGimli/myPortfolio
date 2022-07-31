$(document).ready(function(){

    let a = false

    if($('meta').attr('name')=='article'){
        $('.navigator a:last-of-type').css('color', '#1c8784')
    }

    $('.add-articles').click(function(){
        if( a === false ){
            $('.add_article').animate({
                bottom: '1%'
            })
            a = true
        }else if( a === true){
            $('.add_article').animate({
                bottom: '-23%'
            })
            a = false
        }
        
    })
    
})