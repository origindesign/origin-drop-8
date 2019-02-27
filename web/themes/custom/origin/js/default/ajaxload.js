(function ajaxLoadScript ($, Drupal) {

    Drupal.behaviors.ajaxListLoading = {};
    Drupal.behaviors.ajaxListLoading.xhr = null; // ajax call
    Drupal.behaviors.ajaxListLoading.ajaxContainer = '';
    Drupal.behaviors.ajaxListLoading.ajaxPath = '';
    Drupal.behaviors.ajaxListLoading.params = '';

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
        $('.pager.ajax a').off( "click" ).on( 'click', function(event){

            event.preventDefault();
            event.stopPropagation();

            let params = $(this).data('params');

            window.location.hash = $.trim("/paged="+params.paged);

        });

    };


    Drupal.behaviors.ajaxListLoading.updateParamsFromHash = function (){

        let _obj = Drupal.behaviors.ajaxListLoading;
        let hash = window.location.hash;

        // Split hash into array of values
        let hashArray = hash.substring(2).split('/');

        $.each(hashArray, function( index, value ) {
            // For each value split into key => value array
            let valueArray = value.split('=');
            // Add/override defaultParams object
            _obj.params[valueArray[0]] = valueArray[1];
        });

    };


    Drupal.behaviors.ajaxListLoading.displayList = function ( $container, $path, $params ){

        // Handle class for loading icon
        $container.html('').removeClass('loaded');

        Drupal.behaviors.ajaxListLoading.xhr = $.ajax({
            type: 'POST',
            url: $path+'?response_type=ajax',
            data: $params,
            success: function(result) {

                let wrapper = $( "<div/>", { 'class': 'wrapper'});
                wrapper.html(result);
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

    Drupal.behaviors.ajaxBlock = {};
    Drupal.behaviors.ajaxBlock.xhr = null; // ajax call
    Drupal.behaviors.ajaxBlock.attach = function (context) {

        $('body', context).once('ajaxBlock').each(function () {

            $(".ajax-block").each( function(){

                let $that = $(this);
                let $ajaxUrl = $that.data('ajax-url');
                let $uid = (new Date().getTime()).toString(36);
                let $newUrl = $ajaxUrl+"/"+$uid;
                $that.addClass('loading');

                Drupal.behaviors.ajaxBlock.xhr = $.ajax({
                    type: 'GET',
                    url: $newUrl,
                    success: function(response) {

                        $that.css("opacity", 0).removeClass('loading');
                        let $result = $(response).find('.ajax-block-container');
                        $that.html($result).css("opacity", 1);
                        Drupal.attachBehaviors();

                    }
                });


            });


        });

    };



}(jQuery, Drupal));