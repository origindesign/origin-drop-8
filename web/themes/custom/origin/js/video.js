(function videoScript ($, Drupal) {


    /**
     * MEDIA VIDEO
     *
     */
    Drupal.behaviors.mediaVideo = {
        attach: function(context) {

            $('.video-poster-frame', context).once('mediaVideo').each(function () {

                let $this = $(this);
                let $video = $this.find('.field--name-field-media-oembed-video').html();

                $this.find('.field--name-field-media-oembed-video').remove();

                $this.on('click', function(event) {

                    event.preventDefault();
                    $this.addClass('playing')
                        .append('<div class="field--name-field-media-oembed-video">' + $video + '</div>');

                    $('.video-poster-frame')
                        .not($this).removeClass('playing')
                        .find('.field--name-field-media-oembed-video')
                        .remove();

                });


            });

        },

    };



})(jQuery, Drupal);
