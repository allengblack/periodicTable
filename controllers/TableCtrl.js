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
        var result = [];
        var groups = [2, 8, 8, 8, 8, 8, 8, 8, 8];
        var count = 0;

        for (var i = 0; i < groups.length; i++) {
            var ret = [];
            var group = groups[i];

            for (var j = 0; j < group; j++) {
                if (!arr[count]) {
                    result.push(ret);
                    return result;
                }
                ret.push(arr[count]);
                count++;
            }

            for (var k = group; k < 8; k++) {
                if (!arr[count]) {
                    result.push(ret);
                    return result;
                }
                ret.push(null);
            }

            if (i == 0) { //shifts helium to the end spectrum
                ret[ret.length - 1] = arr[1];
                ret[1] = null;
            }
            result.push(ret);
        }
        return result;
    }

});