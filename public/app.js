 (function(){

      'use strict';
     var app = angular.module('MyApp',['ngResource','ngAnimate','ngAria', 'ngMaterial'])
            .controller('AppController',AppController);


function AppController(){
var ctrl=this;
ctrl.message= 'hello team';
};

})();