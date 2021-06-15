<?php

/**
 * @file
 * Contains \Drupal\includer\Controller\ArticleController
 */

namespace Drupal\includer\Controller;


/**
 * The specific class to gather includes and pass to template
 *
 */
class ArticleController extends ContentController {



  public function getIncludes () {

    $this->result["listing_ajax"] = $this->getNodes($this->arguments["tag"]);
    $this->result["filter_ajax"] = $this->createFilters();
    $this->result["additional_classes"] = 'article';

    /*if(isset($this->arguments["tag"]) && $this->arguments["tag"] != ''){
        $this->result["listing_heading"] = '<h2><span>Tag: '.$this->arguments["tag"].'</span></h2>';
    }*/

    return $this->result;

  }


  protected function getNodes ($tag){

    $category = 'all';

    if($tag != ''){
      $term = \Drupal::entityTypeManager()
        ->getStorage('taxonomy_term')
        ->loadByProperties(['name' => $tag, 'vid' => 'article_category']);
      $term = reset($term);
      $category = 'field_category--'.$term->id().'';
    }

    $defaultParams = '{"content_type":"article","category":"'.$category.'","paged":"1-10--restricted-5","sort":"created-DESC"}';

    return [
      '#type' => 'markup',
      '#markup' => "<div class='ajax-list-container ajax-articles loading' data-ajax-path='/efq/post' data-default-params='".$defaultParams."'></div>"
    ];

  }



  protected function createFilters(){

    $categories = $this->getTermsFromVocabulary('article_category', false, 'Filter by category', 'all');

    $form = \Drupal::formBuilder()->getForm('Drupal\efq\Form\FilterForm');

    $form["container"] =  array(
      '#prefix' => '<div class="filters filter-count-1">',
      '#suffix' => '</div>',
      'category' => array(
        '#attributes' => [
          'id' => 'category',
          'class' => ['category','filter-list'],
        ],
        '#label_attributes' => [
          'for' => 'category'
        ],
        '#title' => t('Select a category'),
        '#type' => 'select',
        '#options' => $categories
      )
    );


    return $form;

  }



}
