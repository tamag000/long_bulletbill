$(function() {
  $('.header-list a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top - 50;

    $('html, body').animate({
      'scrollTop': position
    }, 600);
  });

  $('.cup-icon').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top - 50;

    $('html, body').animate({
      'scrollTop': position
    }, 800);
  });

  $('.cup-icon').hover(
    function() {
      $(this).find('img').css('opacity', '0.9');
    },
    function() {
      $(this).find('img').css('opacity', '1');
    }
  );

  $('.longbb a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top - 50;

    $('html, body').animate({
      'scrollTop': position
    }, 400);
  });

  $('#twitter').hover(
    function() {
      $('#twitter').find('i').animate({
        'font-size': '20px'
      }, 500);

    },
    function() {
      $('#twitter i').animate({
        'font-size': '16px'
      }, 500);
    }
  );
});
