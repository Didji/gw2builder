$(document).ready(function () {
	'use strict';
	//var professions = ['elementalist', 'engineer', 'guardian', 'mesmer', 'necromancer', 'ranger', 'revenant', 'thief', 'warrior'];
	var $builder = $('#builder'),
		$weaponSelection = $('#weaponSelection');

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
			$('.professionSelected').removeClass('professionSelected');
			$(this).addClass('professionSelected');

			resetBuilder();
			loadProfession($(this).data('profession'));
		});
	});

	$weaponSelection.on('click', '.weapon-icon', function() {
		$('.weaponSelected').removeClass('weaponSelected');
		$(this).addClass('weaponSelected');
	});

	function loadProfession(profession) {
		CURRENT_PROFESSION = profession;
		var url = './data/' + profession + '.json';

		$.get(url,
			function (data) { parseProfessionData(data); },
			'json'
		);
	}

	function parseProfessionData(data) {
		CURRENT_SPECIALIZATIONS = data.specializations;
		CURRENT_WEAPONS = data.weapons;
		CURRENT_SKILLS = data.skills;
		CURRENT_STATS = data.stats;

		BASE_STATS += CURRENT_STATS;

		loadWeapons(CURRENT_WEAPONS);
		console.log(CURRENT_WEAPONS);
	}

	function loadWeapons(weapons) {
		$.each(weapons, function (slot, weapon){
			$.each(weapon, function (index, detail){
				$weaponSelection.append("<div class='" + detail + "-icon weapon-icon'></div>");
			});
		});
	}

	function resetBuilder() {
		$weaponSelection.empty();
	}
});