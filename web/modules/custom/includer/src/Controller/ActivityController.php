<?php

/**
 * @file
 * Contains \Drupal\includer\Controller\ActivityController
 */

namespace Drupal\includer\Controller;


/**
 * The specific class to gather includes and pass to template
 *
 */
class ActivityController extends ContentController {



    public function getIncludes () {

        $this->result["listing_isotope"] = $this->getNodes();
        $this->result["filter_isotope"] = $this->createFilters();
        $this->result["additional_classes"] = 'activity';

        return $this->result;

    }



    protected function getNodes (){

        $conditions = array(
            "status" => 1,
        );

        $sort = array(
            "field" => 'field_weight',
            "direction" => "DESC"
        );

        $range = array(
            "start" => 0,
            "length" => 1000
        );


        $nodes = $this->efqService->getEntities('activity', 'card', $conditions, $range, $sort);

        if ($nodes){
            return $nodes;
        }

        return false;

    }



    protected function createFilters(){

        // Get terms
        $categories = $this->getTermsFromVocabulary('activity_category', false, 'All Categories', 'all');

        $form = \Drupal::formBuilder()->getForm('Drupal\efq\Form\FilterForm');

        $form["container"] =  array(
            '#prefix' => '<div class="filters filter-count-1">',
            '#suffix' => '</div>'
        );

        $form["container"]['category'] = array(
            '#attributes' => [
                'id' => 'category',
                'class' => ['category','filter-list'],
                'data-filter-group' => "category"
            ],
            '#label_attributes' => [
                'for' => 'category'
            ],
            '#title' => t('Category'),
            '#type' => 'select',
            '#options' => $categories
        );

        return $form;

    }




}