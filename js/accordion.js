$('#accordion').find('.accordion-content').hide();

// Accordion
$('#accordion').find('.accordion-header').on('click', function () {
  var next = $(this).next();
  next.slideToggle('fast');
  $('.accordion-content').not(next).slideUp('fast');
  return false;
});
