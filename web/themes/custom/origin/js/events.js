(function eventsScript($, Drupal) {

    'use strict';

    Drupal.behaviors.events = {};
    Drupal.behaviors.events.from = '';
    Drupal.behaviors.events.to = '';
    Drupal.behaviors.events.categories = '';

    Drupal.behaviors.events.attach = function (context) {

        $('.ajax-events', context).once('events').each(function () {

            let $obj = Drupal.behaviors.events;
            let $ajaxLoad = Drupal.behaviors.ajaxListLoading;

            $obj.from = $( ".filterform .from-date" );
            $obj.to = $( ".filterform .to-date" );
            $obj.categories = $( ".filterform .categories" );

            //  Trigger the display of the list on filter change
            $(".filter-list").on("change", function() {
                $obj.reloadList();
            });

            // Datepicker setup
            let noMonths = 2;
            if(Drupal.behaviors.resizer.isMobile){
                noMonths = 1;
            }
            $obj.from.datepicker({
                dateFormat: "M d, yy",
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                changeMonth: true,
                changeYear: true,
                showAnim: "fadeIn",
                yearRange: "c:c+1",
                numberOfMonths: noMonths,
                onSelect: function( selectedDate ) {
                    $obj.to.datepicker( "option", "minDate", selectedDate );
                    $(this).change();
                }
            });
            $obj.to.datepicker({
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
                    $obj.categories.val('all').blur().dropdown("update");
                }

                // Animate and reload list
                let top = $('.filter-ajax').offset().top-200;
                $('html, body').animate(
                    {scrollTop: top}, '500', function() {
                        $ajaxLoad.displayList($ajaxLoad.ajaxContainer, $ajaxLoad.ajaxPath, params);
                    }
                );

            };

        });

    };



    Drupal.behaviors.events.reloadList = function(){

        let $obj = Drupal.behaviors.events;
        let $ajaxLoad = Drupal.behaviors.ajaxListLoading;

        let params = '';
        let from = Date.parse($obj.from.val()).toString('yyyy-MM-dd');
        let to = Date.parse($obj.to.val()).toString('yyyy-MM-dd');
        let category = $obj.categories.val();


        if(category !== 'all'){
            category = 'field_categories--'+category.replace('.term-','');
        }

        params = '{"content_type":"event","category":"'+category+'","date":"field_date_range--'+from+','+to+'","sort":"field_date_range-ASC"}';


        // Abort any possible current ajax call
        $ajaxLoad.xhr.abort();

        // Trigger the display of the list
        $ajaxLoad.displayList($ajaxLoad.ajaxContainer, $ajaxLoad.ajaxPath, $.parseJSON(params));

        // Set history state
        window.history.pushState({params:params},null,window.location);

    };



}(jQuery, Drupal));