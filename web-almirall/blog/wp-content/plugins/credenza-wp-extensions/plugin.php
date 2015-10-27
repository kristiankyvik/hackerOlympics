<?php
/**
 * Plugin Name: Credenza - Extensions
 * Description: This contains the custom post types needed for the theme functionality
 * Version: 1.0.0
 * Author: fuelthemes
 * Author URI: http://themeforest.net/user/fuelthemes
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU 
 * General Public License version 2, as published by the Free Software Foundation.  You may NOT assume 
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without 
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */
 
if (!defined('THB_THEME_NAME')) {
	define('THB_THEME_NAME', 'credenza');
	define('THB_THEME_ROOT', esc_url(get_template_directory_uri()));
	define('THB_THEME_ROOT_ABS', get_template_directory());
}

// Plugin Directory 
define( 'THB_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
 
// Shortcode Generator & Shortcodes
 
// Widgets

// Custom Post Types
require_once(THB_PLUGIN_DIR . '/lib/cpt/portfolio.php');
require_once(THB_PLUGIN_DIR . '/lib/cpt/teammember.php');