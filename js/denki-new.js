  //font-日文字
  (function(d) {
    var config = {
      kitId: 'xdw0clx',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

//font-思源明體
  (function(d) {
    var config = {
      kitId: 'xdw0clx',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

//---------------------------分隔-------------------------

    //raining js
      var makeItRain = function() {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }

  $('.splat-toggle.toggle').on('click', function() {
    $('body').toggleClass('splat-toggle');
    $('.splat-toggle.toggle').toggleClass('active');
    makeItRain();
  });

  $('.back-row-toggle.toggle').on('click', function() {
    $('body').toggleClass('back-row-toggle');
    $('.back-row-toggle.toggle').toggleClass('active');
    makeItRain();
  });

  $('.single-toggle.toggle').on('click', function() {
    $('body').toggleClass('single-toggle');
    $('.single-toggle.toggle').toggleClass('active');
    makeItRain();
  });

  makeItRain();

//---------------------------分隔-------------------------

// logo jrumble抖動
$('#logo').jrumble({
  x: 1,
  y: 1,
  rotation: 0
});

$('#logo').jrumble({
  speed: 50
});

$('#logo').hover(function(){
  $(this).trigger('startRumble');
}, function(){
  $(this).trigger('stopRumble');
});

//頁尾logo抖動
$('#logo-btm').jrumble({
  x: 1,
  y: 1,
  rotation: 0
});

$('#logo-btm').jrumble({
  speed: 50
});

$('#logo-btm').hover(function(){
  $(this).trigger('startRumble');
}, function(){
  $(this).trigger('stopRumble');
});

//---------------------------分隔-------------------------

  $(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "100%" // this works just fine with duration 0 as well
        // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
        // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
      }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
      new ScrollMagic.Scene({
          triggerElement: slides[i]
        })
        .setPin(slides[i], {pushFollowers: false})
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    }
  });

//scroll opacity --- 滑動蠟燭fadein
$(window).scroll(function () {
        var offset = $(document).scrollTop()
        var opacity = 0;
        if (offset <= 0) {
            opacity = 0;
        } else if (offset > 0 & offset <= 800) {
            opacity = (offset - 1) / 1500;
        }
        else {
            opacity = 1;
        }
        $('#fixed-candle').css('opacity', opacity).html(opacity);
    });




//---------------------------分隔-------------------------
//螢火蟲-01
    var fireflies = 25;
var $container = $(".firefly-1 .container");
var $containerWidth = $container.width();
var $containerHeight = $container.height();
var master = new TimelineMax();

for (var i = 0; i < fireflies; i++) {
  var firefly = $('<div class="firefly"></div>');
  TweenLite.set(firefly, {
    x: Math.random() * $containerWidth,
    y: Math.random() * $containerHeight
  });
  $container.append(firefly);
  flyTheFirefly(firefly);
}

function flyTheFirefly(elm) {
  var flyTl = new TimelineMax();
  var fadeTl = new TimelineMax({
    delay: Math.floor(Math.random() * 2) + 1,
    repeatDelay: Math.floor(Math.random() * 6) + 1,
    repeat: -1
  });

  fadeTl.to(
    [elm],
    0.25,
    { opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true },
    Math.floor(Math.random() * 6) + 1
  );
  
  flyTl
    .set(elm, {scale: Math.random() * 0.75 + 0.5})
    .to(elm, Math.random() * 100 + 100, {
    bezier: {
      values: [
        {
          x: Math.random() * $containerWidth,
          y: Math.random() * $containerHeight
        },
        {
          x: Math.random() * $containerWidth,
          y: Math.random() * $containerHeight
        }
      ]
    },
    onComplete: flyTheFirefly,
    onCompleteParams: [elm]
  });
}

//螢火蟲-02
    var fireflies = 25;
var $container = $(".firefly-2 .container");
var $containerWidth = $container.width();
var $containerHeight = $container.height();
var master = new TimelineMax();

for (var i = 0; i < fireflies; i++) {
  var firefly = $('<div class="firefly"></div>');
  TweenLite.set(firefly, {
    x: Math.random() * $containerWidth,
    y: Math.random() * $containerHeight
  });
  $container.append(firefly);
  flyTheFirefly(firefly);
}

function flyTheFirefly(elm) {
  var flyTl = new TimelineMax();
  var fadeTl = new TimelineMax({
    delay: Math.floor(Math.random() * 2) + 1,
    repeatDelay: Math.floor(Math.random() * 6) + 1,
    repeat: -1
  });

  fadeTl.to(
    [elm],
    0.25,
    { opacity: 0.25, yoyo: true, repeat: 1, repeatDelay: 0.2, yoyo: true },
    Math.floor(Math.random() * 6) + 1
  );
  
  flyTl
    .set(elm, {scale: Math.random() * 0.75 + 0.5})
    .to(elm, Math.random() * 100 + 100, {
    bezier: {
      values: [
        {
          x: Math.random() * $containerWidth,
          y: Math.random() * $containerHeight
        },
        {
          x: Math.random() * $containerWidth,
          y: Math.random() * $containerHeight
        }
      ]
    },
    onComplete: flyTheFirefly,
    onCompleteParams: [elm]
  });
}

//---------------------------分隔-------------------------
//fog js

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function () {
  window_width = $(window).width();

  //  Activate the tooltips
  $('[data-toggle="tooltip"]').tooltip();

  //      Activate the switches with icons
  if ($(".switch").length != 0) {
    $(".switch")["bootstrapSwitch"]();
  }
  //      Activate regular switches
  if ($("[data-toggle='switch']").length != 0) {
    $("[data-toggle='switch']").bootstrapSwitch();
  }

  if ($(".tagsinput").length != 0) {
    $(".tagsinput").tagsInput();
  }
  if (window_width >= 768) {
    big_image = $('.page-header[data-parallax="true"]');

    if (big_image.length != 0) {
      $(window).on("scroll", pk.checkScrollForPresentationPage);
    }
  }

  if ($("#datetimepicker").length != 0) {
    $("#datetimepicker").datetimepicker({
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-screenshot",
        clear: "fa fa-trash",
        close: "fa fa-remove"
      },
      debug: true
    });
  }

  // Navbar color change on scroll
  if ($(".navbar[color-on-scroll]").length != 0) {
    $(window).on("scroll", pk.checkScrollForTransparentNavbar);
  }

  $(".btn-tooltip").tooltip();
  $(".label-tooltip").tooltip();

  // Carousel
  $(".carousel").carousel({
    interval: 4000
  });

  $(".form-control")
    .on("focus", function () {
      $(this).parent(".input-group").addClass("input-group-focus");
    })
    .on("blur", function () {
      $(this).parent(".input-group").removeClass("input-group-focus");
    });

  // Init popovers
  pk.initPopovers();

  // Init Collapse Areas
  pk.initCollapseArea();

  // Init Sliders
  pk.initSliders();
});

$(document).on("click", ".navbar-toggler", function () {
  $toggle = $(this);
  if (pk.misc.navbar_menu_visible == 1) {
    $("html").removeClass("nav-open");
    pk.misc.navbar_menu_visible = 0;
    setTimeout(function () {
      $toggle.removeClass("toggled");
      $("#bodyClick").remove();
    }, 550);
  } else {
    setTimeout(function () {
      $toggle.addClass("toggled");
    }, 580);

    div = '<div id="bodyClick"></div>';
    $(div)
      .appendTo("body")
      .click(function () {
        $("html").removeClass("nav-open");
        pk.misc.navbar_menu_visible = 0;
        $("#bodyClick").remove();
        setTimeout(function () {
          $toggle.removeClass("toggled");
        }, 550);
      });

    $("html").addClass("nav-open");
    pk.misc.navbar_menu_visible = 1;
  }
});

pk = {
  misc: {
    navbar_menu_visible: 0
  },

  checkScrollForPresentationPage: debounce(function () {
    oVal = $(window).scrollTop() / 3;
    big_image.css({
      transform: "translate3d(0," + oVal + "px,0)",
      "-webkit-transform": "translate3d(0," + oVal + "px,0)",
      "-ms-transform": "translate3d(0," + oVal + "px,0)",
      "-o-transform": "translate3d(0," + oVal + "px,0)"
    });
  }, 4),

  checkScrollForTransparentNavbar: debounce(function () {
    if ($(document).scrollTop() > $(".navbar").attr("color-on-scroll")) {
      if (transparent) {
        transparent = false;
        $(".navbar[color-on-scroll]").removeClass("navbar-transparent");
      }
    } else {
      if (!transparent) {
        transparent = true;
        $(".navbar[color-on-scroll]").addClass("navbar-transparent");
      }
    }
  }, 17),

  initPopovers: function () {
    if ($('[data-toggle="popover"]').length != 0) {
      $("body").append('<div class="popover-filter"></div>');

      //    Activate Popovers
      $('[data-toggle="popover"]')
        .popover()
        .on("show.bs.popover", function () {
          $(".popover-filter").click(function () {
            $(this).removeClass("in");
            $('[data-toggle="popover"]').popover("hide");
          });
          $(".popover-filter").addClass("in");
        })
        .on("hide.bs.popover", function () {
          $(".popover-filter").removeClass("in");
        });
    }
  },
  initCollapseArea: function () {
    $('[data-toggle="pk-collapse"]').each(function () {
      var thisdiv = $(this).attr("data-target");
      $(thisdiv).addClass("pk-collapse");
    });

    $('[data-toggle="pk-collapse"]')
      .hover(
        function () {
          var thisdiv = $(this).attr("data-target");
          if (!$(this).hasClass("state-open")) {
            $(this).addClass("state-hover");
            $(thisdiv).css({
              height: "30px"
            });
          }
        },
        function () {
          var thisdiv = $(this).attr("data-target");
          $(this).removeClass("state-hover");

          if (!$(this).hasClass("state-open")) {
            $(thisdiv).css({
              height: "0px"
            });
          }
        }
      )
      .click(function (event) {
        event.preventDefault();

        var thisdiv = $(this).attr("data-target");
        var height = $(thisdiv).children(".panel-body").height();

        if ($(this).hasClass("state-open")) {
          $(thisdiv).css({
            height: "0px"
          });
          $(this).removeClass("state-open");
        } else {
          $(thisdiv).css({
            height: height + 30
          });
          $(this).addClass("state-open");
        }
      });
  },
  initSliders: function () {
    // Sliders for demo purpose in refine cards section
    if ($("#sliderRegular").length != 0) {
      var rangeSlider = document.getElementById("sliderRegular");
      noUiSlider.create(rangeSlider, {
        start: [5000],
        range: {
          min: [2000],
          max: [10000]
        }
      });
    }
    if ($("#sliderDouble").length != 0) {
      var slider = document.getElementById("sliderDouble");
      noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
          min: 0,
          max: 100
        }
      });
    }
  }
};

examples = {
  initContactUsMap: function () {
    var myLatlng = new google.maps.LatLng(44.43353, 26.093928);
    var mapOptions = {
      zoom: 14,
      center: myLatlng,
      scrollwheel: false //we disable de scroll over the map, it is a really annoing when you scroll through page
    };
    var map = new google.maps.Map(
      document.getElementById("contactUsMap"),
      mapOptions
    );

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
