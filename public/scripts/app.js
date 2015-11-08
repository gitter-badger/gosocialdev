(function () {
  'use strict';

  angular.module('app', ['ngResource', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
    .controller('AppController', AppController);

  AppController.$inject = ['Underscore', 'Products'];

  function AppController(_, Products) {
    var ctrl = this;
    ctrl.productsService = Products;

    ctrl.opts = {
      newTodo: new Products(),
      _: _
    };

    ctrl.list = Products.query();
  }

  AppController.prototype.add = function () {
    var ctrl = this;
    var _ = ctrl.opts._;

    if (ctrl.form.$valid) {
      ctrl.opts.newTodo.$save().then(function (data) {
        var element = _.findWhere(ctrl.list, {
          id: data.id
        });
        if (element) {
          var i = ctrl.list.indexOf(element);
          ctrl.list[i] = data;
        } else {
          ctrl.list.push(data);
        }
        ctrl.opts.newTodo = new ctrl.productsService;
        //      ctrl.form.$setPristine();
        //      ctrl.form.$setSubmitted();
        ctrl.form.$setUntouched();
      }).catch(function (err) {
        console.log(err);
      });
    }
  };

  AppController.prototype.delete = function (todo) {
    var ctrl = this;
    var _ = ctrl.opts._;
    var res = confirm('Are you sure?');
    if (res) {
      var element = _.findWhere(ctrl.list, {
        id: todo.id
      });
      todo.$delete().then(function () {
        if (element) {
          var i = ctrl.list.indexOf(element);
          ctrl.list.splice(i, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };
  };

  AppController.prototype.edit = function (index) {
    var _ = this.opts._;
    this.opts.newTodo = _.clone(this.list[index]);
  };
})();
