
(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$stateParams', 'items'];
  function ItemsController($stateParams, items) {
    var categoryItems = this;

    categoryItems.category_name = $stateParams.category_name;

    categoryItems.items = items.data.menu_items;
  }

})();
