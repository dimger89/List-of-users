(function() {
  'use strict';

  angular
    .module('trinetix')
    .directive('mainTemplate', mainTemplate);

  /** @ngInject */
  function mainTemplate() {
    var directive = {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'main',
      restrict: 'E'
    };
    return directive;
  }

  function MainController($timeout, toastr, $log) {
    var vm = this;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1477755536892;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
        vm.showToastr();
      }, 4000);
    }

    function showToastr() {
      $log.log(12);
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
  }

})();
