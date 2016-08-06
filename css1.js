var myCssModule = angular.module("MyCssModule",[]);
myCssModule.controller('CssCtrl',['$scope',function($scope){
	$scope.color = 'red';
	$scope.setGreen = function(){
		$scope.color = 'green';
	}
	$scope.setRed = function(){
		$scope.color = 'red';
	}
}])