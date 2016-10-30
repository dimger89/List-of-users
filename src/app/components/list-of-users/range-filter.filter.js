(function() {
  'use strict';

  angular
    .module('trinetix')
    .filter('rangeFilter', rangeFilter);

  rangeFilter.$inject = ['ListService'];

    function rangeFilter(ListService) {
      return function(items, rangeInfo) {
        var allItems = ListService.getUsers();
        var filtered = [];
        if(rangeInfo) {
          var rangeObj = angular.fromJson(rangeInfo);
          var min = parseInt(rangeObj.minVal);
          var max = parseInt(rangeObj.maxVal);
          angular.forEach(allItems, function(item) {
            if( item.age >= min && item.age <= max ) {
              filtered.push(item);
            }
          });
          return filtered;
        } else {
          return allItems;
        }
      }
    }

})();
