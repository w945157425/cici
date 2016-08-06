angular.module('HelloAngular',[])
	.controller('HelloAngularCtrl',['$scope',function($scope){
		$scope.greeting = {
			text:'Hello'
		};
	}])