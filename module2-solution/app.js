(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  list1.items=ShoppingListCheckOffService.gettobuy();
  list1.bought=function (itemindex)
  {
    ShoppingListCheckOffService.itembought(itemindex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.items=ShoppingListCheckOffService.getbought();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyItems = [
     {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Chips",
      quantity: "3"
    }];
  var boughtItems= [];




  service.gettobuy = function () {
    return tobuyItems;
  };

  service.getbought = function () {
    return boughtItems;
  };

  service.itembought = function (itemindex) {
    var item = tobuyItems.splice(itemindex, 1)[0];
    boughtItems.push(item);
}
}


})();
