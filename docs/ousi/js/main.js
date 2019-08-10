(function ($) {
    $(document).ready(function(){
        var el = $('input[type=hidden]').val();
        openPage(el);
        queryUrl();
        breadcrumb();
        function openPage(el) {
            $('#' + el).on('click', 'a[data-' + el + ']', function(){
                url = el + '.html';
                query = $(this).data(el);
                index = $(this).parent('li').index();
                index = index + 1;
                $(this).attr('href', url + '?page=' + query + '_' + index);
            })
        }
        function getParameter (query_val) {
            query_val = query_val.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
            var regex = new RegExp('[\\?&]' + query_val + '=([^&#]*)')
            var results = regex.exec(location.search)
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
        }
        function queryUrl() {
            if(window.location.search.includes('page') === true) {
                page = getParameter('page')
                new Promise(function(resolve, reject){
                    $.ajax(
                        '../ousi/' + page + '.html', 
                        {
                            dataType: 'html'
                        }
                    ).done(function(result){
                        $('.section_container').append(result)
                    }).fail(function(reason){
                        $('.section_container').append(noData(reason.status));
                    })
                })
            }
        }
        function breadcrumb() {
            $('.breadcrumb').find('a[data-path]').after(`
                <i class="fas fa-angle-right"></i>
            `)
        }
        function noData(reason) {
            return `
            <div class="col_block" style="height: 100%; align-items: center; justify-content: center;">
                <p class="main_description" data-text="${reason}">尚無資料</p>
            </div>
            `
        }
    })
})(jQuery)