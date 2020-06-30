"use strict";

window.onload = function () {
  var phoneBack = false;

  if (localStorage.getItem('tems')) {
    $('.notice').addClass('notice-destroy');
  } else {
    $('.notice').removeClass('notice-destroy');
  }

  phone();

  function phone() {
    if (phoneBack == false) {
      $('.mobile').css('left', '30%');
      $('.name2').addClass('name-active');
      $('.arrow2').addClass('arrow-active');
      setTimeout(function () {
        $('.names').removeClass('name-active');
        $('.arrows').removeClass('arrow-active');
        phoneBack = true;
        phone();
      }, 2000);
    } else {
      $('.name1').addClass('name-active');
      $('.arrow1').addClass('arrow-active');
      $('.mobile').css('left', '10%');
      setTimeout(function () {
        $('.names').removeClass('name-active');
        $('.arrows').removeClass('arrow-active');
        phoneBack = false;
        phone();
      }, 2000);
    }
  }

  $('.btn-true').on('click', function (e) {
    e.preventDefault();
    destroyNotice();
    localStorage.setItem('tems', 'true');
  });
  $('.btn-false').on('click', function (e) {
    e.preventDefault();
    destroyNotice(); //localStorage.setItem('tems','false');
  });

  function destroyNotice() {
    $('.notice').addClass('notice-destroy');
  }
};