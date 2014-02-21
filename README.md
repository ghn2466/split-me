Split Me
========

Split Me is a simple minimal WordPress theme wich contains no sidebar, no slider, just a simple menu and a large area for your thumbnails. It was inspired by medium.com

Split Me uses:
* Open Sans font (available through Google web Fonts: http://www.google.com/webfonts/specimen/Open+Sans), licensed under Apache License Version 2 (http://www.apache.org/licenses/LICENSE-2.0.html)
* A Fontello custom pack for the icon font (http://fontello.com)
* Modernizr (http://modernizr.com/) script licensed under MIT license (www.modernizr.com/license/)
* Default header image (kittens): http://placekitten.com/

## Screenshots

![ScreenShot](https://raw2.github.com/Manoz/split-me/master/screenshots/screen-1.png)
![ScreenShot](https://raw2.github.com/Manoz/split-me/master/screenshots/screen-2.png)
![ScreenShot](https://raw2.github.com/Manoz/split-me/master/screenshots/screen-3.png)
![ScreenShot](https://raw2.github.com/Manoz/split-me/master/screenshots/screen-4.png)

## Demo

You can see a demo here: http://splitme.mwanoz.fr/

## Installation

You can install the theme through the WordPress installer under "Themes" > "Install themes" by searching for it.
Alternatively you can download the file, unzip it and move the unzipped contents to the "wp-content/themes" folder
of your WordPress installation. You will then be able to activate the theme.

## Instructions

Split Me has no options because it does not seem necessary.
The only options are those available natively in WordPress:
* Custom header (the badass left picture)
* Custom background (colors and images)

Also, the theme has no sidebar and the thumbnails are not displayed in a <img> tag. That's why "Theme Check" will not find the_post_thumbnail() because it's not needed. Read below for the thumbnails.

If you set a thumbnail on your post, it will be displayed in the large box on the left. You need to choose a thumbnail size, minimum 800x800 pixels. 
If you do not set a thumbnail, the image that you have set in "custom-header" will be displayed.

### Support

For questions, comments or bug reports, please go to WordPress forums (http://wordpress.org/support/).

### Changelog

### 1.0.1 - 21.02.2014
* Fix get_header(); and get_footer();
* Fix wp_title()
* Remove favicon (temporary)
* Fix home_url();
* Remove all remove_action() calls
* Fix protocol for google webfont
* Fix wp_enqueue_script( 'jquery' );
* Fix all add_theme_support. They're now in the after_setup_theme action.
* Fix prefix for all functions
* Fix credits links
* Add new theme URI
* Add copyrights for kitten images

#### 1.0.0 - 20.02.2014
* Initial release \o/