(function smallPipeScript ($, Drupal) {

    Drupal.behaviors.smallPipe = {};
    Drupal.behaviors.smallPipe.xhr = null; // ajax call
    Drupal.behaviors.smallPipe.attach = function (context) {

        $('body', context).once('smallPipe').each(function () {

            $(".ajax-block").each( function(){

                let $that = $(this);
                let $ajaxUrl = $that.data('ajax-url');
                let $uid = (new Date().getTime()).toString(36);
                let $newUrl = $ajaxUrl+"/"+$uid;
                $that.addClass('loading');

                Drupal.behaviors.smallPipe.xhr = $.ajax({
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