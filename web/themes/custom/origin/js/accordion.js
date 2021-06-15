(function accordionScript($, Drupal) {

    /**
     * Accordion List
     */
    Drupal.behaviors.accordion = {
        attach: function () {

            $('.accordion').once('accordion').each(function () {

                let buttons = $(this).find('.accordion-heading button');

                buttons.on('click', function () {

                    let $this = $(this);

                    if ($this.attr('aria-expanded') === 'true') {
                        $this
                            .attr('aria-expanded', 'false')
                            .parent().next().slideUp(300).attr('aria-hidden', 'true');
                    } else {
                        $this.attr('aria-expanded', 'true')
                            .parent().next().slideDown(300).attr('aria-hidden', 'false');
                    }

                });

            });

        },
    };


})(jQuery, Drupal);
