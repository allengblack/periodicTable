var periodicTable = angular.module('periodicTable', ['ui.router']);

periodicTable.config(function ($locationProvider, $stateProvider){
    $locationProvider.html5Mode(true);

    $stateProvider.state('Home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('Table', {
        url: '/table',
        templateUrl: 'templates/table.html',
        controller: 'DisplayElementsCtrl'
    });


});