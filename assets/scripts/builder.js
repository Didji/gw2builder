(function ($) {
	'use strict';
	//var professions = ['elementalist', 'engineer', 'guardian', 'mesmer', 'necromancer', 'ranger', 'revenant', 'thief', 'warrior'];
	var $builder = $('#builder');
	var CURRENT_PROFESSION = '';
	$builder.find('#professionSelection div').each(function () {
		$(this).on('click', function () {
			$('.selected').removeClass('selected');
			$(this).addClass('selected');

			loadProfession($(this).data('profession'));
		});
	});

	function loadProfession(profession) {
		CURRENT_PROFESSION = profession;
	}
})(jQuery);