var rankForm = require("./rank-form");
var latestRankings = require("./latest-rankings");

var RankForm = rankForm.directive;

var RankFormController = rankForm.controller;
var LatestRankingsController = latestRankings.controller;

var am = angular.module('gdnStackRank', [])
	.directive('gdnRankForm', RankForm)
	.directive('gdnLatestRankings', latestRankings.directive);

RankFormController.$inject = ['$http'];

LatestRankingsController.$inject = ['$http'];

am.controller('RankFormController', RankFormController);
am.controller('LatestRankingsController', LatestRankingsController);