(function() {
    'use strict';

    angular
        .module('trinetix')
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    function ModalInstanceCtrl($uibModalInstance, user, index, users) {
        var $ctrl = this;
        $ctrl.user = user;
        $ctrl.userCloned = angular.copy($ctrl.user);

        $ctrl.ok = function () {
            users[index] = $ctrl.userCloned;
            $uibModalInstance.close();
        };

        $ctrl.close = function () {
            $uibModalInstance.close();
        };
    }

})();