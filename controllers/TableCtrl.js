/**
 * Created by g-man on 8/28/16.
 */

function errorhandler (err, obj) {
    console.error(err, obj);
}

periodicTable.controller('TableCtrl', function($scope, $http, PeriodicTableServiceData) {
    $scope.count = 0;
    $scope.elements = [];

    $scope.increaseCount = function () {
        $scope.count++;
    }

    $scope.addElementUrl = function (url) {
        PeriodicTableServiceData.addElementUrl(url);
    };

    $http.get("elements/elements.json").success(function (response) {
        $scope.elements = response;
        console.log(response);
    }).error(errorhandler);

    // $scope.addElementUrl(url) = PeriodicTableServiceData.addElementUrl(url);
});