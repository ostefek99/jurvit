
/**
 * @file
 * Javascript parallaxing.
 */
(function ($) {
  // Adjust the term background image.
  Drupal.behaviors.bgParallax = {
    attach: function (context, settings) {

      // Make sure the image is fully loaded.
      $('#main-background-image').on('load', function() {
        // Only apply to larger screens.
        if (window.innerWidth >= 1024) {
          if ($('#main-background-image').length) {
            var backgroundOffset = getBackgroundOffset();
            var rate = getScrollRate();

            // Run once on page load, then on any scroll.
            bgParallaxScroll(backgroundOffset, rate);
            $(window).scroll(function() {
              bgParallaxScroll(backgroundOffset, rate);
            }); 
          }
        } else {
          $('#main-background-image').css('transform', 'translateY(0)'); 
        }

        $(window).resize(function() {
          // Only apply to larger screens.
          if (window.innerWidth >= 1024) {
            if ($('#main-background-image').length) {
              var backgroundOffset = getBackgroundOffset();
              var rate = getScrollRate();

              // Run once on page load, then on any scroll.
              bgParallaxScroll(backgroundOffset, rate);
              $(window).scroll(function() {
                bgParallaxScroll(backgroundOffset, rate);
              }); 
            }
          } else {
            $('#main-background-image').css('transform', 'translateY(0)'); 
          }
        });
      });
    }
  };

  // Get background offset.
  function getBackgroundOffset() {
    return $('#main-container-wrapper').offset().top;
  }

  // Get scroll rate.
  function getScrollRate() {
    // Get background image size.
    var bgSize = $('#main-background-image').height();

    var docHeight = $('#main-container-wrapper').height();
    var viewportHeight = $(window).height(); 

    // If no image is found use the docHeight as the size.
    if (bgSize == 0) {
      bgSize = docHeight;
    }

    // Only run if the body is larger than the image.
    if (docHeight >= bgSize && viewportHeight < bgSize) {

      var backgroundOffset = $('#main-container-wrapper').offset().top;

      // Set the scroll rate. Adding .9 as a little extra padding.
      var rate = 1 - (((bgSize - viewportHeight)/docHeight) * .9);
       
      // If the rate is less than 0, default to 0.
      if (rate < 0) {
        rate = 0;
      }
    }
    return rate;
  }

  // Adjust the background image upon page scroll.
  function bgParallaxScroll(backgroundOffset, rate) {
    var windowHeight = $(window).height();

    // Apply only if the scroll is to the body.
    if (backgroundOffset < window.pageYOffset) {
      var scroll = $(window).scrollTop() - backgroundOffset;
      var translateY = (rate * scroll);
 
      // Apply the changes to the element.
      if (window.innerWidth >= 1024) {
        $('#main-background-image').css('transform', 'translateY(' + translateY + 'px'); 
      } else {
        $('#main-background-image').css('transform', 'translateY(0)'); 
      }
    }
  }

})(jQuery);
