(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/MenuApp/components/items.component.template.html',
    bindings: {
      items: '<',
      classes: '@',
      categoryName: '@'
    }
  });

})();
