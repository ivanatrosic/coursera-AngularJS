(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/MenuApp/components/categories.component.template.html',
    bindings: {
      categoriesList: '<'
    }
  });

})();
