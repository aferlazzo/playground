
// myModule
angular.module ( 'myModule', [] )
	.controller ( 'myController', function($scope) {
	$scope.name = 'Whirled';

	function toggle() {
		alert("toggling");
		if ($scope.myClass == 'red') {
			$scope.myClass = 'blue';
		} else {
			$scope.myClass = 'red';
		}
	}
});