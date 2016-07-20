'use strict';

var Body = (function() {

  return {
    setBg: function() {
      if ($(window).innerWidth() <= 640) {
        $('body').css({background: 'url("public/img/bg-pattern.png"),url("public/img/bg-640.jpg") no-repeat top, #eaeaea'});
      } else if ($(window).innerWidth() == 1280) {
        $('body').css({background: 'url("public/img/bg-pattern.png"),url("public/img/bg-1280.jpg") no-repeat top, #eaeaea'});
      } else if ($(window).innerWidth() > 1280 && $(window).innerWidth() <= 1920) {
        $('body').css({background: 'url("public/img/bg-pattern.png"),url("public/img/bg-1920.jpg") no-repeat top, #eaeaea'});
      } else if ($(window).innerWidth() > 1920) {
        $('body').css({background: 'url("public/img/bg-pattern.png"),url("public/img/bg-original.jpeg") no-repeat top, #eaeaea'});
      }
    }
  };

}());

$(document).ready(function() {

  $('footer nav a').on('click', function() {
    $(this).addClass('active')
           .parent()
           .siblings()
           .children('a')
           .removeClass('active');

    if ($(this).hasClass('moder')) {
      location.href = '/moder.php';
    }

  });

});

function ngViewReady() {

  $('main').css({marginTop: $('#logo').innerHeight() + 20 });

  Body.setBg();

  $(window).on('resize', function() {
    Body.setBg();
  });
}