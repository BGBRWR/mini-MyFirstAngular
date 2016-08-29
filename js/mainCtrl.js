angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = [
    'Hank',
    'Bill',
    'Dale',
    'BoomHauer'
  ]
  $scope.addFriend = function() {
    $scope.friends.push($scope.inputName);
    $scope.inputName = null;
  }
});
