/**
 * Created by g-man on 8/28/16.
 */

periodicTable.controller('CompareCtrl', function($scope, $http, PeriodicTableServiceData) {
    $scope.elementUrls = PeriodicTableServiceData.getElementUrls();
    // $scope.element1 = '';
    // $scope.element2 = '';

    $http.get($scope.elementUrls[0]).success(function (response) {
        $scope.element1 = response;
        console.log(response);
    });

    $http.get($scope.elementUrls[1]).success(function (response) {
        $scope.element2 = response;
        console.log(response);
    });
});