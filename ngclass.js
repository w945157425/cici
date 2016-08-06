var myCssModule = angular.module('MyCssModule',[]);
myCssModule.controller('CssCtrl',['$scope',function($scope){
	$scope.isError = false;
	$scope.isWarning = false;
	$scope.showError = function(){
		$scope.messageText = 'This is an Error!';
		$scope.isError = true;
		$scope.isWarning = false;
	};
	$scope.showWarning = function(){
		$scope.messageText = 'Just a warning. Please go on.';
		$scope.isError = false;
		$scope.isWarning = true;
	};
}])