#!/bin/bash
docker-compose run -w /var/www/html/web php drush site-install standard --db-url=mysql://drupal:drupal@mariadb:3306/drupal --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable config_direct_save simple_block responsive_image blazy blazy_ui datetime_range ctools metatag metatag_open_graph token components admin_toolbar admin_toolbar_tools advagg advagg_bundler devel kint entity_usage features features_ui linkit paragraphs paragraphs_library smart_trim pathauto field_group address media media_library twig_field_value twig_tweak hsts editor_advanced_link link_attributes menu_block redirect redirect_404 redis role_delegation tinypng view_unpublished origin_extend views_bulk_operations weight xmlsitemap --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable efq helper includer --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable origin --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable global --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable page activity article event lesson banner lift_trail lodging dining --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-uninstall block_content --yes --strict=0
docker-compose run -w /var/www/html/web php drush features-import page article global --yes --strict=0
docker-compose run -w /var/www/html/web php drush config-set system.theme default origin --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-uninstall bartik --yes --strict=0
docker-compose run -w /var/www/html/web php drush cr --strict=0
yarn --cwd ./web/themes/custom/origin install --strict=0