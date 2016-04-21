(function() {

var app = angular.module("dvdStore", ['dvdStore-directives','ngRoute']);


app.config(['$routeProvider', function($routeProvider){

  $routeProvider.
      when('/movies', {
        templateUrl: 'templates/movie-list.html',
        controller: 'StoreController',
        controllerAs: 'store'
      }).
      when('/movie/:movieId', {
        templateUrl: 'templates/movie-single.html',
        controller: 'MovieController',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/movies'
      })

}]);

app.controller("MovieController", ["$scope", "$routeParams","$http", function($scope, $routeParams,$http){

  this.movie_id = $routeParams.movieId;
  $scope.dvd ={}

  var detail = this;

  var promise = $http.get("/films.json");
  promise.success(function(data){
    $scope.dvd = data[detail.movie_id];
  });

}])



app.controller("StoreController", ["$http", function($http){

  this.products = [];
  //initialiser un loader

  var promise = $http.get("/films.json");
  var store = this;

  promise.success(function(data){
    store.products = data;
    //supprimer un loader
  });

}]);



})();
