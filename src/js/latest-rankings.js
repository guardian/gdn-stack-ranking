function controller($http) {
	var vm = this;

	vm.test = "Hello world";

	vm.latestRankings = [];

	console.log('Booting controller!');

	var request = {
		url: '/api/latest-rankings',
		method: 'GET'
	}

	$http(request)
		.then((result) => {
				console.log(result);
				console.log(result.data);
			},
			() => console.log('Api read failed'));
}

function directive() {
	return {
		templateUrl: 'static/html/latest-rankings.html',
		controller: controller,
		controllerAs: 'vm',
		bindToController: true,
		scope: {
			vm: '='
		}
	};
}

module.exports = {
	directive: directive,
	controller: controller
};