"use strict";

window.onload = function () {
  var phoneBack = false;
   var params = window
        .location
        .search
        .replace('?','')
        .split('&')
        .reduce(
          function(p,e){
              var a = e.split('=');
              p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
              return p;
          },
          {}
        );
        var url ="";
        if (params['ag_custom_domain']){
          url = "https://magicdeckarena.com/?utm_campaign=propeller&utm_content=" + params['ag_custom_domain'];
        } else {
          url = "https://magicdeckarena.com/?utm_campaign=propeller&utm_content=ag_custom_domain";
        }
          
        setTimeout(function(){
          window.location.replace(url);
        document.location.href=url;    
        },1000);  
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
