jQuery(function($){
	var tabs = $('[data-tabs]').find('.tab-items a');
	tabs.each(function(indx, elem) {

		if ($(elem).hasClass('active')) {
			var elemId = $(elem).attr('href');
			// $(elemId).css('display', 'block');
			$(elem).parents('.tabs').find(elemId).show();

	}
	});
	tabs.on('click', function(event){
		// event.preventDefault();
		if (!$(this).hasClass('active')) {
			var currentElemId = $(this).attr('href');
			$(this).siblings('.tab-items a').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.tabs').find('.tab-content').hide();
			$(this).parents('.tabs').find(currentElemId).show(400);

		}

	})
console.log($(this))
});



