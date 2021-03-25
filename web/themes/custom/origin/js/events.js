(function eventsScript($, Drupal) {

    'use strict';

    Drupal.behaviors.events = {};
    Drupal.behaviors.events.from = '';
    Drupal.behaviors.events.to = '';
    Drupal.behaviors.events.category = '';

    Drupal.behaviors.events.attach = function (context) {

        $('.ajax-events', context).once('events').each(function () {

            let _obj = Drupal.behaviors.events;
            let $ajaxLoad = Drupal.behaviors.ajaxListLoading;

            _obj.from = $(".filterform .from-date");
            _obj.to = $(".filterform .to-date");
            _obj.category = $(".filterform .category");

            //  Trigger the display of the list on filter change
            $(".filter-list").on("change", function() {
                _obj.reloadList();
            });

            // Datepicker setup
            let noMonths = 2;
            if(Drupal.behaviors.resizer.isMobile){
                noMonths = 1;
            }
            _obj.from.datepicker({
                dateFormat: "M d, yy",
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                changeMonth: true,
                changeYear: true,
                showAnim: "fadeIn",
                yearRange: "c:c+1",
                numberOfMonths: noMonths,
                onSelect: function(selectedDate) {
                    _obj.to.datepicker("option", "minDate", selectedDate);
                    $(this).change();
                }
            });
            _obj.to.datepicker({
                dateFormat: "M d, yy",
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                changeMonth: true,
                changeYear: true,
                showAnim: "fadeIn",
                yearRange: "c:c+1",
                numberOfMonths: noMonths
            });

            // History handling
            window.onpopstate = function(event){

                let params = '';

                if(event.state !== null){
                    // Use data from history state
                    params = $.parseJSON(event.state.params);
                }else{
                    // Use defaults
                    params = Drupal.behaviors.ajaxListLoading.params;
                    _obj.category.val('all').blur().dropdown("update");
                }

                // Animate and reload list
                let top = $('.filter-ajax').offset().top - 200;
                $('html, body').animate(
                    { scrollTop: top }, '500', function() {
                        $ajaxLoad.displayList($ajaxLoad.ajaxContainer, $ajaxLoad.ajaxPath, params);
                    }
                );

            };

        });

    };



    Drupal.behaviors.events.reloadList = function(){

        let _obj = Drupal.behaviors.events;
        let $ajaxLoad = Drupal.behaviors.ajaxListLoading;

        let params = '';
        let from = Date.parse(_obj.from.val()).toString('yyyy-MM-dd');
        let to = Date.parse(_obj.to.val()).toString('yyyy-MM-dd');
        let category = _obj.category.val();


        if(category !== 'all'){
            category = 'field_category--' + category.replace('.term-','');
        }

        params = '{"content_type":"event","category":"' + category + '","date":"field_date_range--' + from + ',' + to + '","sort":"field_date_range-ASC"}';

        // Abort any possible current ajax call
        $ajaxLoad.xhr.abort();

        // Trigger the display of the list
        $ajaxLoad.displayList($ajaxLoad.ajaxContainer, $ajaxLoad.ajaxPath, $.parseJSON(params));

        // Set history state
        window.history.pushState({ params: params }, null, window.location);

    };



}(jQuery, Drupal));
