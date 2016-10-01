
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.mess=""
  $scope.checkbtn = function ()  {

    var ss=separatestring($scope.name);
    if (ss.length <= 3)  {$scope.mess = "Enjoy"}
    else  {$scope.mess = "Too much!"}
  };

  function separatestring(string) {
    var stringsep = string.split(',');
    return stringsep;
  }
}

})();
