$(window).on('scroll', function () {
  if (window.pageYOffset > 450) {
    $("nav").addClass('bg-dark', 'shadow');
  } else {
    $("nav").removeClass('bg-dark', 'shadow');
  }
});