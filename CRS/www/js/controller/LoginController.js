app.controller('LoginCtrl', function ($scope, $http, $state, $rootScope, $cordovaNetwork) {

  $scope.login = function (userName, password) {
    var url = "http://10.205.3.177:8080/com.umkc.rest/api/mongo/login?username="+userName+"&password="+password;
    //console.log("Hello " + userName);
    //console.log("usr "+url)
    //
    //console.log("online status"+ $cordovaNetwork.isOnline())
    //
    //alert("online status"+ $cordovaNetwork.isOnline())
    //var isOnline = $cordovaNetwork.isOnline()
    //
    //if( isOnline == true){
    //
    //
    //  $ionicPopup.alert({
    //
    //    title: 'Alert',
    //    template: 'Online Popup'
    //  });
    //
    //  /*$http.get(url).then(function(data) {
    //
    //    tempDatasss = data.data.statusmessage;
    //
    //    if(tempDatasss == 'success'){
    //      $state.go('home')
    //    }else{
    //      $state.go('login')
    //    }
    //
    //
    //
    //
    //  }),function(err){
    //    console.error(err);
    //  }*/
    //}else{
    //
    //  window.alert("Offline status")
    //
    //  console.log("Offline status")
    //
    //
    //}

    $http.get(url).then(function(data) {

      tempDatasss = data.data.statusmessage;

      if(tempDatasss == 'success'){
        $state.go('home')
      }else{
        $state.go('login')
      }




    }),function(err){
      console.error(err);
    }

    //$http.get(url).then(function(data) {
    //
    //  tempDatasss = data.data.statusmessage;
    //
    //  if(tempDatasss == 'success'){
    //    $state.go('home')
    //  }else{
    //    $state.go('login')
    //  }
    //
    //
    //
    //
    //}),function(err){
    //  console.error(err);
    //}



    //$http .get(url, {
    //  username: userName,
    //  password: password
    //}).then(function(response) {getJSONObject
    //  console.log(response);
    //
    //  $state.go('home');
    //}, function(err) {
    //  console.error(err);
    //})
  };
});
