<?php

/**
 * @file
 * Contains \Drupal\includer\Controller\ContentController
 */

namespace Drupal\includer\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\efq\EfqQueryEntities;
use Drupal\helper\RenderHelper;
use Drupal\helper\TaxoHelper;
use Drupal\helper\GlobalHelper;
use Drupal\helper\NodeHelper;
use Symfony\Component\DependencyInjection\ContainerInterface;


/**
 * The main content controller to gather includes and pass to template
 *
 */
class ContentController extends ControllerBase {


  protected $efqService;
  protected $renderHelper;
  protected $taxoHelper;
  protected $globalHelper;
  protected $nodeHelper;
  protected $result;
  protected $arguments;


  /**
   * Class constructor.
   */
  public function __construct(EfqQueryEntities $efqService, RenderHelper $renderHelper, TaxoHelper $taxoHelper, GlobalHelper $globalHelper, NodeHelper $nodeHelper) {

    $this->efqService = $efqService;
    $this->renderHelper = $renderHelper;
    $this->taxoHelper = $taxoHelper;
    $this->globalHelper = $globalHelper;
    $this->nodeHelper = $nodeHelper;
  }


  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('efq.query_entities'),
      $container->get('helper.render_helper'),
      $container->get('helper.taxo_helper'),
      $container->get('helper.global_helper'),
      $container->get('helper.node_helper')
    );
  }


  public function setArguments ( $arguments ){

    $this->arguments = $arguments;

  }


  public function getIncludes () {

    return $this->result;

  }


  /**
   * @param $vid
   * @param bool $name
   * @param string $selectText
   * @param string $all
   * @param null $ignoreTids
   * @return array
   */
  public function getTermsFromVocabulary ( $vid, $output = false, $selectText = 'Choose Category', $all = '', $ignoreTids = NULL ){

    $filters = array(
      $all => t($selectText),
    );

    $terms = $this->taxoHelper->getTaxoTerms ($vid, $ignoreTids);

    foreach($terms as $term){

      switch($output){

        case 'tid':
          $filters[$term->tid] = t($term->name);
          break;
        default:
          $filters['.term-'.$term->tid] = t($term->name);
          break;

      }

    }

    return $filters;

  }


  /**
   * @param $terms
   * @param bool $name
   * @param string $vocab_name
   * @param bool $name
   * @return string
   */
  public function getTermsAsLinks ( $terms, $name = false, $vocab_name = 'category' ){

    $output = '<ul><li><a href="#" class="link-filter active" data-filter-group="'.$vocab_name.'" data-filter="all">All</a> </li>';

    foreach($terms as $term){
      $filter = ( $name  ? $this->machineName( $term->name ) : $term->tid );
      $output .= '<li><a href="#" class="link-filter" data-filter-group="'.$vocab_name.'" data-filter=".term-'.$filter.'">'.t($term->name).'</a></li>';
    }

    $output .= '</ul>';

    return $output;

  }


  public function getTermsArray($terms){

    $tids = [];
    foreach($terms as $term){
      $tids[] = $term['target_id'];
    }

    return $tids;

  }


  protected function machineName($string) {
    $value = str_replace('&amp; ','',$string);
    $value = str_replace(' ','-', strtolower($value));
    $value = preg_replace('@[^a-z0-9-]+@','', $value);
    return $value;
  }


}
