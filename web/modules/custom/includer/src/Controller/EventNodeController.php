<?php

/**
 * @file
 * Contains \Drupal\includer\Controller\EventNodeController
 */

namespace Drupal\includer\Controller;


use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;



/**
 * The specific class to gather includes and pass to template
 *
 */
class EventNodeController extends ContentController {


    public function getIncludes () {

        $this->result["all_dates"] = $this->getNodes($this->arguments["ref_nid"]);

        return $this->result;

    }




    protected function getNodes ($ref_nid){

        $now = new DrupalDateTime('now');
        $now->setTimezone(new \DateTimezone(DateTimeItemInterface::STORAGE_TIMEZONE));

        $conditions['group'] = array(
            "andor" => "AND",
            'grouping' => array(
                "field_date_range.0.end_value" => array( $now, '>='),
                array(
                    "andor" => "OR",
                    'grouping' => array(
                        "nid" => array( $ref_nid, '='),
                        "field_event_reference.target_id" => array( $ref_nid, '='),
                    )
                ),
            )
        );

        $sort = array(
            "field" => 'field_date_range',
            "direction" => "ASC"
        );

        $range = array(
            "start" => 0,
            "length" => 1000
        );


        $nodes = $this->efqService->getEntities('event', 'date', $conditions, $range, $sort);

        if(isset($nodes['#sorted'])){

            $count = count(
                array_filter(
                    array_keys($nodes),
                    'is_numeric'
                )
            );

            if ($count > 1){
                return $nodes;
            }

        }

        return false;

    }


}