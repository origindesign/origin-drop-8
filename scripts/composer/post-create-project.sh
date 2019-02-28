#!/bin/bash
docker-compose run -w /var/www/html/web php drush site-install standard --db-url=mysql://drupal:drupal@mariadb:3306/drupal --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable config_direct_save simple_block responsive_image blazy blazy_ui datetime_range ctools metatag token components admin_toolbar admin_toolbar_tools advagg advagg_bundler devel features features_ui linkit paragraphs smart_trim pathauto field_group address inline_entity_form entity_browser entity_embed entity_browser_entity_form media_entity_browser twig_field_value hsts editor_advanced_link editor_file menu_block redirect redis role_delegation tinypng video_embed_field view_unpublished origin_extend --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable efq helper includer --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable origin --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable global --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-enable activity page article event lesson banner lift_trail lodging dining --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-uninstall block_content --yes --strict=0
docker-compose run -w /var/www/html/web php drush features-import page article global --yes --strict=0
docker-compose run -w /var/www/html/web php drush config-set system.theme default origin --yes --strict=0
docker-compose run -w /var/www/html/web php drush pm-uninstall bartik --yes --strict=0
docker-compose run -w /var/www/html/web php drush cr --strict=0
yarn --cwd ./web/themes/custom/origin install --strict=0