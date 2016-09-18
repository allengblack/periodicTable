/**
 * Created by g-man on 8/28/16.
 */

quizApp.controller('DisplayCtrl', function($scope, QuizServiceData) {
    $scope.score = QuizServiceData.getFinalScore();
    $scope.message = "Good work!";
});