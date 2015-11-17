(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])


//# sourceMappingURL=app.js.map
