$(function() {
    $(".js-search-btn").click(function() {
        $("li:last-child").toggleClass("active");
    });

    $(document).mouseup(function(e) {
		var $target = $(e.target);
		if ($target.closest(".js-search-btn").length == 0 && $target.closest(".navigation__item_search").length == 0) {
		  $(".navigation__item_search").removeClass("active");
		}
	  });
});