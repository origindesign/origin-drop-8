(function globalScript ($, Drupal) {

    /**
     * GLOBAL
     * @type {{attach: attach}}
     */
    Drupal.behaviors.global = {};

    Drupal.behaviors.global.checkTables = function(){

        $('.node--view-mode-full .table-wrap').each(function() {

            let wrap = $(this);
            let indicator = wrap.prev('.scroll-indicator');

            if($(this).find('table').width() > wrap.width()){
                wrap.addClass('scroll');
                indicator.show();
            }else{
                wrap.removeClass('scroll');
                indicator.hide();
            }

        });

    };

    Drupal.behaviors.global.attach = function () {

        // Global call only triggered once
        $('body').once('global').each(function () {

            let _obj = Drupal.behaviors.global;

            // Tables
            $('.node--view-mode-full table').wrap('<div class="table-wrap" />');
            $('.node--view-mode-full .table-wrap').each(function() {
                $(this).before('<span class="scroll-indicator">Scroll</span>');
            });
            Drupal.behaviors.global.checkTables();

            $(window).resize(function(){
                Drupal.behaviors.global.checkTables();
            });


        });

    };


})(jQuery, Drupal);
