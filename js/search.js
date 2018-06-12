$(function() {
    $(".js-search-btn").click(function() {
        $(".navigation__item_search").toggleClass("active");
    });

    $(document).mouseup(function(e) {
		var $target = $(e.target);
		if ($target.closest(".js-search-btn").length == 0 && $target.closest(".navigation__item_search").length == 0) {
		  $(".navigation__item_search").removeClass("active");
		}
	  });

});