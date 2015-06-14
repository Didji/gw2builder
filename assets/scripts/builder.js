$(document).ready(function () {
	'use strict';
	//var professions = ['elementalist', 'engineer', 'guardian', 'mesmer', 'necromancer', 'ranger', 'revenant', 'thief', 'warrior'];
	var $builder = $('#builder');

	var BASE_STATS = {
		'health': 924,
		'armor': 924,
		'power': 924,
		'precision': 924,
		'ferocity': 0,
		'healing': 0,
		'condition': 0
	},
		CURRENT_PROFESSION = '',
		CURRENT_SPECIALIZATIONS = {},
		CURRENT_WEAPONS = {},
		CURRENT_SKILLS = {},
		CURRENT_STATS = {};

	$builder.find('#professionSelection div').each(function () {
		$(this).on('click', function () {
			$('.selected').removeClass('selected');
			$(this).addClass('selected');

			loadProfession($(this).data('profession'));
		});
	});

	function loadProfession(profession) {
		CURRENT_PROFESSION = profession;
		var url = './data/' + profession + '.json';

		$.get(url,
			function (data) {
				parseProfessionData(data);
			},
			'json'
		);
	}

	function parseProfessionData(data) {
		CURRENT_SPECIALIZATIONS = data.specializations;
		CURRENT_WEAPONS = data.weapons;
		CURRENT_SKILLS = data.skills;
		CURRENT_STATS = data.stats;

		BASE_STATS += CURRENT_STATS;
	}
});