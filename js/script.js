$(function(){
  $('.main_nav_li').click(
    function () {
      if ( !$(this).children('.dropdown').hasClass('activeClick') ) {
        $('.dropdown').removeClass('activeClick');
        $(this).children('.dropdown').addClass('activeClick');
      } else {
        $(this).children('.dropdown').removeClass('activeClick');
        $(this).children('.dropdown').removeClass('active');
      }
    }
  );
  $('.main_nav_li').hover(
    function(){
      $('.dropdown').removeClass('activeClick');
      $(this).children('.dropdown').addClass('active');
      $(this).children('.dropdown').addClass('activeClick');
    },
    function(){
      $(this).children('.dropdown').removeClass('active');
    }
  );

  }
);
