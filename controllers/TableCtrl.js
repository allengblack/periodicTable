/**
 * Created by g-man on 8/28/16.
 */

function errorhandler (err, obj) {
    console.error(err, obj);
}

periodicTable.controller('TableCtrl', function($scope, $http, PeriodicTableServiceData) {
    $scope.addElementUrl = function (url) {
        PeriodicTableServiceData.addElementUrl(url);
    };

    // $http.get("table.json").success(function (response) {
    //     $scope.table = response;
    //     console.log(response);
    // }).error(errorhandler);

    // $scope.addElementUrl(url) = PeriodicTableServiceData.addElementUrl(url);
});