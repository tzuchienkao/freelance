(function ($) {
    $(document).ready(function(){
        search_tabs();
        filter_tabs();
        // 條件(下拉選單)
        function filter_tabs() {
            amount = $('.select_option_block').find('.content_box').length;
            for(var i = 0; i < amount; i++){
                $('.content_box').eq(i).on('click', '> input[type=checkbox]', function(){
                    $('.content_box').find('.opt_choice').hide();
                    if($(this).prop('checked') == true) {
                        $('.content_box').find('input').prop('checked', false);
                        $(this).siblings('.opt_choice').show();
                        $(this).prop('checked', true)
                    } else {
                        $('.content_box').find('.opt_choice').hide();
                    }
                });
            }
        }
        // 搜尋(下拉選單)
        function search_tabs() {
            amount = $('.search_navbar').find('.content_box').length;
            for(var i = 0; i < amount; i++){
                $('.content_box').eq(i).on('click', 'input[type=checkbox]', function(){
                    $('.content_box').find('.search_tool_content').hide();
                    if($(this).prop('checked') == true) {
                        $('.content_box').find('input').prop('checked', false);
                        $(this).siblings('.search_tool_content').show();
                        $(this).prop('checked', true)
                    } else {
                        $('.content_box').find('.search_tool_content').hide();
                    }
                });
            }
        }
    })
})(jQuery)