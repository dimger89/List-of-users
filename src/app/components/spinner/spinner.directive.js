(function() {
  'use strict';

  angular
    .module('trinetix')
    .directive('spinner', spinner);

  function spinner() {
    var directive = {
      templateUrl: 'app/components/spinner/spinner.html',
      restrict: 'E',
      scope: {
        spin: '='
      }
    };
    return directive;

  }

})();
