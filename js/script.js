$('.main-counter').counterUp({
    delay: 10,
    time: 4000
});


$('.top-scroll-btn').on("click",function(){
    $("html,body").animate({scrollTop:0}, 2000)
})

$(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    if(scroll >300){
        $(".top-scroll-btn").fadeIn(500)
    }else{
        $(".top-scroll-btn").fadeOut(500)
    }
})

$(window).scroll(function(){
    if( $(window).scrollTop() > 500){
        $("nav").addclass('navbar-bg')
    }
})




// $(document).ready(function(){
//     $('.sub-btn').click(function(){
//         $('.sub-i').toggle()
//     })
// })

$('.sub-i').click(function(){
    console.log("ok")
    $('.sub-i').css('margin-left','10px')
})