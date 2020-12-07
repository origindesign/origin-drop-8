(function globalScript ($, Drupal) {

    /**
     * GLOBAL
     * @type {{attach: attach}}
     */
    Drupal.behaviors.global = {};

    Drupal.behaviors.global.checkTables = function(){

        $('.node--view-mode-full .table-wrap').each( function() {

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

            // IOS 9 fix
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                let v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                let vArr = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];

                if (vArr[0] === 9) {
                    _obj.html.addClass('ios9');
                }

            }

            // PDF new window
            $('a[href*="pdf"]').attr('target','_blank');

            // Remove divs from inside heading tags
            $('h2,h3,h4,h5,h6').each( function(){
                let text = $(this).text();
                $(this).find('div').each( function(){
                    $(this).replaceWith('<span>'+text+'</span>');
                });
            });

            // Tables
            $('.node--view-mode-full table').wrap('<div class="table-wrap" />');
            $('.node--view-mode-full .table-wrap').each( function() {
                $(this).before('<span class="scroll-indicator">Scroll</span>');
            });
            Drupal.behaviors.global.checkTables();

            $(window).resize( function(){
                Drupal.behaviors.global.checkTables();
            });


        });

    };


})(jQuery, Drupal);
