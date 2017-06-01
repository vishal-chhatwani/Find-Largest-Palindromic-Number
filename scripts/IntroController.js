/**
 * Created by chhatwani on 5/31/2017.
 */

angular
    .module('PalindromicNumber')
    .controller('IntroController',function ($scope) {

        $scope.title= 'Description';
        $scope.description='This application is for finding the largest palindromic number ' +
            'between two numbers provided by user.' +
            'A palindromic number is a number that remains the same when its digits are reversed. ' +
            'Like 16461, for example, it is "symmetrical".';

        $scope.clicked = function(){
            window.location = "findPalindromicNumber.html";
        }

    });

