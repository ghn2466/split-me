/**
 * Menu icon animation
 * @since 1.0.0
 */
(function($) {
    $('.menu-icn-wrap').on('click', function() {
        $('.site-title,.site-desc,.sm-f').toggle();
        $(this).children().toggleClass('active');
        $('.sm-nav').fadeToggle(200);
    })
})(jQuery);