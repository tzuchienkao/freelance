(function ($) {
    $(window).on('load', function(e){
        tabLink()
        function urlChange(type, e) {
            _target = $('body');
            _target.empty();
            if(history.pushState){
                switch (type) {
                    case 'booking': 
                        url = 'booking_record.html'
                        return new Promise(function(resolve, reject){
                            $.ajax(url, {
                                dataType: 'html'
                            }).done(function(result){
                                if(e.type == "click"){
                                    history.pushState({type: type}, document.title, url);
                                }
                                _target.append(result);
                            }).fail(function(reason){
                                reject(reason);
                            });
                        });
                        break;
                    case 'order': 
                        url = 'booking.html'
                        return new Promise(function(resolve, reject){
                            $.ajax(url, {
                                dataType: 'html'
                            }).done(function(result){
                                if(e.type == "click"){
                                    history.pushState({type: type}, document.title, url);
                                }
                                _target.append(result);
                            }).fail(function(reason){
                                reject(reason);
                            });
                        });
                        break;
                    case 'member': 
                        url = 'member.html'
                        return new Promise(function(resolve, reject){
                            $.ajax(url, {
                                dataType: 'html'
                            }).done(function(result){
                                if(e.type == "click"){
                                    history.pushState({type: type}, document.title, url);
                                }
                                _target.append(result);
                            }).fail(function(reason){
                                reject(reason);
                            });
                        });
                        break;
                    case 'setting': 
                        url = 'main_menu.html'
                        return new Promise(function(resolve, reject){
                            $.ajax(url, {
                                dataType: 'html'
                            }).done(function(result){
                                if(e.type == "click"){
                                    history.pushState({type: type}, document.title, url);
                                } else if (e.type == "load"){
                                    history.pushState({type: type}, document.title, url);
                                }
                                _target.append(result);
                            }).fail(function(reason){
                                reject(reason);
                            });
                        });
                        break;
                }
            }
        }
        function tabLink() {
            if(history.pushState){ 
                currentState = window.location.href;
                window.addEventListener('popstate', function(e){
                    _currentUrl = window.location.href;
                    if (currentState != _currentUrl) {
                        currentState = _currentUrl;
                        if(e.state != null){
                            type = e.state.type
                            urlChange(type, e)
                        } else {
                            type = 'setting'
                            urlChange(type, e)
                        }
                    }
                });
                $('body').on('click', '.main_nav_group li', function(e){
                    type = $(this).data('type');
                    urlChange(type, e)
                });
            }
        }
    })
})(jQuery)