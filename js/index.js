/*  JS by Henrique Carvalho */
$(document).ready(function() {

  var text = "Hello! Could I build your idea? :)";
  var index = 0;
  var chars = text.length - 1;
  var speed = 100;
  var div = "message";

  function typing() {

    document.getElementById(div).innerHTML += text[index];

    if (index < chars) {
      setTimeout(function() {
        index++;
        typing();
      }, speed);
    }

    setTimeout(function() {
      loadingCSS();
    }, 0);
  }

  function loadingCSS() {
    $('#apresentation').addClass("slideDown");
    $('#avatar').addClass("moveToCenterAvatar");
    $('#myName').addClass("moveToCenterTitle");
    $('#myCh').addClass("moveToCenterTitle");
  }

  // When the browser is load or reaload
  $(window).load(function() {
    setTimeout(function() {
      typing();
    }, 1000);
  });

  //animation with scroll
  $(window).scroll(function() {
    $('.animated').each(function() {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 300) {
        $(this).addClass("slideUp");
      }
    });
  });

  //Check characters left
  $('#message').keyup(function() {
    var left = 250 - $(this).val().length;
    if (left < 0) {
      left = 0;
    }
    $('#counter').text(left + '/0');
  });

  //Scroll the page automatically
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});