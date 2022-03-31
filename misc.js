(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required

    function addActiveClass(element) {
      if (current === "") {
        //for root url
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        //for other url
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    $('.horizontal-menu .nav li a').each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });


    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if (!body.hasClass("rtl")) {
        if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
          const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
        }
        if ($('.chats').length) {
          const chatsScroll = new PerfectScrollbar('.chats');
        }
        if (body.hasClass("sidebar-fixed")) {
          var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
        }
      }
    }

    $('[data-toggle="minimize"]').on("click", function() {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

    //fullscreen
    $("#fullscreen-button").on("click", function toggleFullScreen() {
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    })
  });
})(jQuery);

//Open and close tex areas for questionnaire
    function q1n1show() {
        if($('#q1n1').css('display') === 'block'){
          document.getElementById('q1n1').style.display="none"
        }
        else{
          document.getElementById('q1n1').style.display="block"
        }
    }
    function q2n1show() {
        if($('#q2n1').css('display') === 'block'){
          document.getElementById('q2n1').style.display="none"
        }
        else{
          document.getElementById('q2n1').style.display="block"
        }
    }
    function q3n1show() {
        if($('#q3n1').css('display') === 'block'){
          document.getElementById('q3n1').style.display="none"
        }
        else{
          document.getElementById('q3n1').style.display="block"
        }
    }
    function q4n1show() {
        if($('#q4n1').css('display') === 'block'){
          document.getElementById('q4n1').style.display="none"
        }
        else{
          document.getElementById('q4n1').style.display="block"
        }
    }
    function q5n1show() {
        if($('#q5n1').css('display') === 'block'){
          document.getElementById('q5n1').style.display="none"
        }
        else{
          document.getElementById('q5n1').style.display="block"
        }
    }
    function q6n1show() {
        if($('#q6n1').css('display') === 'block'){
          document.getElementById('q6n1').style.display="none"
        }
        else{
          document.getElementById('q6n1').style.display="block"
        }
    }
    function q7n1show() {
        if($('#q7n1').css('display') === 'block'){
          document.getElementById('q7n1').style.display="none"
        }
        else{
          document.getElementById('q7n1').style.display="block"
        }
    }
    function q8n1show() {
        if($('#q8n1').css('display') === 'block'){
          document.getElementById('q8n1').style.display="none"
        }
        else{
          document.getElementById('q8n1').style.display="block"
        }
    }
    function q9n1show() {
        if($('#q9n1').css('display') === 'block'){
          document.getElementById('q9n1').style.display="none"
        }
        else{
          document.getElementById('q9n1').style.display="block"
        }
    }
    function q10n1show() {
        if($('#q10n1').css('display') === 'block'){
          document.getElementById('q10n1').style.display="none"
        }
        else{
          document.getElementById('q10n1').style.display="block"
        }
    }
    function q11n1show() {
        if($('#q11n1').css('display') === 'block'){
          document.getElementById('q11n1').style.display="none"
        }
        else{
          document.getElementById('q11n1').style.display="block"
        }
    }
    function q12n1show() {
        if($('#q12n1').css('display') === 'block'){
          document.getElementById('q12n1').style.display="none"
        }
        else{
          document.getElementById('q12n1').style.display="block"
        }
    }
    function q13n1show() {
        if($('#q13n1').css('display') === 'block'){
          document.getElementById('q13n1').style.display="none"
        }
        else{
          document.getElementById('q13n1').style.display="block"
        }
    }
    function q14n1show() {
        if($('#q14n1').css('display') === 'block'){
          document.getElementById('q14n1').style.display="none"
        }
        else{
          document.getElementById('q14n1').style.display="block"
        }
    }
    function q15n1show() {
        if($('#q15n1').css('display') === 'block'){
          document.getElementById('q15n1').style.display="none"
        }
        else{
          document.getElementById('q15n1').style.display="block"
        }
    }
    function q16n1show() {
        if($('#q16n1').css('display') === 'block'){
          document.getElementById('q16n1').style.display="none"
        }
        else{
          document.getElementById('q16n1').style.display="block"
        }
    }
    function q17n1show() {
        if($('#q17n1').css('display') === 'block'){
          document.getElementById('q17n1').style.display="none"
        }
        else{
          document.getElementById('q17n1').style.display="block"
        }
    }
    function q18n1show() {
        if($('#q18n1').css('display') === 'block'){
          document.getElementById('q18n1').style.display="none"
        }
        else{
          document.getElementById('q18n1').style.display="block"
        }
    }
    function q19n1show() {
        if($('#q19n1').css('display') === 'block'){
          document.getElementById('q19n1').style.display="none"
        }
        else{
          document.getElementById('q19n1').style.display="block"
        }
    }
    function q20n1show() {
        if($('#q20n1').css('display') === 'block'){
          document.getElementById('q20n1').style.display="none"
        }
        else{
          document.getElementById('q20n1').style.display="block"
        }
    }
    function q21n1show() {
        if($('#q21n1').css('display') === 'block'){
          document.getElementById('q21n1').style.display="none"
        }
        else{
          document.getElementById('q21n1').style.display="block"
        }
    }
    function q22n1show() {
        if($('#q22n1').css('display') === 'block'){
          document.getElementById('q22n1').style.display="none"
        }
        else{
          document.getElementById('q22n1').style.display="block"
        }
    }
    function q23n1show() {
        if($('#q23n1').css('display') === 'block'){
          document.getElementById('q23n1').style.display="none"
        }
        else{
          document.getElementById('q23n1').style.display="block"
        }
    }
    function q24n1show() {
        if($('#q24n1').css('display') === 'block'){
          document.getElementById('q24n1').style.display="none"
        }
        else{
          document.getElementById('q24n1').style.display="block"
        }
    }

