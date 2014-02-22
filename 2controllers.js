function TeamsCtrl($scope) {
  $scope.teams = [
    {name:'Costa Rica', eliminated:false},
    {name:'Brazil', eliminated:true}];
 
  $scope.addTeam = function() {
    $scope.teams.push({name:$scope.teamName, eliminated:false});
    $scope.teamName = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.teams, function(team) {
      count += team.eliminated ? 0 : 1;
    });
    return count;
  };
 
  $scope.restart = function() {
    var oldTeams = $scope.teams;
    $scope.teams = [];
    angular.forEach(oldTeams, function(team) {
      if (!team.eliminated) $scope.teams.push(team);
    });
  };
}