/**
 * Created by chhatwani on 5/31/2017.
 */

angular
    .module('PalindromicNumber')
    .controller('FindPalindromicNumber',function ($scope) {

        $scope.title= 'Largest Palindromic Number Finder';
        $scope.findPalindrom = function(){

            var startIndex=$scope.lowerbound;
            var endIndex=$scope.upperbound;
            var largestPalindrome=0;
            for(var i=startIndex;i<=endIndex;i++){
                var val=i.toString();
                var reversedValue='';
                for(j=val.length-1;j>=0;j--){
                    reversedValue=reversedValue+val.charAt(j);
                }

                if(reversedValue==val && parseInt(val)>largestPalindrome){
                        largestPalindrome=parseInt(val);
                }

            }

            $scope.result=largestPalindrome;
        }

    });

