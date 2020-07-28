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

        // Formstone
        $("input[type=checkbox], input[type=radio]").checkbox();
        $("select:not([class^='ui'])").dropdown();
        $('div.webform-document-file').removeAttr('id');
        $('.form-type-date input').attr('readonly','readonly');

    };



    /**
     * SLICK SLIDESHOWS
     */
    Drupal.behaviors.slick = {};
    Drupal.behaviors.slick.attach = function () {

        $('body').once('slick').each(function () {

            $('.paragraph--type--media-slideshow').each( function(){

                let $this = $(this);
                let slider = $this.find('.field--name-field-medias');

                if(slider.find('> .slides-wrap').length > 0){

                    let total = slider.find('.slick-count .total');
                    let current = slider.find('.slick-count .current');
                    let slidesWrap = slider.find('.slides-wrap');

                    slidesWrap
                        .on('init', function (event, slick) {
                            total.text(slick.slideCount);
                        })
                        .on('afterChange', function(event, slick, currentSlide){
                            current.text(currentSlide+1);
                        })
                        .slick({
                            adaptiveHeight: true,
                            appendArrows: slider.find('.slick-arrows'),
                            dots: false,
                            arrows: true
                        });

                    // Remove focus when click arrows
                    $('.slick-arrow').on('click', function(){
                        $(this).blur();
                    });
                }

            });

        });

    };


})(jQuery, Drupal);
