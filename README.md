# Origin Composer template for Drupal 8 projects

This project template should provide a kickstart for managing your site
dependencies with [Composer](https://getcomposer.org/).

## Requirements

- [Composer](https://getcomposer.org/download/)
- [Docker](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

## 1. Setting Up Origin Drop 8 for a new site

- Clone this repository
- Update .env to match desired  project name
- From the root of the new project:

```shell
$ docker-compose up -d
$ composer create-project
```
- If at the end of the process you have drush issues in the output, it means that composer installed drush incorrectly from outside the container
- Delete /vendor/drush and /vendor/bin/drush*
- Re-install drush from within the container
````
docker-composer exec php sh
composer install
exit
composer create-project
````

- This should install Drupal, all required modules (contrib and custom), a set of features as well as the main Origin theme.
- The admin password should be displayed in the console when Drupal is installed. Make sure to copy it (username is admin)
- Navigating to <http://[name-of-your-project].docker.localhost:8000> to see the site


## 2. Using Drush to manage Config Manager and Cache Rebuild

- Drush can be accessed normally after sshing into the php container:
```shell
$ docker-compose exec php sh
$ cd /var/www/html/web
$ drush status
```
- Drush can aslo be accessed through the docker-compose command and by specifiying the root directory `docker-compose exec php drush -r /var/www/html/web/ status`
- In order to simplify the command, you can create an alias in your .bashrc file like `alias ddrush='docker-compose exec php drush'` (I called mine "ddrush" for docker drush)
- Then you'd need to create your drush aliases and copy it from your local machine to the php container drush directory:
```shell
$ cd ~/.drush
$ docker cp [name-of-your-project].aliases.drushrc.php [name-of-your-project]_php_1:/root/.drush/[name-of-your-project].aliases.drushrc.php
```
- Depending on the name you set for your aliases, you should be able to run drush from your local like these:
```shell
$ ddrush @local status 
$ ddrush @dev status 
```

## 3. Preparing for Pantheon

Navigate to web/sites/default and rename :
```shell
settings.local.php.txt to settings.local.php
settings.pantheon.php.txt to settings.pantheon.php
settings.php.txt to settings.php

- In gitignore, comment out the line under "Ignore directories generated by Composer" and "Ignore scaffold files"

```
- From the Pantheon Dashboard, create a new Drupal 8 site; then, before installing Drupal, set your site to git mode and do the following from the root of your local project:
```shell
$ git init
$ git add -A .
$ git commit -m "Setting up Drupal with web docroot"
$ git remote add origin ssh://ID@ID.drush.in:2222/~/repository.git
$ git push --force origin master
```
Replace ssh://ID@ID.drush.in:2222/~/repository.git with the URL from the middle of the SSH clone URL from the Connection Info popup dialog on your dashboard.

- Once it's pushed in the repository, go back in the Pantheon Dashboard and set your site to sftp mode. Navigate to your Dev site and install drupal as normal.
- If it's not done yet, download the drush aliases and set it up as described in point 3
- In order to use config manager, you need to sync the database and files before pushing anything else. From the root of the project:
```shell
$ ddrush sql-sync @origindrop.local @origindrop.dev
$ ddrush -r . rsync @origindrop.local:sites/default/files/ @origindrop.dev:%files
```
- This way, the local and the dev site are using the same UUID so we can use config manager
- If drush fails because of permission errors, skip this and continue. Push your first commit, let circle build a new version of Drush to push to Pantheon, then revisit this setup after.

## 4. Pushing to Github

- In gitignore, uncomment the line previously commented out under "Ignore directories generated by Composer" and "Ignore scaffold files"
- Remove git files as we're no longer going to use pantheon, but github as host of the main repo
- Create an empty github repository with the name of your site (ie: origindrop).

```shell
$ rm -rf .git 
$ git init
$ git add -A .
$ git commit -m "Moving repo to Github"
$ git remote add origin git@github.com:origindesign/origindrop.git
$ git push -u origin master
```

## 5. Configuring Circle CI

In Circle CI, create a new project based on your Github new repo. In the environement variables enter the following:
- TERMINUS_TOKEN: The Terminus Machine token
- GITHUB_TOKEN: Used by CircleCI to post comments on pull requests.
- TERMINUS_SITE: The name of the Pantheon site that will be used to test your site.
- TEST_SITE_NAME: Used to set the name of the test site when installing Drupal.
- ADMIN_EMAIL: Used to configure the email address to use when installing Drupal.
- ADMIN_PASSWORD: Used to set the password for the uid 1 user during site installation.
- GIT_EMAIL: Used to configure the git user’s email address for commits we make.
- THEME_PATH: In case you want to use the Pattern Lab theme system, enter the full path of the theme so it can run npm

Then in the SSH permissions, enter your SSH key and launch a build. The build will:
- Pull the repo from github
- Build an artifact
- Create e new multidev environement on Pantheon
- Run the test set in the new environement
- If the tests pass, it will push the code on dev