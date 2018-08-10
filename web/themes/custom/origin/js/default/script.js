(function globalScript ($, Drupal) {

    /**
     * GLOBAL
     * @type {{attach: attach}}
     */
    Drupal.behaviors.global = {
        attach: function attach(context) {

            $('.layout-container', context).once('global').each(function () {

                console.log('Page Loaded');

            });

            // Formstone
            $("input[type=checkbox], input[type=radio]").checkbox();
            $("select").dropdown();

        }
    };

})(jQuery, Drupal);
