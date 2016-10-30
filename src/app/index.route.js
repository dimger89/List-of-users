(function() {
  'use strict';

  angular
    .module('trinetix')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<main-template></main-template>'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
