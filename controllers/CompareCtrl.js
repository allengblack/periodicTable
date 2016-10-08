periodicTable.controller('CompareCtrl', function($scope, $http, PeriodicTableServiceData) {
    $scope.elements = PeriodicTableServiceData.getElementNames();

    $scope.clearArray = function () {
        PeriodicTableServiceData.clearArray();
    }

    $scope.checkSize = function () {
        if ($scope.elements.length > 0){return true}
        else
            return false
    }
});