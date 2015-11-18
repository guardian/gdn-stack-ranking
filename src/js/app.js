var rankForm = require("./rank-form");

var RankForm = rankForm.form;
var RankFormController = rankForm.controller;

var am = angular.module('gdnStackRank', [])
	.directive('gdnRankForm', RankForm)
	.directive('gdnLatestRankings', [() => {
		return {
			template: '<p>Latest here</p>'
		};
	}]);

console.log(RankForm);
console.log(RankFormController);

RankFormController.$inject = ['$http'];

am.controller('RankFormController', RankFormController);