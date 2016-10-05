(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'template/categories-component.template.html',
    bindings: {
      categoriesList: '<'
    }
  });

})();
