(function resizerScript($, Drupal) {

    'use strict';

    // Windows Resize Behavior
    Drupal.behaviors.resizer = {};
    Drupal.behaviors.resizer.resizeTimer = null;
    Drupal.behaviors.resizer.isMobile = false;
    Drupal.behaviors.resizer.isTabletPortrait = false;
    Drupal.behaviors.resizer.isTabletLandscape = false;
    Drupal.behaviors.resizer.isDesktop = true;
    Drupal.behaviors.resizer.deviceHasChanged = false;

    Drupal.behaviors.resizer.attach = function(context) {
        $(window, context).resize(function() {
            clearTimeout(Drupal.behaviors.resizer.resizeTimer);
            Drupal.behaviors.resizer.resizeTimer = setTimeout(function() { Drupal.attachBehaviors(); }, 100);
        });
    };



    // Check if mobile device based on header class display on media queries
    Drupal.behaviors.checkViewport = {
        attach: function(context) {

            let $obj = Drupal.behaviors.resizer;

            // Store previous status of device
            let $previousIsMobile = $obj.isMobile;
            let $previousIsTabletLandscape = $obj.isTabletLandscape;
            let $previousIsDesktop = $obj.isDesktop;

            // If Mobile
            if ($(".hamburger", context).css("display") === 'block') {
                $obj.isMobile = true;
                $obj.isTabletPortrait = false;
                $obj.isTabletLandscape = false;
                $obj.isDesktop = false;
                $('body').addClass('is-mobile').removeClass('is-tablet-portrait').removeClass('is-tablet-landscape').removeClass('is-desktop');

                // If tablet portrait
                if($(window).width() >= 768){
                    $obj.isMobile = false;
                    $obj.isTabletPortrait = true;
                    $obj.isTabletLandscape = false;
                    $obj.isDesktop = false;
                    $('body').removeClass('is-mobile').addClass('is-tablet-portrait').removeClass('is-tablet-landscape').removeClass('is-desktop');
                }

            }else{

                // If tablet landscape
                if($(window).width() >= 1024){
                    $obj.isMobile = false;
                    $obj.isTabletPortrait = false;
                    $obj.isTabletLandscape = true;
                    $obj.isDesktop = false;
                    $('body').removeClass('is-mobile').removeClass('is-tablet-portrait').addClass('is-tablet-landscape').removeClass('is-desktop');
                }

                // Is Desktop
                if($('.header .logo').width() === 220){
                    $obj.isMobile = false;
                    $obj.isTabletPortrait = false;
                    $obj.isTabletLandscape = false;
                    $obj.isDesktop = true;
                    $('body').removeClass('is-mobile').removeClass('is-tablet-portrait').removeClass('is-tablet-landscape').addClass('is-desktop');
                }

            }

            // Compare with previous status to see if it has changed
            $obj.deviceHasChanged = $obj.isMobile !== $previousIsMobile
                || $obj.isTabletLandscape !== $previousIsTabletLandscape
                || $obj.isDesktop !== $previousIsDesktop;

            /*
            console.log("Status Mobile :"+  $obj.isMobile);
            console.log("Status Tablet Portrait :"+  $obj.isTabletPortrait);
            console.log("Status Tablet Landscape :"+  $obj.isTabletLandscape);
            console.log("Status Desktop :"+  $obj.isDesktop);
            */




        }
    };




})(jQuery, Drupal, drupalSettings);
