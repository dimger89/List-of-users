(function() {
  'use strict';

  angular
    .module('trinetix')
    .directive('listOfUsers', listOfUsers);

  listOfUsers.$inject = ['ListService', '$log', '$timeout'];

  function listOfUsers(ListService, $log, $timeout) {
    var directive = {
      templateUrl: 'app/components/list-of-users/list.html',
      link: link,
      restrict: 'E'
    };
    return directive;

    function link(scope) {
      scope.spinner = true;
      scope.users = ListService.getUsers();
      scope.spinner = false;

      scope.pagination = {
        paginationType: ['traditional', 'endless scroll'],
        paginationNumber: [5, 10, 15],
        selectedType: 'traditional',
        selectedNumber: 10,
        labels: function () {
          $log.log(scope.labels);
          $timeout(function () {
            scope.labels = (scope.users.length/scope.pagination.selectedNumber)
          }, 0);
        }
      };

      scope.labels = scope.pagination.labels();

    }

  }

})();
