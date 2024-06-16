
$(document).on("ready", function () {
  stickyNav();
  youtubePlayer();
  placeholderForm();
  mobileNavigation();
  scrollToPoint();
  navScrollTo();
  tooltip();
  clientsSlider();
  featuresSlider();
  languagesPopup();
  headerFormValidation();
  portfolioLightbox();
  portfolio();
  contactFormValidation();
  instafeed();
  initMap();
  projectSlider();
});

// On load
$(window).on("load", function () {
  websiteLoading();
  parallaxStellar();
  animationText1();
  animationText2();
  projectLoad();
});

// On resize
$(window).on("resize", function () {
  parallaxStellar();
});

// On resize
$(window).on("scroll", function () {
  showHeaderScrollTop();
});

/** [ 1.2 ] - Background Youtube Video
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function youtubePlayer() {
  $(".player").YTPlayer();
  $(".video-controls .fa-pause").on("click", function (e) {
    e.preventDefault();
    $("#bg-video").YTPTogglePlay();
    $(this).toggleClass("fa-pause fa-play");
    $("#video h1, #video p").toggleClass("show-effect");
  });
  $(".video-controls .fa-volume-up").on("click", function (e) {
    e.preventDefault();
    $("#bg-video").toggleVolume();
    $(this).toggleClass("fa-volume-up fa-volume-off");
  });
}

/** [ 1.3 ] - placeholder Subscribe Form
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function placeholderForm() {
  $("input, textarea").placeholder();
}

/** [ 1.4 ] - Mobile Navigation
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function mobileNavigation() {
  $(".nav-mobile").html($("#main-menu").html());
  $(".nav-trigger").on("click", function () {
    if ($(".nav-mobile ul").hasClass("expanded")) {
      $(".nav-mobile ul.expanded").removeClass("expanded").slideUp(300);
    } else {
      $(".nav-mobile ul").addClass("expanded").slideDown(300);
    }
  });
  // collapsed menu close on click
  $(document).on("click", ".nav-mobile ul li", function (e) {
    $(".nav-mobile ul.expanded").removeClass("expanded").slideUp(300);
  });
}

/** [ 1.5 ] - Scroll to
 *  ~~~~~~~~~~~~~~~~~~~
 */

function scrollToPoint() {
  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(".scroll-to").on("click", function (e) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 100,
        },
        1500,
        "easeInOutExpo"
      );
    e.preventDefault();
  });
}

/** [ 1.6 ] - Stellar Parallax
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// only activate stellar for window widths above or equal to 1024
var stellarActivated = false;

function parallaxStellar() {
  if ($(window).width() <= 1024) {
    if (stellarActivated == true) {
      $(window).data("plugin_stellar").destroy();
      stellarActivated = false;
    }
  } else {
    if (stellarActivated == false) {
      $.stellar({
        verticalOffset: 0,
        responsive: true,
        horizontalScrolling: false, // don't change this option
      });
      $(window).data("plugin_stellar").init();
      stellarActivated = true;
    }
  }
}

/** [ 1.7 ] - Loader
 *  ~~~~~~~~~~~~~~~~
 */

function websiteLoading() {
  $("#website-loading").delay(600).fadeOut(300);
  $(".loading-effect").delay(0).fadeOut(500);
}

/** [ 1.8 ] - Tooltip
 *  ~~~~~~~~~~~~~~~~~
 */

function tooltip() {
  $(".tooltip").tooltipster({
    maxWidth: 150,
    minWidth: 20,
    animation: "grow", // fade, grow, swing, slide, fall
    delay: 300,
    touchDevices: false,
    trigger: "hover",
    position: "top",
  });
}

/** [ 1.10] - Google Map
 *  ~~~~~~~~~~~~~~~~~~~~~
 */

function initMap() {
  var latlng = { lat: -33.867487, lng: 151.20699 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    draggable: true,
    center: latlng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId],
    },
  });

  // marker click title
  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">Landing page</h3>' +
    '<div id="bodyContent">' +
    "<p>Here we are. Come to drink a coffee!</p>" +
    "</div>" +
    "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400,
  });

  // marker image
  var image = {
    url: "images/general-elements/marker.png",
    size: new google.maps.Size(50, 50), // Width and height of the marker
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 50), // Position of the marker
  };

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: image,
    title: "Landing page",
  });

  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });

  // marker open title
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });

  // map color
  var customMapType = new google.maps.StyledMapType(
    [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#e9e9e9",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#dedede",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#ffffff",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#333333",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#f2f2f2",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#fefefe",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#fefefe",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
    ],
    { name: "Custom Style" }
  );

  var customMapTypeId = "custom_style";
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}

/** [ 1.11] - Sticky Nav
 *  ~~~~~~~~~~~~~~~~~~~~~
 */

function stickyNav() {
  $("#sticker").sticky({ topSpacing: 0 });
}

/** [ 1.12] - ScrollTo Nav
 *  ~~~~~~~~~~~~~~~~~~~~~~~~
 */

function navScrollTo() {
  $.scrollIt({
    // If you change this values you will have strange effect
    upKey: false,
    downKey: false,
    scrollTime: 0,
    activeClass: "active",
    onPageChange: null,
    topOffset: -100,
  });
}

/** [ 1.13] - Instagram Feed
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function instafeed() {
  var feed = new Instafeed({
    userId: 5640046896,
    accessToken: "5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0",
    get: "user",
    // userId: 3231552696,  //Your ID Number Here
    clientId: "5f6dded48d6f4c6586ac301a8f6bd42c",
    // accessToken: '3231552696.1677ed0.23b02740f63c4bbe9ba3624a94395152',
    // accessToken: '3231552696.5f6dded.ea522e1db7c24244b86c922dcec82eb9',
    resolution: "standard_resolution",
    template:
      '<li class="item"><a href="{{link}}" target="_blank"><span class="icon-overlay"><i class="fa ' +
      'fa-instagram"></i></span><img class="img-responsive" src="{{image}}" /></a></li>',
    limit: 16, // Number of photo will get from instagram
    target: "instafeed",
    after: function () {
      $("#instafeed").owlCarousel({
        items: 8, // Number of photo will be visable
        autoPlay: 3000,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: false,
        navigationText: [
          "<i class='fa fa-long-arrow-left'></i>",
          "<i class='fa fa-long-arrow-right'></i>",
        ],
        pagination: false,
      });
    },
  });
  feed.run();
}

/** [ 1.14] - Languages Popup
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function languagesPopup() {
  $(".Languages").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: false,
    autoFocusLast: false,
    preloader: false,
    showCloseBtn: true,
    midClick: true,
    removalDelay: 300,
    mainClass: "zoom-effect",
  });
}

/** [ 1.15] - Portfolio Lightbox
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function portfolioLightbox() {
  $(".portfolio-items-list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      closeOnContentClick: true,
      midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    },
    removalDelay: 300, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
    closeOnContentClick: true,
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
}

/** [ 1.16] - Portfolio Filter
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function portfolio() {
  // get the action filter option item on page load
  var $filterType = $(".portfolio-filter li.active a").attr("class");

  // get and assign the ourHolder element to the
  // $holder varible for use later
  var $holder = $("ul.portfolio-items-list");

  // clone all items within the pre-assigned $holder element
  var $data = $holder.clone();

  // attempt to call Quicksand when a filter option
  // item is clicked
  $(".portfolio-filter li a").on("click", function (e) {
    // reset the active class on all the buttons
    $(".portfolio-filter li").removeClass("active");

    // assign the class of the clicked filter option
    // element to our $filterType variable
    var $filterType = $(this).attr("class");
    $(this).parent().addClass("active");

    if ($filterType == "all") {
      // assign all li items to the $filteredData var when
      // the 'All' filter option is clicked
      var $filteredData = $data.find("li");
    } else {
      // find all li elements that have our required $filterType
      // values for the data-type element
      var $filteredData = $data.find("li[data-type~=" + $filterType + "]");
    }

    // call quicksand and assign transition parameters
    $holder.quicksand(
      $filteredData,
      {
        duration: 700,
        easing: "easeInOutQuint",
        useScaling: true,
        adjustHeight: "dynamic",
      },
      function () {
        // callback function
        portfolioLightbox();
        projectLoad();
      }
    );
    return false;
  });
}

/** [ 1.17] - Back to top Button
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
//Scroll Top Button
function showHeaderScrollTop() {
  if ($(window).scrollTop() > 800) {
    $(".scroll-top").addClass("active");
  } else {
    $(".scroll-top").removeClass("active");
  }
}

$(".scroll-top").click(function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1500,
    "easeInOutExpo"
  ); //1200 easeInOutExpo
});



function clientsSlider() {
  $(".clients").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    pagination: false,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
  });
}

function featuresSlider() {
  $(".more-features-slider").owlCarousel({
    autoPlay: false, // Integer means autoplay equal to the value. True means autoplay with 5 seconds
    stopOnHover: true,
    slideSpeed: 500,
    navigation: false,
    navigationText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    paginationSpeed: 400,
    transitionStyle: "fade", // "fade", "backSlide", "goDown" and "fadeUp"
    singleItem: true,
  });
}


function animationText1() {
  $(".tlt1").textillate({
    // the default selector to use when detecting multiple texts to animate
    selector: ".texts",

    // enable looping
    loop: true,

    // sets the minimum display time for each text before it is replaced
    minDisplayTime: 2000,

    // sets the initial delay before starting the animation
    // (note that depending on the in effect you may need to manually apply
    // visibility: hidden to the element before running this plugin)
    initialDelay: 0,

    // set whether or not to automatically start animating
    autoStart: true,

    // custom set of 'in' effects. This effects whether or not the
    // character is shown/hidden before or after an animation
    inEffects: [],

    // custom set of 'out' effects
    outEffects: ["fadeIn"],

    // in animation settings
    in: {
      // set the effect name
      effect: "fadeIn",

      // set the delay factor applied to each consecutive character
      delayScale: 1.5,

      // set the delay between each character
      delay: 50,

      // set to true to animate all the characters at the same time
      sync: false,

      // randomize the character sequence
      // (note that shuffle doesn't make sense with sync = true)
      shuffle: false,

      // reverse the character sequence
      // (note that reverse doesn't make sense with sync = true)
      reverse: false,

      // callback that executes once the animation has finished
      callback: function () {},
    },

    // out animation settings.
    out: {
      effect: "fadeOut",
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: true,
      callback: function () {},
    },

    // callback that executes once textillate has finished
    callback: function () {},

    // set the type of token to animate (available types: 'char' and 'word')
    type: "char",
  });
}

/** [ 2.4 ] - Header Animation Text click through
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function animationText2() {
  $(".tlt2").textillate({
    // the default selector to use when detecting multiple texts to animate
    selector: ".texts",

    // enable looping
    loop: true,

    // sets the minimum display time for each text before it is replaced
    minDisplayTime: 2000,

    // sets the initial delay before starting the animation
    // (note that depending on the in effect you may need to manually apply
    // visibility: hidden to the element before running this plugin)
    initialDelay: 0,

    // set whether or not to automatically start animating
    autoStart: true,

    // custom set of 'in' effects. This effects whether or not the
    // character is shown/hidden before or after an animation
    inEffects: [],

    // custom set of 'out' effects
    outEffects: ["fadeIn"],

    // in animation settings
    in: {
      // set the effect name
      effect: "fadeIn",

      // set the delay factor applied to each consecutive character
      delayScale: 1.5,

      // set the delay between each character
      delay: 50,

      // set to true to animate all the characters at the same time
      sync: true,

      // randomize the character sequence
      // (note that shuffle doesn't make sense with sync = true)
      shuffle: false,

      // reverse the character sequence
      // (note that reverse doesn't make sense with sync = true)
      reverse: false,

      // callback that executes once the animation has finished
      callback: function () {},
    },

    // out animation settings.
    out: {
      effect: "fadeOut",
      delayScale: 1.5,
      delay: 50,
      sync: true,
      shuffle: false,
      reverse: false,
      callback: function () {},
    },

    // callback that executes once textillate has finished
    callback: function () {},

    // set the type of token to animate (available types: 'char' and 'word')
    type: "char",
  });
}

/**
 *  -------------------------------------------------------------------------------
 *  [ 3 ] - Data Attributes Options
 *  -------------------------------------------------------------------------------
 *
 *  This part contains the codes of almost all data attribute options used for
 *  custom elements and css options
 *
 *  ------
 *
 *  It has the following code:
 *
 *     |
 *     |-->  [ 3.1 ] - Background Color
 *     |-->  [ 3.2 ] - Background Color Opacity
 *     |-->  [ 3.3 ] - Parallax Background Image
 *     |-->  [ 3.4 ] - Divider Space
 *     |-->  [ 3.5 ] - Pattern Overlay options
 *
 */

/** [ 3.1 ] - Background Color
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Custom background color
$("*[data-background-color]").each(function () {
  var customBackgroundColor = $(this).data("background-color");
  $(this).css("background-color", customBackgroundColor);
});

/** [ 3.2 ] - Background Color Opacity
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Custom background color opacity
$("*[data-background-color-opacity]").each(function () {
  var customBackgroundColorOpacity = $(this).data("background-color-opacity"),
    backgroundColor = $(this).css("background-color");

  // Conversion of rgb to rgba
  var rgbaBackgroundColor = backgroundColor
    .replace("rgb", "rgba")
    .replace(")", ", " + customBackgroundColorOpacity + ")");
  $(this).css("background-color", rgbaBackgroundColor);
});

/** [ 3.3 ] - Parallax Background Image
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Custom Parallax background image
$("*[data-parallax-background-image]").each(function () {
  var customParallaxBackgroundImage = $(this).data("parallax-background-image");
  $(this).css(
    "background-image",
    "url('" +
      "./images/files/parallax-background-images/" +
      customParallaxBackgroundImage +
      "')"
  );
});

/** [ 3.4 ] - Divider Space
 *  ~~~~~~~~~~~~~~~~~~~~~~
 */

// Custom divider space
$("*[data-divider-space]").each(function () {
  var customDividerSpaceHeight = $(this).data("divider-space");
  $(this).css("height", parseInt(customDividerSpaceHeight));
});

/** [ 3.5 ] - Pattern Overlay options
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Custom pattern overlay darkness opacity
$("*[data-pattern-overlay-darkness-opacity]").each(function () {
  // 0 value is not read by jquery, but 0.0 is read! in case of making condition "if"
  var patternOverlayDarknessOpacity = $(this).data(
    "pattern-overlay-darkness-opacity"
  );
  $(this).css(
    "background-color",
    convertHex("#000000", patternOverlayDarknessOpacity)
  );
});

// disable pattern overlay background image [ dots only ]
$("*[data-pattern-overlay-background-image]").each(function () {
  if ($(this).data("pattern-overlay-background-image") == "none") {
    $(this).css("background-image", "none");
  } else if ($(this).data("pattern-overlay-background-image") == "yes") {
    $(this).css("background-image");
  }
});

// remove pattern overlay
$("*[data-remove-pattern-overlay]").each(function () {
  if ($(this).data("remove-pattern-overlay") == "yes") {
    $(this).css("background", "none");
    /**
     *  In HTML, add expressive word like "none" to know what this option indicates for.
     *  Using this word has no direct effect or any another word, it's only word with meaning
     *  to help to know what this attribute value is doing.
     */
  }
});

// ===== Function to get rgba value of Hex color value ===== //
function convertHex(hex, opacity) {
  // var r, g, b, result;
  hex = hex.replace("#", "");
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  result = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
  return result;
}

/**
 *  -------------------------------------------------------------------------------
 *  [ 4 ] - Forms
 *  -------------------------------------------------------------------------------
 *
 *  This part contains the codes of forms used like Contact Form and Mailchimp
 *  Subscribe Form
 *
 *  ------
 *
 *  It has the following code:
 *
 *     |
 *     |-->  [ 4.1 ] - Contact Form
 *     |-->  [ 4.2 ] - Mailchimp Subscribe Form
 *     |-->  [ 4.3 ] - Bottom Contact Form
 *
 */

/** [ 4.1 ] - Contact Form
 *  ~~~~~~~~~~~~~~~~~~~~~~
 */

function headerFormValidation() {
  $("#contact-form").validate({
    // rules
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 4,
        maxlength: 500,
      },
    },

    // messages
    messages: {
      name: {
        required: "Please enter your full name.",
        minlength: "Full name must consist of at least {0} characters.",
      },
      email: {
        required: "Please enter your email address.",
      },
      message: {
        required: "Please enter your message.",
        minlength: "your message must be at least {0} characters.",
        maxlength: "your message must be at most {0} characters.",
      },
    },
  });

  $("#contact-form").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      formError();
      var errorContent =
        '<img src="images/files/form-message/error.png">' +
        '<h5 style="color:#C75C5C;">Something Went Wrong!</h5>' +
        "<p>E-mail must be valid and your name must be longer than 4 character.</p>";
      submitMSG(false, errorContent);
    } else {
      // everything looks good!
      event.preventDefault();
      submitForm();
    }
  });
}

function submitForm() {
  // Initiate Variables With Form Content
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  $.ajax({
    type: "POST",
    url: "php/contact-form1.php",
    data: "name=" + name + "&email=" + email + "&message=" + message,
    success: function (text) {
      if (text == "success") {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    },
  });
}

function formSuccess() {
  $("#contact-form")[0].reset();

  var successContent =
    '<img src="images/files/form-message/send.png">' +
    '<h5 style="color:#4F5D73;">Your Message already Send</h5>' +
    "<p>This is a sample notification that will appear the right bottom corner.</p>";
  submitMSG(true, successContent);
}

function formError() {
  //Animation Phone Form when made error in validation
  $("#header-featured-form")
    .removeClass()
    .addClass("shake animated")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass();
      }
    );
}

function submitMSG(valid, msg) {
  var msgClasses;
  if (valid) {
    //Animation Form Notification when it appear
    msgClasses = "bounceInRight animated";
  } else {
    msgClasses = "bounceInRight animated appearing-delay";
  }

  $("#msgSubmit")
    .removeClass()
    .addClass(msgClasses)
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass();
      }
    );
  $("#msgSubmit").children(".msgSubmit-content").html(msg);
}

//Animation Form Notification when click to close icon
$("#msgSubmit")
  .find("i")
  .on("click", function () {
    $(this)
      .parent("#msgSubmit")
      .addClass("bounceOutLeft animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass("appearing-delay");
        }
      );
  });

/** [ 4.2 ] - Mailchimp Subscribe Form
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

$("#subscribe-form").ajaxChimp({
  callback: mailchimpCallback,
  url: "http://themeforest.us12.list-manage.com/subscribe/post?u=271ee03ffa4f5e3888d79125e&amp;id=163f4114e2", //Replace this with your own mailchimp post URL.
});

function mailchimpCallback(resp) {
  if (resp.result === "success") {
    $(".subscribe-result")
      .hide()
      .html('<div class="success">' + resp.msg + "</div>")
      .slideDown()
      .delay(10000)
      .slideUp();
  } else if (resp.result === "error") {
    $(".subscribe-result")
      .hide()
      .html('<div class="error">' + resp.msg + "</div>")
      .slideDown()
      .delay(10000)
      .slideUp();
  }
}

/** [ 4.3 ] - Bottom Contact Form
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function contactFormValidation() {
  $("#contact-form2").validate({
    // rules
    rules: {
      name2: {
        required: true,
        minlength: 4,
      },
      email2: {
        required: true,
        email: true,
      },
      subject2: {
        required: true,
        minlength: 4,
      },
      message2: {
        required: true,
        minlength: 4,
        maxlength: 500,
      },
    },

    // messages
    messages: {
      name2: {
        required: "Please enter your full name.",
        minlength: "Full name must consist of at least {0} characters.",
      },
      email2: {
        required: "Please enter your email address.",
      },
      subject2: {
        required: "Please enter your subject.",
        minlength: "Full name must consist of at least {0} characters.",
      },
      message2: {
        required: "Please enter your message.",
        minlength: "your message must be at least {0} characters.",
        maxlength: "your message must be at most {0} characters.",
      },
    },
  });

  $("#contact-form2").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      formError2();
      var errorContent =
        '<img src="images/files/form-message/error.png">' +
        '<h5 style="color:#C75C5C;">Something Went Wrong!</h5>' +
        "<p>E-mail must be valid and your name must be longer than 4 character.</p>";
      submitMSG2(false, errorContent);
    } else {
      event.preventDefault();
      submitForm2();
    }
  });
}

function submitForm2() {
  // Initiate Variables With Form Content
  var name = $("#name2").val();
  var email = $("#email2").val();
  var subject = $("#subject2").val();
  var message = $("#message2").val();

  $.ajax({
    type: "POST",
    url: "php/contact-form2.php",
    data:
      "name2=" +
      name +
      "&email2=" +
      email +
      "&subject2=" +
      subject +
      "&message2=" +
      message,
    success: function (text) {
      if (text == "success") {
        formSuccess2();
      } else {
        formError2();
        submitMSG2(false, text);
      }
    },
  });
}

function formSuccess2() {
  $("#contact-form2")[0].reset();

  var successContent =
    '<img src="images/files/form-message/send.png">' +
    '<h5 style="color:#4F5D73;">Your Message already Send</h5>' +
    "<p>This is a sample notification that will appear the right bottom corner.</p>";
  submitMSG2(true, successContent);
}

function formError2() {
  //Animation Phone Form when made error in validation
  $("#contact-form2")
    .removeClass()
    .addClass("shake animated")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass();
      }
    );
}

function submitMSG2(valid, msg) {
  var msgClasses;
  if (valid) {
    //Animation Form Notification when it appear
    msgClasses = "bounceInRight animated";
  } else {
    msgClasses = "bounceInRight animated appearing-delay";
  }

  $("#msgSubmit")
    .removeClass()
    .addClass(msgClasses)
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass();
      }
    );
  $("#msgSubmit").children(".msgSubmit-content").html(msg);
}

//Animation Form Notification when click to close icon
$("#msgSubmit")
  .find("i")
  .on("click", function () {
    $(this)
      .parent("#msgSubmit")
      .addClass("bounceOutLeft animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass("appearing-delay");
        }
      );
  });

// "Switcher"--------------------------------------------------//

$(document).ready(function () {
  $("#style-switcher button").click(function () {
    $("link[href*='skin']").attr("href", "css/color/" + $(this).val() + ".css");
  });
});

$(document).ready(function () {
  $("#style-switcher i").click(function () {
    $("#style-switcher").toggleClass("show");
  });
});

/* === Portfolio Expanding === */

function projectLoad() {
  (function () {
    $(".portfolio-items-list .open-project-link").on("click", function () {
      $("#project-page-data").removeClass("opened");
      $("html, body").animate(
        { scrollTop: $(".portfolio-bottom").offset().top - 100 },
        600
      );

      var myUrl = $(this).find(".open-project").attr("href") + " .project-load";

      setTimeout(function () {
        $("#project-page-holder").animate({ height: 100 }, 0, function () {
          setTimeout(function () {
            $(".project-page-loading").addClass("opened");
            setTimeout(function () {
              $("#project-page-data").load(myUrl, function (e) {
                $("#project-page-data").waitForImages({
                  finished: function () {
                    $(".project-page-loading").removeClass("opened");
                    projectSlider();
                    // Initializing scripts here
                    // -------------------------

                    setTimeout(function () {
                      $("#project-page-holder, #project-page-data").height(
                        $(".single-project").outerHeight()
                      );
                      $("#project-page-data").addClass("opened");
                    }, 500);
                  },
                  waitForAll: true,
                }); // End of waitForImages
              });
            }, 1000);
          }, 600);
        });
      }, 800);
    }); // End on click

    $(document).on("click", ".project-close", function (event) {
      $("#project-page-data").removeClass("opened");
      setTimeout(function () {
        $("#project-page-holder").height(0);
      }, 500);
      setTimeout(function () {
        $(".single-project").remove();
      }, 500);
      setTimeout(function () {
        $("html, body").animate(
          { scrollTop: $(".portfolio-top").offset().top - 160 },
          600
        );
      }, 1200);
      return false;
    }); // End on click
  })();
}

/** [ 2.2 ] - More Features Slider
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

function projectSlider() {
  $(".project-slider").owlCarousel({
    autoPlay: false, // Integer means autoplay equal to the value. True means autoplay with 5 seconds
    stopOnHover: true,
    slideSpeed: 500,
    navigation: false,
    navigationText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    paginationSpeed: 400,
    transitionStyle: "fade", // "fade", "backSlide", "goDown" and "fadeUp"
    singleItem: true,
  });
}
