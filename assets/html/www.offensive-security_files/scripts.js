/* 
These functions make sure WordPress 
and Foundation play nice together.
*/

jQuery(document).ready(function($) { 

    // Remove empty P tags created by WP inside of Accordion and Orbit
    jQuery('.accordion p:empty, .orbit p:empty').remove();
    
     // Makes sure last grid item floats left
    jQuery('.archive-grid .columns').last().addClass( 'end' );
    
    // Adds Flex Video to YouTube and Vimeo Embeds
    jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').wrap("<div class='flex-video'/>");

    jQuery(document).foundation();
});



jQuery(function($) {
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      //$element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});

jQuery(function($) {
  $('.mobile-search-input').hide();
  $( ".mobile-search a" ).click(function() {
  $( ".mobile-search-input" ).slideToggle("fast");
  $( ".mobile-search a i").toggleClass('fa-search fa-times');
});
 //////////////////////////////////////////
// Search
var $searchTrigger = $('.search-trigger');
var $searchContainer = $('#search-form-container');

$searchContainer.find('.icon-chevron-right').on('click', function() {
    $searchContainer.find('form').submit();
});
var showSearchField = function(){
    $('body').addClass('no-scroll');

    $('#site-navigation-2').animate({opacity: 0}, 100);

    if (window.stickyShowing) $searchContainer.addClass('sticky');

    $searchContainer.show().find('.inner').animate({left: 0}, {
        //easing: Power4.easeOut
        duration: 200
        ,complete: function(){
            $searchContainer.find('.search-field').focus();
        }
    });
};
var hideSearchField = function(){
    $('#site-navigation-2').animate({opacity: 1}, 210);
    $searchContainer.find('.inner').animate({left: 450}, {
        duration: 200
        ,complete: function(){
            $searchContainer.hide();
            $('body').removeClass('no-scroll');
        }
    });
};
$searchContainer.find('.icon-close').on('click', function() {
    hideSearchField();
});
$searchTrigger.on('click', function() {
    showSearchField();
});

// Hacky way to make iOS not freak out when the search bar is shown. May be obsolete with iOS 9.
function is_iOS() {
  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];
  while (iDevices.length) {
    if (navigator.platform === iDevices.pop()){ return true; }
  }
  return false;
}


	// placeholders - requires that placeholder.js be present
	$('input, textarea').placeholder();

	//Slick Slider initializer
    $('.large-slider').slick({
    	autoplay: false,
    	speed: 400,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	//centerMode: true,
    	//centerPadding: '-100px',
    	autoplaySpeed: 2000,
    	focusOnSelect: true,
    	dots: false,
    	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    	responsive: [
    	    {
    	      breakpoint: 640,
    	      settings: {
    	        arrows: false
    	      }
    	    }
    	  ]
    });

    $('.quote-slider').slick({
      autoplay: true,
      //speed: 300,
	  speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      //centerMode: true,
      //centerPadding: '-100px',
      autoplaySpeed: 5000,
      focusOnSelect: true,
      dots: true,
      arrows: false,
      fade: false,
      adaptiveHeight: false,
      responsive: [
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              adaptiveHeight: false
            }
          }
        ]
    }); 	

    $('.multi-slider').slick({
        dots: false,
        autoplay: true,
        speed: 4750,
        autoplaySpeed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        //adaptiveHeight: true,
        variableWidth: true,
        cssEase: 'linear',
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ]     
    });

        $('.gallery').each(function() { 
        $(this).magnificPopup({
            delegate: 'a', 
            type: 'image',
            gallery: {
              enabled:true
            },
            image: {
              titleSrc: function(item) {
            return '<p>' + item.el.attr('data-description') + '</p>';
          }
            }
        });
    });

    $('#legal-sections li:first').addClass('is-active');
    $('#legal-sections-content div:first').addClass('is-active');
}); 

jQuery(document).ready(function($) {
  
  // set a variable for the anchor link which is the location.hash
  var anchorLink = $(window.location.hash);
    // test to see if the link is a anchor link, if not the length will have no value, this is done to avoid js errors on non anchor links
    if ( anchorLink.length ) {
      // fire the animation from the top of the page to the anchor link offsetting by the fixed elements height, the number is the speed of the animation
      $("html, body").animate({scrollTop: anchorLink.offset().top - 170 }, 500);
    }

});