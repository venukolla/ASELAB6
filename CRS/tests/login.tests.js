/**
 * Created by Venu on 10/3/15.
 */

/**
 * Created by Venu on 10/3/15.
 */
describe ('LoginCtrl', function(){

  it('LoginCtrl', function(){

    var controller = $controller('LoginCtrl',{$scope:$scope});

    expect( $scope.login('venubabukolla','venu').toEqual('success'))
  })

})

