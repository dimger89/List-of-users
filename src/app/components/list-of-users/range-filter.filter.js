(function() {
  'use strict';

  angular
    .module('trinetix')
    .filter('rangeFilter', rageFilter);

    function rageFilter() {
      return function(items, rangeInfo) {
        var filtered = [];
        if(rangeInfo) {
          var rangeObj = angular.fromJson(rangeInfo);
          var min = parseInt(rangeObj.minVal);
          var max = parseInt(rangeObj.maxVal);
          angular.forEach(items, function(item) {
            if( item.age >= min && item.age <= max ) {
              filtered.push(item);
            }
          });
          return filtered;
        } else {
          return items;
        }
      }
    }

})();
