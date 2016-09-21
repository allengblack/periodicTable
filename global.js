
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

    var addElement = function (newElement) {
        this.elementsToCompare.toggle(newElement);
    }

    var removeElement = function (newElement) {
        this.elementsToCompare.toggle(newElement);
    }

    var clearArray = function () {
        this.elementsToCompare.clear();
    }

    var getElementNames = function () {
        return elementsToCompare;
    };

    return {
        elementsToCompare: elementsToCompare,
        addElement: addElement,
        removeElement: removeElement,
        getElementNames: getElementNames,
        clearArray: clearArray
    }
});