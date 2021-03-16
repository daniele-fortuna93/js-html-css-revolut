$(function(){
  $('.main_nav_li').click(
    function () {
      if ( !$(this).children('.dropdown').hasClass('activeClick') ) {
        $('.dropdown').removeClass('activeClick');
        $(this).children('.dropdown').addClass('activeClick');

      } else {
        $(this).children('.dropdown').removeClass('activeClick active');

      }
    }
  );
  $('.main_nav_li').hover(
    function(){
      $('.dropdown').removeClass('activeClick');
      $(this).children('.dropdown').addClass('active activeClick');
    },
    function(){
      $(this).children('.dropdown').removeClass('active');
    }
  );
  $('.dropdown').mouseleave(
    function () {
      $('.dropdown').removeClass('active activeClick');
    }
  );
  }
);
