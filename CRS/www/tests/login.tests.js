/**
 * Created by Venu on 10/3/15.
 */


describe ('LoginCtrl', function(){

  it('LoginCtrl', function() {
    var password=


    expect
  })

  angular.module('app', [])
    .controller('LoginCtrl', function PasswordController($scope) {
      $scope.password = '';
      $scope.grade = function() {
        var size = $scope.password.length;
        if (size > 8) {
          $scope.strength = 'strong';
        } else if (size > 3) {
          $scope.strength = 'medium';
        } else {
          $scope.strength = 'weak';
        }
      };
    });

})
