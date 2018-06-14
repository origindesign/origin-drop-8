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
        $this->result["additional_classes"] = 'article';

        return $this->result;

    }


    protected function getNodes ($tag){

        if($tag != ''){
            $term = \Drupal::entityTypeManager()
                ->getStorage('taxonomy_term')
                ->loadByProperties(['name' => $tag, 'vid' => 'tags']);
            $term = reset($term);
            $defaultParams = '{"content_type":"article","category":"field_tags--'.$term->id().'","paged":"1-10--restricted-5","sort":"created-DESC"}';
        }else{
            $defaultParams = '{"content_type":"article","category":"all","paged":"1-10--restricted-5","sort":"created-DESC"}';
        }

        return [
            '#type' => 'markup',
            '#markup' => "<div class='ajax-list-container ajax-article loading' data-ajax-path='/efq/post' data-default-params='".$defaultParams."'></div>"
        ];

    }



    protected function createFilters(){

        $categories = $this->getTermsFromVocabulary('tags', 'tid', 'Filter by category', 'all');

        $form = \Drupal::formBuilder()->getForm('Drupal\efq\Form\FilterForm');

        $form["container"] =  array(
            '#prefix' => '<div class="filter-blog">',
            '#suffix' => '</div>',
            'categories' => array(
                '#attributes' => [
                    'id' => 'categories',
                    'class' => ['categories','filter-list'],
                    'data-filter-group' => "categories"
                ],
                '#title' => t('Select a category'),
                '#type' => 'select',
                '#options' => $categories
            )
        );


        return $form;

    }



}