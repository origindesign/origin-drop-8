(function ajaxLoadScript ($, Drupal) {

    Drupal.behaviors.ajaxListLoading = {};
    Drupal.behaviors.ajaxListLoading.xhr = null; // ajax call
    Drupal.behaviors.ajaxListLoading.ajaxContainer = '';
    Drupal.behaviors.ajaxListLoading.ajaxPath = '';
    Drupal.behaviors.ajaxListLoading.params = '';
    Drupal.behaviors.ajaxListLoading.filterForm = $('.filterform');
    Drupal.behaviors.ajaxListLoading.category = $(".filterform .category");

    Drupal.behaviors.ajaxListLoading.attach = function (context) {

        let _obj = Drupal.behaviors.ajaxListLoading;

        $('.ajax-list-container', context).once('ajaxListLoading').each(function () {

            _obj.ajaxContainer = $(this);
            _obj.ajaxPath = _obj.ajaxContainer.attr('data-ajax-path');
            _obj.params = _obj.ajaxContainer.data('default-params');

            // If hash has been provided, update params
            if(window.location.hash !== ''){
                _obj.updateParamsFromHash();
            }

            // Display list
            _obj.displayList(_obj.ajaxContainer, _obj.ajaxPath, _obj.params);

            // On hash change, update params, reload list
            $(window).off('hashchange.form-fragment').on('hashchange', function() {
                _obj.updateParamsFromHash();
                _obj.displayList(_obj.ajaxContainer, _obj.ajaxPath, _obj.params);
            });


        });

        // Ajax pager links
        $('.pager.ajax a').off("click").on('click', function(event){

            event.preventDefault();
            event.stopPropagation();

            let params = $(this).data('params');
            let top = _obj.getTopPosition($('.ajax-list-container'));

            if(_obj.category.length > 0){
                let category = _obj.category.val();
                if(category.indexOf('all') === -1){
                    params.category = 'field_category--' + category.replace('.term-', '');
                }
            }

            // Abort any possible current ajax call
            _obj.xhr.abort();

            // Set history state
            window.history.pushState({ params: JSON.stringify(params) }, null, window.location);

            // Get top of filters if present
            if(_obj.filterForm.length > 0){
                top = _obj.getTopPosition(_obj.filterForm);
            }

            // Animate to position
            $("html,body").animate(
                { scrollTop: top }, '500'
            );

            // Fade out wrapper
            $('.ajax-list-container .wrapper').fadeOut(function(){
                // Trigger the display of the list
                _obj.displayList(_obj.ajaxContainer, _obj.ajaxPath, params);
            });


            /*
            $('.ajax-list-container .wrapper').fadeOut( function(){
                window.location.hash = $.trim("/category="+params.category+"/paged="+params.paged);
            });
            */

        });

    };


    Drupal.behaviors.ajaxListLoading.updateParamsFromHash = function (){

        let _obj = Drupal.behaviors.ajaxListLoading;
        let hash = window.location.hash;

        // Split hash into array of values
        let hashArray = hash.substring(2).split('/');

        $.each(hashArray, function(index, value) {
            // For each value split into key => value array
            let valueArray = value.split('=');
            // Add/override defaultParams object
            _obj.params[valueArray[0]] = valueArray[1];
        });

    };


    Drupal.behaviors.ajaxListLoading.updateFilters = function (params){

        let _obj = Drupal.behaviors.ajaxListLoading;

        // Handle date if exists
        let fromSelect = $(".filterform .from-date");
        let toSelect = $(".filterform .to-date");

        if(fromSelect.length > 0 && toSelect.length > 0){
            let date = params.date.replace('field_date_range--', '').split(',');
            let from = date[0].split('-');
            let to = date[1].split('-');

            // Updates Filters Value on Page
            fromSelect.val(Date.parse(from[1] + '-' + from[0] + '-' + from[2]).toString('MMM d, yyyy'));
            toSelect.val(Date.parse(to[1] + '-' + to[0] + '-' + to[2]).toString('MMM d, yyyy'));
        }


        // Handle category if exists
        if(_obj.category.length > 0){
            let category;

            if(params.category !== 'all'){
                category = '.term-' + params.category.replace('field_category--', '');
            }else{
                category = 'all';
            }

            // Updates Filters Value on Page
            _obj.category.val(category).blur().dropdown("update");
        }


    };


    Drupal.behaviors.ajaxListLoading.displayList = function ($container, $path, $params){

        let _obj = Drupal.behaviors.ajaxListLoading;

        // Handle class for loading icon
        $container.html('').removeClass('loaded');

        // Update Filters
        _obj.updateFilters($params);

        _obj.xhr = $.ajax({
            type: 'POST',
            url: $path + '?response_type=ajax',
            data: $params,
            success: function(result) {

                let html = $(result).find('#block-origin-content').html();
                let wrapper = $("<div/>", {'class': 'wrapper' });
                wrapper.html('<div class="block block-system block-system-main-block">' + html + '</div>');
                $container.html(wrapper);
                $container.addClass('loaded');
                Drupal.attachBehaviors();

                /*
                console.log($path+'?response_type=ajax');
                console.log($params);
                console.log(result);
                */


            }
        });

    };



    Drupal.behaviors.ajaxListLoading.getTopPosition = function($elem){

        return $elem.offset().top - 100;
    };



}(jQuery, Drupal));
