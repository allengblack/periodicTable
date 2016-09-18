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

    // $stateProvider.state('Start Quiz', {
    //     url: '/chooseQuiz/startQuiz',
    //     templateUrl: 'templates/quiz.html',
    //     controller: 'QuizCtrl'
    // });

    // $stateProvider.state('Display Score', {
    //     url: 'display-score',
    //     templateUrl: 'templates/displayScore.html',
    //     controller: 'DisplayCtrl'
    // });

});

// periodicTable.service('QuizServiceData', function () {
//     var quizUrl = "";
//     var finalScore = 0;

//     var setUrl = function (newUrl) {
//         quizUrl = newUrl;
//     };

//     var getUrl = function () {
//         return quizUrl;
//     };

//     var setFinalScore = function (score) {
//         finalScore = score;
//     };

//     var getFinalScore = function () {
//         return finalScore;
//     };

//     return {
//         setUrl: setUrl,
//         getUrl: getUrl,
//         setFinalScore: setFinalScore,
//         getFinalScore: getFinalScore
//     }
// });