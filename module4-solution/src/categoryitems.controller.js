(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController);

  // Version with resolving to 1 item based on $stateParams in route config
  CategoryItemsController.$inject = ['$stateParams', 'items'];
  function CategoryItemsController($stateParams, items) {
    var categoryItems = this;

    categoryItems.category_name = $stateParams.category_name;

    categoryItems.items = items.data.menu_items;
  }

})();
