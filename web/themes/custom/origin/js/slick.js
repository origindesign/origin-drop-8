(function slickScript ($, Drupal) {


    /**
     * SLICK SLIDESHOWS
     */
    Drupal.behaviors.slick = {};
    Drupal.behaviors.slick.attach = function () {

        $('body').once('slick').each(function () {

            $('.paragraph--type--media-slideshow').each(function(){

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
                            current.text(currentSlide + 1);
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
