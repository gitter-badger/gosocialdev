(function(){
  'use strict';

  angular.module('app')
    .factory('Products', Products);

  Products.$inject = ["$resource"];

  function Products($resource){
    return $resource('/products/:id', {
      id: "@id"
    });
  }
})();
