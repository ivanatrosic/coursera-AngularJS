(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective () {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundList',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController () {
  var foundList = this;

  foundList.isEmpty = function () {
    return  foundList.items.length == 0;
  }
}

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.narrowit = function () {
    if (list.searchTerm == undefined ||list.searchTerm.length == 0) {
      list.found = [];
    } else {
      var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

      promise.then(function (result) {
        list.found = result;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  list.remove= function (index) {
    list.found.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    })
    .then(function (response) {
      var menuItems = response.data.menu_items;
      var foundItems = [];
      var i;
      for (i in menuItems){
      	if (menuItems[i].description.includes(searchTerm)) {
      	  foundItems.push(menuItems[i]);
      	}
      }

      return foundItems;
    })
  };
}

})();
