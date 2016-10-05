(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/MenuApp/templates/home.template.html'
    })

    // Categories list page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/MenuApp/templates/categories.template.html',
      controller: 'CategoriesController as categoriesList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // Category's Items
    .state('categories.items', {
      url: '/category/{short_name}',
      templateUrl: 'src/MenuApp/templates/items.template.html',
      controller: 'CategoryItemsController as categoryItems',
      params: {
        short_name: null,
        category_name: null
      },
      resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.short_name);
        }]
      }
    });

  }

})();
