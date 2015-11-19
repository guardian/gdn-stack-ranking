var msgpack = require("msgpack-lite");

function rankController($http) {
	var vm = this;

	vm.test = "Hello world";

	vm.name = undefined;

	vm.roles =['Associate Software Developer',
		'Software Developer',
		'Senior Software Developer',
		'Lead Software Developer',
		'Principal Software Developer'];

	vm.role = vm.roles[1];

	vm.grades = ['Too new to call',
		'Does not meet expectations',
		'Successfully meets expectations',
		'Exceeds expectations',
		'Exceptional'];

	vm.grade = vm.grades[2];

	vm.quarters = ['1', '2', '3', '4'];

	vm.quarter = vm.quarters[0];

	vm.years = [{year: '2015', label: '2015-2016'}];

	vm.year = vm.years[0];

	vm.submit = () => {
		console.log('Hello! Form should be submitting here!');

		var request = {
			method: 'PUT',
			url: '/api/ranking',
			headers: {
				'Content-Type': 'application/msgpack'
			},
			data: msgpack.encode({
				name: vm.name,
				role: vm.role,
				year: vm.year.year,
				quarter: vm.quarter,
				grade: vm.grade
			})
		}
		$http(request).then(() => vm.name = undefined,
			() => console.log('Ranking post failed'));
	}

};

function directive() {

	return {
		templateUrl: '/static/html/rank-form.html',
		controller: rankController,
		controllerAs: 'vm',
		bindToController: true,
		scope: {
			vm: '='
		}
	};

};

module.exports = {
	controller: rankController,
	directive: directive
};
