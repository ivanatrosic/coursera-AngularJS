(function () {
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'template/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'template/categories.template.html',
        controller: 'CategoriesController as categoriesList',
        resolve: {
          categoriesItems: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('category-detail', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'template/categories.template.html',
        controller: 'ItemsController as itemsCtrl',
        params: {
          short_name: null,
          category_name: null
        },
        resolve: {
          categoryItems: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
            console.log('StateParams', $stateParams);
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      })

      ;
  }
})();
