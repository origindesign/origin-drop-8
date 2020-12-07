(function formsScript ($, Drupal) {

    /**
     * GLOBAL
     * @type {{attach: attach}}
     */
    Drupal.behaviors.forms = {};
    Drupal.behaviors.forms.attach = function () {

        // Formstone
        $("input[type=checkbox], input[type=radio]").checkbox();
        $("select:not([class^='ui'])").dropdown();
        $('div.webform-document-file').removeAttr('id');
        $('.form-type-date input').attr('readonly','readonly');

    };


})(jQuery, Drupal);
