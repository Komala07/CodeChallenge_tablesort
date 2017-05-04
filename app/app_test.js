
describe('Unit Testing: Display data from Json', function () {

    var scope, $controllerConstructor, $http;
    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
        scope = $rootScope.$new();
        $controllerConstructor = $controller;
        httpBackend = $httpBackend;
        http = $http;
        httpBackend.when("GET", "http://jsonplaceholder.typicode.com/posts").respond(200, { id: 1 });
    }));

    it('Should make a call to server', function(){
       httpBackend.expectGET("http://jsonplaceholder.typicode.com/posts");
       $controllerConstructor('dataController', { $scope: scope, $http: http });
       httpBackend.flush();
       expect(scope.tableData).toEqual({ id: 1 })
    });


    it('should display data on JSON call to the table', function(){
       $controllerConstructor('dataController', { $scope: scope});
       scope.sortingOrder = '';
       scope.sort_table('id');
       expect(scope.sortingOrder).toBe('id');
       expect(scope.reverse).toBe(true);
    });

});