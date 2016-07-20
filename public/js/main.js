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

    // setTimeout(function() {
    //   var url = window.location.pathname;
    //   if (url == '/') {
    //     $('main .title').remove();
    //     $('main .page .ng-viewha').unwrap();
    //     $('main .page').remove();
    //     $('main .hide-scroll').remove();
    //   } else if (url == '/blog' && $('.ng-viewha').parent() != $('.page')) {
    //     $('main').prepend('<div class="title"><h2>Блог</h2></div>');
    //     $('.ng-viewha').wrap('<div class="page"></div>');
    //     $('main').append('<div class="hide-scroll"></div>');
    //   }
    // }, 100);

  });

});

function player() {
  var filterBtn = $('#music .filter a');
  var musicGroup = $('#music .music-group');
  var active;
  var _iframe = document.querySelectorAll('#music iframe');

  for (var i = 0; i < _iframe.length; i++) {
    if(_iframe[i].contentDocument.readyState == 'complete') {
      setTimeout(function() {
        $('#music .music-group.imprintband').append('<div class="music-item"><iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/99324583&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false&amp;download=false&amp;buying=false&amp;show_artwork=false"></iframe></div>');
      }, 3000);
    }
  }

  for (var i = 0; i < filterBtn.length; i++) {
    if (filterBtn.eq(i).hasClass('active')) {
      active = filterBtn.eq(i);
    }
  }

  showMusicGroup();

  filterBtn.on('click', function() {
    var _this = $(this);
    hideMusicGroup(function() {
      _this.addClass('active')
           .siblings()
           .removeClass('active');

      showMusicGroup(_this);
    });
  });

  function showMusicGroup(_this) {

    for (var i = 0; i < musicGroup.length; i++) {
      if (_this) {
        if (_this.text() == musicGroup.eq(i).data().set) {
          musicGroup.eq(i).stop().fadeIn();
        }
      } else {
        if (active.text() == musicGroup.eq(i).data().set) {
          musicGroup.eq(i).stop().fadeIn();
        }
      }
    }
  }

  function hideMusicGroup(callback) {
    musicGroup.stop().fadeOut();

    callback();
  }
}

function ngViewReady() {

  $('main').css({marginTop: $('#logo').innerHeight() + 20 });

  Body.setBg();

  $(window).on('resize', function() {
    Body.setBg();
  });
}