(function articlesScript($, Drupal) {

    'use strict';

    Drupal.behaviors.articles = {};
    Drupal.behaviors.articles.category = '';

    Drupal.behaviors.articles.attach = function (context) {

        $('.ajax-articles', context).once('articles').each(function () {

            let _obj = Drupal.behaviors.articles;
            let $ajaxLoad = Drupal.behaviors.ajaxListLoading;

            _obj.category = $( ".filterform .category" );

            //  Trigger the display of the list on filter change
            $(".filter-list").on("change", function() {
                _obj.reloadList();
            });

            // History handling
            window.onpopstate = function(event){

                let params = '';

                if(event.state !== null){
                    // Use data from history state
                    params = $.parseJSON(event.state.params);
                }else{
                    // Use defaults
                    params = Drupal.behaviors.ajaxListLoading.params;
                    _obj.category.val('all').blur().dropdown("update");
                }

                // Animate and reload list
                let top = $('.filter-ajax').offset().top-200;
                $('html, body').animate(
                    {scrollTop: top}, '500', function() {
                        $ajaxLoad.displayList($ajaxLoad.ajaxContainer, $ajaxLoad.ajaxPath, params);
                    }
                );

            };

        });

    };



    Drupal.behaviors.articles.reloadList = function(){

        let _obj = Drupal.behaviors.articles;
        let $ajaxLoad = Drupal.behaviors.ajaxListLoading;

        let params = '';
        let category = _obj.category.val();


        if(category !== 'all'){
            category = 'field_category--'+category.replace('.term-','');
        }

        params = '{"content_type":"article","category":"'+category+'","paged":"1-10--restricted-5","sort":"created-DESC"}';
console.log(params);

        // Abort any possible current ajax call
        $ajaxLoad.xhr.abort();

        // Trigger the display of the list
        $ajaxLoad.displayList($ajaxLoad.ajaxContainer, $ajaxLoad.ajaxPath, $.parseJSON(params));

        // Set history state
        window.history.pushState({params:params},null,window.location);

    };



}(jQuery, Drupal));