/**
 * Created by g-man on 8/28/16.
 */

function errorhandler (err, obj) {
    console.error(err, obj);
}

periodicTable.controller('TableCtrl', function($scope, $http, TableServiceData) {
    $scope.table = [];
    // $scope.search = "";
    $scope.message = "Select one of the quizzes.";

    // $scope.setUrlString = function (newUrl) {
    //     TableServiceData.setUrl(newUrl);
    // };

    // $scope.increaseScore = function() {
    //     $scope.TableServiceData.increaseScore();
    // };

    $http.get("table.json").success(function (response) {
        $scope.table= response;
        console.log(response);
    }).error(errorhandler);
});