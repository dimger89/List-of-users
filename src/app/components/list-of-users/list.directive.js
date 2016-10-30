(function() {
  'use strict';

  angular
    .module('trinetix')
    .directive('listOfUsers', listOfUsers);

  listOfUsers.$inject = ['ListService', '$log', '$timeout', '$window'];

  function listOfUsers(ListService, $log, $timeout, $window) {
    var directive = {
      templateUrl: 'app/components/list-of-users/list.html',
      link: link,
      restrict: 'E'
    };
    return directive;

    function link(scope) {
      loadUsers();
      function loadUsers() {
        scope.spinner = true;
        scope.users = ListService.getUsers();
        scope.spinner = false;
      }

      scope.filters = {};

      scope.filters.age = [
        {minVal: 0, maxVal: 100},
        {minVal: 0, maxVal: 10},
        {minVal: 10, maxVal: 20},
        {minVal: 20, maxVal: 30},
        {minVal: 30, maxVal: 40},
        {minVal: 40, maxVal: 99}
      ];

      scope.selectFilter = function (filter) {
        scope.filters.selected = filter;
      };

      scope.pagination = {
        paginationType: ['traditional', 'endless scroll'],
        paginationNumber: [5, 10, 15],
        selectedType: 'traditional',
        selectedNumber: 10,
        showFrom: 0,
        labels: function () {
          $timeout(function () {
            scope.labels = (scope.users.length/scope.pagination.selectedNumber);
          }, 0);
        }
      };

      scope.pagination.labels();

      scope.getNumber = function(num) {
        return new Array(num);
      };

      scope.setShowFrom = function (val) {
        if(val===0) {
          scope.pagination.showFrom = 0
        } else {
          scope.pagination.showFrom = scope.pagination.selectedNumber * val;
        }
      };

      function resetPagination() {
        scope.pagination.selectedNumber = 10;
        scope.pagination.showFrom = 0;
      }

      scope.checkPagination = function (selectedType) {
        resetPagination();
        if (selectedType === 'endless scroll') {
          scope.pagination.selectedNumber = 35;
        }
      };

      angular.element($window).on("scroll", function() {
        if  ($(window).scrollTop() == $(document).height() - $(window).height()) {
          if(scope.pagination.selectedNumber <= scope.users.length) {
            scope.pagination.selectedNumber += 10;
          }
          (!scope.$$phase) && scope.$apply();
        }
      });

      scope.orderByMe = function(x) {
        scope.myOrderBy = x;
      }

    }

  }

})();
