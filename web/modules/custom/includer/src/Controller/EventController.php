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
        $categories = $this->getTermsFromVocabulary('events', false, 'Choose Category', 'all');

        $form = \Drupal::formBuilder()->getForm('Drupal\efq\Form\FilterForm');

        $form["container"] =  array(
            '#prefix' => '<div class="filter-events">',
            '#suffix' => '</div>',
            'from' => array(
                '#attributes' => [
                    'id' => 'from',
                    'class' => ['from-date','filter-list','form-type-date'],
                    'data-filter-group' => "from",
                    'readonly' => "true"
                ],
                '#title' => t('Start Date'),
                '#type' => 'textfield',
                '#value' => $from
            ),
            'to' => array(
                '#attributes' => [
                    'id' => 'to',
                    'class' => ['to-date','filter-list','form-type-date'],
                    'data-filter-group' => "to",
                    'readonly' => "true"
                ],
                '#title' => t('End Date'),
                '#type' => 'textfield',
                '#value' => $to
            ),
            'categories' => array(
                '#attributes' => [
                    'id' => 'categories',
                    'class' => ['categories','filter-list'],
                    'data-filter-group' => "categories"
                ],
                '#title' => t('Category'),
                '#type' => 'select',
                '#options' => $categories
            )
        );


        return $form;

    }






}