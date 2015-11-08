(function(){
  'use strict';

  angular.module('app')
    .factory('Underscore', Underscore);

  Underscore.$inject = ["$window"];

  function Underscore($window){
    return $window._;
  }

})();
