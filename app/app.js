var app = angular.module('myApp',[]);

app.controller ('dataController',function ($scope,$http) {

  	$scope.sortingOrder = '';
    $scope.reverse = false;
    var url = "http://jsonplaceholder.typicode.com/posts";
    //get the data from server
    $http.get(url).then( function(response) {
       $scope.tableData = response.data;
    });

    //function to sort
    $scope.sort_table = function(newSortingOrder) {
        if (newSortingOrder){
            $scope.reverse = !$scope.reverse;
        }
        $scope.sortingOrder = newSortingOrder;
    };
});
