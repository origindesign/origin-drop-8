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

            // Set the default Filters Value from hash if exists
            if(window.location.hash !== ''){
                let defaultHash = window.location.hash.substring(1);
                $obj.updateFilters(defaultHash);
            }

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
                dateFormat: "yy-mm-dd",
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
                dateFormat: "yy-mm-dd",
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
                    $obj.updateFilters(params);
                }else{
                    // Use defaults
                    params = Drupal.behaviors.ajaxListLoading.params;
                    $obj.updateFilters(params);
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

        // console.log($obj.to.val())

        let from = Date.parse($obj.from.val()).toString('yyyy-MM-dd');
        let to = Date.parse($obj.to.val()).toString('yyyy-MM-dd');
        let category = $obj.categories.val();

        if(category !== 'all'){
            category = 'field_categories--'+category.replace('.term-','');
        }

        // Params string
        let params = '{"content_type":"event","category":"'+category+'","date":"field_date_range--'+from+','+to+'","sort":"field_date_range-ASC"}';

        // Abort any possible current ajax call
        $ajaxLoad.xhr.abort();

        console.log(params);

        // Trigger the display of the list
        $ajaxLoad.displayList($ajaxLoad.ajaxContainer, $ajaxLoad.ajaxPath, $.parseJSON(params));

        // Set history state
        window.history.pushState({params:params},null,window.location);

    };


    Drupal.behaviors.events.updateFilters = function (params){

        let $obj = Drupal.behaviors.events;

        // Get values from params
        let date = params.date.replace('field_date_range--','').split(',');
        let category;

        if(params.category !== 'all'){
            category = '.term-'+params.category.replace('field_categories--','');
        }else{
            category = 'all';
        }

        let from = date[0].split('-');
        let to = date[1].split('-');

        // Updates Filters Value on Page
        $obj.from.val(Date.parse(from[1]+'-'+from[0]+'-'+from[2]).toString('Y-m-d'));
        $obj.to.val(Date.parse(to[1]+'-'+to[0]+'-'+to[2]).toString('Y-m-d'));
        $obj.categories.val(category).blur().dropdown("update");

    }



}(jQuery, Drupal));