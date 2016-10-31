(function() {
  'use strict';

  angular
    .module('trinetix')
    .directive('mainTemplate', mainTemplate);

  /** @ngInject */
  function mainTemplate() {
    var directive = {
      templateUrl: 'app/main/main.html',
      restrict: 'E'
    };
    return directive;
  }

})();
