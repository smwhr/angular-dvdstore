(function() {

var app = angular.module('dvdStore-directives', []);

app.directive("productSynopsis", function(){
  return {
    restrict: "E",
    templateUrl: "product-synopsis.html"
  }
});

app.directive("productCasting", function(){
  return {
    restrict: "E",
    templateUrl: "product-casting.html"
  }
});


app.directive("productRecap", function(){
  return {
    restrict: "A",
    templateUrl: "product-recap.html"
  }
});

app.directive("productCritics", function(){
  return {
    restrict: "E",
    templateUrl: "product-critics.html",
    controller: function(){
      this.critic_preview = {}

      this.addCritic = function(product){
        product.critics.push(this.critic_preview);
      }
    },
    controllerAs:"criticCtrl"
  }
});


app.directive("productTabs", function(){
  return {
    restrict: "E",
    templateUrl: "product-tabs.html",
    controller: function(){
      this.tab = 1;

      this.setTab = function(t){
        //ping à google analytics
        this.tab = t;
      }

      this.isTab = function(t){
        return this.tab === t;
      }

    },
    controllerAs: "tabCtrl"
  }
});

})();