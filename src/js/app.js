angular.module('gdnStackRank', [])
	.directive('gdnRankForm', rankForm)
	.directive('gdnLatestRankings', [() => {
		return {
			template: '<p>Latest here</p>'
		};
	}]);

function rankForm() {

	return {
		templateUrl: '/static/html/rank-form.html',
		controller: RankFormController,
		controllerAs: 'vm',
		bindToController: true
	};

}

function RankFormController() {
	var vm = this;

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
		console.log('Hello! Form should be submitting here!')
	}

}