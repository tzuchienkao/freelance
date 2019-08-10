(function ($) {
    $(window).on('load', function(){
        headerTop()
    })
    $(window).on('resize', function(){
        headerTop()
    })
    function headerTop(){
        topH = $('.nav_headbar').innerHeight()
        toolH = $('.chat_tool').innerHeight()
        bottomH = $('footer').innerHeight()
        $('section').css({
            'padding-top' : topH,
            'padding-bottom' : bottomH
        })
        $('.main_wrap').css({
            'padding-bottom' : toolH
        })
    }
})(jQuery)