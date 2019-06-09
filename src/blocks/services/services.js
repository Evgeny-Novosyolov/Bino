(function ($) {
	$(function () {
		$(".services-block__buttons").on("click", ".services-block__button:not(.services-focus)", function () {
			$(this)
				.addClass("services-focus")
				.siblings()
				.removeClass("services-focus")
				.closest(".services-wrapper")
				.find(".services-block__wrapper")
				.removeClass("services-active")
				.eq($(this).index())
				.addClass("services-active");
		});
	});
})(jQuery);