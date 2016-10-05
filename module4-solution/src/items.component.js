(function() {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'template/items.template.html',
      bindings: {
        items: '<'
      }
    });
})();
