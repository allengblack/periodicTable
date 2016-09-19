
var periodicTable = angular.module('periodicTable', ['ui.router']);

periodicTable.config(function ($locationProvider, $stateProvider){
    $locationProvider.html5Mode(true);

    $stateProvider.state('Home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('View Table', {
        url: '/table',
        templateUrl: 'templates/table.html',
        controller: 'TableCtrl'
    });

    $stateProvider.state('Compare', {
        url: '/compare',
        templateUrl: 'templates/compare.html',
        controller: 'CompareCtrl'
    });

});

periodicTable.service('PeriodicTableServiceData', function () {
    var elementsToCompare = [];

    var addElementUrl = function (newUrl) {
        if (elementsToCompare.length == 0) {
            elementsToCompare.push(newUrl);
            console.log('1');
        }
        else if (elementsToCompare.length == 1) {
            for (var i = 0; i < elementsToCompare.length; i++) {
                if (elementsToCompare[i] === newUrl) {
                    console.log('Element already in.');
                }
                else {
                    elementsToCompare.push(newUrl);
                    console.log('2');
                }
            }
        }
        else if (elementsToCompare.length == 2) {
            for (var i = 0; i < elementsToCompare.length; i++) {
                if (elementsToCompare[i] === newUrl) {
                    console.log('Element already in.');
                }
                else {
                    elementsToCompare[0] = elementsToCompare[1];
                    elementsToCompare.pop();
                    elementsToCompare.push(newUrl);
                    console.log('3');
                }
            }
        }
    }

    var getElementUrls = function () {
        return elementsToCompare;
    };

    return {
        elementsToCompare: elementsToCompare,
        addElementUrl: addElementUrl,
        getElementUrls: getElementUrls
    }
});