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

        // InView Animations
        $('.fade-in, '
            + '.fade-in-up')
            .one('inview', function (event, isInView) {
                let $this = $(this);
                if (isInView) {
                    $this.addClass('in-view');
                }
            });

    };


})(jQuery, Drupal);
