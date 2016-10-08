function errorhandler (err, obj) {
    console.error(err, obj);
}

periodicTable.controller('TableCtrl', function($scope, $http, PeriodicTableServiceData) {
    $scope.count = 0;
    $scope.elements = [];
    $scope.elementsGroup = [];

    $scope.addElement = function (element) {
        if (PeriodicTableServiceData.elementsToCompare.contains(element)) {
            PeriodicTableServiceData.removeElement(element);
            element.clicked = false;
        }
        else {
            PeriodicTableServiceData.addElement(element);
            element.clicked = true;
        }
    };

    $http.get("elements/elements.json").success(function (response) {
        $scope.elements = response;
        $scope.elementsGroup = $scope.getTable(response);
        console.log(response);
    }).error(errorhandler);

    $scope.getTable = function (arr) {
        var ret = [];
        var groups = [2, 8, 8, 8, 8, 8, 8, 8, 8];
        var count = 0;
        for (var gi = 0; gi < groups.length; gi++) {
            var rett = [];
            var group = groups[gi];
            for (var ggi = 0; ggi < group; ggi++) {
                if (!arr[count]) {
                    ret.push(rett);
                    return ret;
                }
                rett.push(arr[count]);
                count++;
            }
            for (var ggj = group; ggj < 8; ggj++) {
                if (!arr[count]) {
                    ret.push(rett);
                    return ret;
                }
                rett.push(null);
                //count++;
            }
            if (gi == 0) { //shifts helium to the end spectrum
                rett[rett.length - 1] = arr[1];
                rett[1] = null;
            }
            ret.push(rett);
        }
        return ret;
    }
});