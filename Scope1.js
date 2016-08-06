function GreetCtrl($scope,$rootScope){
	$scope.name = 'world';
	$rootScope.department = 'angular';
}

function ListCtrl($scope){
	$scope.names = ['igor','nima','nimei'];
}