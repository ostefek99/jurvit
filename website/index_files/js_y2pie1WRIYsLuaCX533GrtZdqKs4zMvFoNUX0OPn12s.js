/**
 * @file
 * Custom JavaScript behaviors for the Colorado Springs theme.
 */

 // Setting dynamicMenu to true will force the main menu to only have
 // a single menu trail open at a time. Setting this variable to false
 // will allow anything open to stay open.
 var dynamicMenu = true;

(function ($) {

  /**
   * Main menu behaviors.
   */
  Drupal.behaviors.coloradoSpringsMainMenu = {
    attach: function (context, settings) {

      // On page load check to see if any menus are open.
      replaceMenuClass();

      // Detect a click on the menu arrow.
      $('.block-cos-breadcrumb.main-menu-sidebar .arrow').on('click', function (e) {
        e.preventDefault();

        // Close any open menu.
        if (dynamicMenu == true) {

          // Replace the icon and show/hide the menu.
          if ($(this).hasClass('glyphicon-triangle-right')) {

            // Loop through all open elements and close them.
            $('.block-cos-breadcrumb.main-menu-sidebar .arrow').each(function() {
              $(this).removeClass('glyphicon-triangle-bottom');
              $(this).addClass('glyphicon-triangle-right');
              $(this).siblings('ul').hide();
            });

            $(this).removeClass('glyphicon-triangle-right');
            $(this).addClass('glyphicon-triangle-bottom');
            $(this).siblings('ul').show();
            $(this).parents('ul').show();
            $(this).parents('ul').siblings('.arrow').removeClass('glyphicon-triangle-right');
            $(this).parents('ul').siblings('.arrow').addClass('glyphicon-triangle-bottom');
          } else {
            // Close menu item and all children.
            $(this).removeClass('glyphicon-triangle-bottom');
            $(this).addClass('glyphicon-triangle-right');
            $(this).siblings('ul').hide();
          }
        } else {
          if ($(this).hasClass('glyphicon-triangle-right')) {
            $(this).removeClass('glyphicon-triangle-right');
            $(this).addClass('glyphicon-triangle-bottom');
            $(this).siblings('ul').show();
          } else if ($(this).hasClass('glyphicon-triangle-bottom')) {
            $(this).removeClass('glyphicon-triangle-bottom');
            $(this).addClass('glyphicon-triangle-right');
            $(this).siblings('ul').hide();
          }
        }
      });

      // Replace open menu glyphs with the proper icon.
      function replaceMenuClass() {
        if ($('.block-cos-breadcrumb.main-menu-sidebar .open > .arrow').hasClass('glyphicon-triangle-right')) {
          $('.block-cos-breadcrumb.main-menu-sidebar .open > .arrow').removeClass('glyphicon-triangle-right');
          $('.block-cos-breadcrumb.main-menu-sidebar .open > .arrow').addClass('glyphicon-triangle-bottom');
          $('.block-cos-breadcrumb.main-menu-sidebar .open > ul').show();
        }
      }

      // Detect IE and Edge browsers.
      if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        $('#block-menu-menu-mega-menu ul > li').focusin(function() {
          var elem = $(this);

          if (!elem.hasClass('menu-focus-within')) {
            elem.addClass('menu-focus-within');
          }
        }).focusout(function() {
          var elem = $(this);

          if (elem.hasClass('menu-focus-within')) {
            elem.removeClass('menu-focus-within');
          }
        });
      }
    }
  };

  /**
   * Disable links with the no-link class.
   */
  Drupal.behaviors.coloradoSpringsNoLink = {
    attach: function (context, settings) {
      // Disable .no-link menu items.
      $('a.no-link').on('click', function (e) {
        e.preventDefault();
      });
    }
  };

  /**
   * Toggle the mobile mega menu.
   */
  Drupal.behaviors.coloradospringsMegaMenu = {
    attach: function (content, settings) {
      $('#toggler').on('click', function() {
        $('#rm-dl-menu').toggleClass('dl-menuopen');
      });
    }
  };

  /**
   * Readjust the login menu on securecos pages.
   */
  Drupal.behaviors.secureCos = {
    attach: function (content, settings) {
      // securecos is added in template.php preprocess.html.
      if ($('body').hasClass('securecos')) {
        $('#block-menu-block-3 .menu-block-wrapper').prependTo('#header-wrapper');
      }
    }
  };

})(jQuery);
;
/**
 * @file
 * Custom JavaScript behaviors for the Colorado Springs airport section.
 */

(function ($) {

  /**
   * Main menu behaviors.
   */
  Drupal.behaviors.coloradoSpringsAirport = {
    attach: function (context, settings) {
      // Update the menu size partitions.
      var largest = 0;
      $('#flycos-menu-children .partition').each(function() { 
        if (largest < $(this).height()) {
          largest = $(this).height();
        }
      });

      // Loop through each partion again, but now set the height.
      $('#flycos-menu-children .partition').each(function() { 
        $(this).css('height', largest + 'px');
      });
    }
  };
})(jQuery);
;
