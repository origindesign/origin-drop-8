<?php

/**
 * @file
 * Contains \Drupal\includer\Controller\EventController
 */

namespace Drupal\includer\Controller;

use Drupal\Core\Datetime\DrupalDateTime;



/**
 * The specific class to gather includes and pass to template
 *
 */
class EventController extends ContentController {


    public function getIncludes () {

        $this->result["listing_ajax"] = $this->getNodes();
        $this->result["filter_ajax"] = $this->createFilters();
        $this->result["additional_classes"] = 'events';

        return $this->result;

    }




    protected function getNodes (){

        // Get current date plus one month
        $now = new DrupalDateTime('now');
        $plusMonth = new DrupalDateTime('now +2 month');

        $fromDate = $now->format("Y-m-d");
        $toDate = $plusMonth->format("Y-m-d");

        $defaultParams = '{"content_type":"event","category":"all","date":"field_date_range--'.$fromDate.','.$toDate.'","sort":"field_date_range-ASC"}';

        return [
            '#type' => 'markup',
            '#markup' => "<div class='ajax-list-container ajax-events loading' data-ajax-path='/efq/post' data-default-params='".$defaultParams."'></div>"
        ];

    }



    protected function createFilters(){

        // Get current date plus one month
        $now = new DrupalDateTime('now');
        $plusMonth = new DrupalDateTime('now +2 month');

        // Get current date plus one month
        $from = $now->format("Y-m-d");
        $to = $plusMonth->format("Y-m-d");
        $categories = $this->getTermsFromVocabulary('event_category', false, 'Choose Category', 'all');

        $form = \Drupal::formBuilder()->getForm('Drupal\efq\Form\FilterForm');

        $form["container"] =  array(
            '#prefix' => '<div class="filters filter-count-3">',
            '#suffix' => '</div>',
            'from' => array(
                '#attributes' => [
                    'id' => 'from',
                    'class' => ['from-date','filter-list','form-type-date'],
                    'readonly' => "true"
                ],
                '#label_attributes' => [
                    'for' => 'from'
                ],
                '#title' => t('Start Date'),
                '#type' => 'textfield',
                '#value' => $from
            ),
            'to' => array(
                '#attributes' => [
                    'id' => 'to',
                    'class' => ['to-date','filter-list','form-type-date'],
                    'readonly' => "true"
                ],
                '#label_attributes' => [
                    'for' => 'to'
                ],
                '#title' => t('End Date'),
                '#type' => 'textfield',
                '#value' => $to
            ),
            'category' => array(
                '#attributes' => [
                    'id' => 'category',
                    'class' => ['category','filter-list']
                ],
                '#label_attributes' => [
                    'for' => 'category'
                ],
                '#title' => t('Category'),
                '#type' => 'select',
                '#options' => $categories
            )
        );


        return $form;

    }


}