var rankForm = require("./rank-form");
var latestRankings = require("./latest-rankings");

var RankForm = rankForm.form;
var RankFormController = rankForm.controller;

var am = angular.module('gdnStackRank', [])
	.directive('gdnRankForm', RankForm)
	.directive('gdnLatestRankings', latestRankings.directive);

RankFormController.$inject = ['$http'];

am.controller('RankFormController', RankFormController);