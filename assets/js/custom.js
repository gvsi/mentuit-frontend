/* ============================================================
 * Plugin Core Init
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
$(document).ready(function() {
    'use strict';
    $(document).ready(function() {

        $('#learn_more').click(function() {
            $("#features").velocity("scroll", {
                duration: 800
            });
        });

        $('.menu li a').click(function() {
            var target = $(this).attr("data-redirect");

            if (target) {
                $('.menu li a').removeClass('active');
                $("#" + target).velocity("scroll", {
                    duration: 800
                });
            }
            $(this).addClass('active');
        });
    });
});