/**
 * Created by g-man on 8/28/16.
 */

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

    // $http.get($scope.elementUrls[0]).success(function (response) {
    //     $scope.element1 = response;
    //     console.log(response);
    // });
    //
    // $http.get($scope.elementUrls[1]).success(function (response) {
    //     $scope.element2 = response;
    //     console.log(response);
    // });

    // for(var i=0; $scope.elementUrls.length; i++){
    //
    // }
});