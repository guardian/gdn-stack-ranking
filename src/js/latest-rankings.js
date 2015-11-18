
function controller($http) {
	var vm = this;

	vm.test = "Hello world";

	console.log('Booting controller!');

	var request = {
		url: '/api/latest-rankings',
		method: 'GET'
	}

	$http(request)
		.then((data) => console.log(data),
			() => console.log('Api read failed'));
}

function directive() {
	return {
		templateUrl: 'static/html/latest-rankings.html',
		controller: controller,
		controllerAs: 'vm',
		bindToController: true
	};
}

module.exports = {
	directive: directive,
	controller: controller
};