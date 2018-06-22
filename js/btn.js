$('.burger-button').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('goto-cross').toggleClass('goto-burger');
  $('body').toggleClass('active');
});

$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".burger-button").length == 0 && $target.closest(".navigation").length == 0) {
    $("body").removeClass("active");
    $(".burger-button").removeClass("goto-cross").addClass("goto-burger");
  }
  });