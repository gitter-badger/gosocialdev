(function () {
  'use strict';

  angular.module('app', ['ngResource', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
    .controller('AppController', AppController);

  AppController.$inject = ['Underscore'];

  function AppController(_) {
    var ctrl = this;

    ctrl.opts = {
      newTodo: {},
      _: _
    };

    ctrl.list = [{
      "title": "cartofi",
      "completed": false,
      "id": "1ac56c711f3759ff"
    }, {
      "title": "kit-kat",
      "completed": false,
      "id": "297cc78fc7035b37"
    }, {
      "title": "vafe",
      "completed": true,
      "id": "552eec67f31568c0"
    }];
  }

  AppController.prototype.add = function () {
    var ctrl = this;
    var _ = ctrl.opts._;
    if (ctrl.form.$valid) {
      var element = _.findWhere(ctrl.list, {
        id: ctrl.opts.newTodo.id
      });
      if (element) {
        var i = ctrl.list.indexOf(element);
        ctrl.list[i] = ctrl.opts.newTodo;
      } else {
        ctrl.list.push(ctrl.opts.newTodo);
      }
      ctrl.opts.newTodo = {};
      //      ctrl.form.$setPristine();
      //      ctrl.form.$setSubmitted();
      ctrl.form.$setUntouched();
    }
  };

  AppController.prototype.delete = function (index) {
    var ctrl = this;
    ctrl.list.splice(index, 1);
  };

  AppController.prototype.edit = function (index) {
    var _ = this.opts._;
    this.opts.newTodo = _.clone(this.list[index]);
  };
})();
