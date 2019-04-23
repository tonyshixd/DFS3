$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $('.content_white').toggleClass("on");
  $('.main_content').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});