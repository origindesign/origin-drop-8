<?php

/**
 * @file
 * Contains \Drupal\includer\Controller\LessonController
 */

namespace Drupal\includer\Controller;


/**
 * The specific class to gather includes and pass to template
 *
 */
class LessonController extends ContentController {



    public function getIncludes () {

        $this->result["listing_isotope"] = $this->getNodes();
        $this->result["filter_isotope"] = $this->createFilters();
        $this->result["additional_classes"] = 'lesson';

        return $this->result;

    }



    protected function getNodes (){

        $conditions = array(
            "status" => 1,
        );

        $sort = array(
            "field" => 'title',
            "direction" => "ASC"
        );

        $range = array(
            "start" => 0,
            "length" => 1000
        );


        $nodes = $this->efqService->getEntities('lesson', 'card', $conditions, $range, $sort);

        if ($nodes){
            return $nodes;
        }

        return false;

    }



    protected function createFilters(){


        $age_category = $this->getTermsFromVocabulary('age_category', true, 'All', 'all');
        $level_category = $this->getTermsFromVocabulary('level_category', true, 'All', 'all');

        $form = \Drupal::formBuilder()->getForm('Drupal\efq\Form\FilterForm');

        $form["container"] =  array(
            '#prefix' => '<div class="filter-lessons filter-count-2">',
            '#suffix' => '</div>',
            'age_category' => array(
                '#attributes' => [
                    'id' => 'age_category',
                    'class' => ['age_category','filter-list'],
                    'data-filter-group' => "age_category"
                ],
                '#title' => t('Age'),
                '#type' => 'select',
                '#options' => $age_category
            ),
            'level_category' => array(
                '#attributes' => [
                    'id' => 'level_category',
                    'class' => ['level_category','filter-list'],
                    'data-filter-group' => "level_category"
                ],
                '#title' => t('Level'),
                '#type' => 'select',
                '#options' => $level_category
            )
        );

        return $form;

    }





}