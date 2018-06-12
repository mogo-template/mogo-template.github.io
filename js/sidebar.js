

$('#accordeon').find('.accordeon__body').hide();

// Accordion
$('#accordeon').find('.accordeon__head').on('click', function () {
  var next = $(this).next();
  next.slideToggle('fast');
  $('.accordeon__body').not(next).slideUp('fast');
  return false;
});




// $(function() {
//     $('.accordeon__head').click(function() {
//         // $(".sidebar__elem_dropped").not($(this)).removeClass("sidebar__elem_dropped");
//         // $(".sidebar__elem").addClass("sidebar__elem");
//         // $(this).toggleClass("sidebar__elem_dropped");

//          $('.accordeon__body').not($(this).next()).slideUp(100);
// // открываем или скрываем блок под заголовком, по которому кликнули
//     $(this).next().slideToggle(500);
//     })
// });
