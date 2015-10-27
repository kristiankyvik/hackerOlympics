<?php
/*-----------------------------------------------------------------------------------*/
/*	Create a new post type called team members
/*-----------------------------------------------------------------------------------*/

function thb_create_post_type_teammembers() 
{
	$labels = array(
		'name' => __( 'Team Member',THB_THEME_NAME),
		'singular_name' => __( 'Team Member',THB_THEME_NAME ),
		'rewrite' => array('slug' => __( 'teammember',THB_THEME_NAME )),
		'add_new' => _x('Add New', 'portfolio', THB_THEME_NAME),
		'add_new_item' => __('Add New Team Member',THB_THEME_NAME),
		'edit_item' => __('Edit Team Member',THB_THEME_NAME),
		'new_item' => __('New Team Member',THB_THEME_NAME),
		'view_item' => __('View Team Member',THB_THEME_NAME),
		'search_items' => __('Search Team Members',THB_THEME_NAME),
		'not_found' =>  __('No team members found',THB_THEME_NAME),
		'not_found_in_trash' => __('No team members found in Trash',THB_THEME_NAME), 
		'parent_item_colon' => ''
	  );
	  
	  $args = array(
		'labels' => $labels,
		'public' => true,
		'exclude_from_search' => true,
		'publicly_queryable' => true,
		'show_ui' => true, 
		'query_var' => true,
		'rewrite' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => null,
		'supports' => array('title','editor','thumbnail')
	  ); 
	  
	  register_post_type('teammember',$args);
}
/* Initialize post types */
add_action( 'init', 'thb_create_post_type_teammembers' );
?>