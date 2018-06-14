<?php

/**
 * @file
 * Contains \Drupal\includer\Controller\LodgingController
 */

namespace Drupal\includer\Controller;


/**
 * The specific class to gather includes and pass to template
 *
 */
class LodgingController extends ContentController {



    public function getIncludes () {

        $this->result["listing_isotope"] = $this->getNodes();
        $this->result["filter_isotope"] = $this->createFilters();
        $this->result["additional_classes"] = 'lodging';

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


        $nodes = $this->efqService->getEntities('lodging', 'card', $conditions, $range, $sort);

        if ($nodes){
            return $nodes;
        }

        return false;

    }



    protected function createFilters(){

        $terms = $this->taxoHelper->getTaxoTerms('lodging_category');

        return [
            '#type' => 'markup',
            '#markup' => $this->getTermsAsLinks($terms, true, 'category')
        ];

    }




}