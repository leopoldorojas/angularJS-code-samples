angular.module('worldCup', ['ngRoute'])
  
.factory('Teams', function($http) {
  teams = [
    {"name":"Costa Rica", "starPlayer": "Joel Campbell", "site": "http://www.fifa.com/worldcup/teams/team=43901/index.html"},
    {"name":"Brasil", "starPlayer": "Neymar", "site": "http://www.fifa.com/worldcup/teams/team=43924/index.html"}
  ];


  //$http.get('/3teams.json').success(function (data) {
    //teams = data;
  //});

  return {
    getTeams: function() {
      return teams;
    },
    includeTeam: function(team) {
      return teams.push(team);
    }
  }

})
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'TeamsCtrl',
      templateUrl:'3teams.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'3team.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
 
.controller('TeamsCtrl', function($scope, Teams) {  
    $scope.teams = Teams.getTeams();    
})

.controller('CreateCtrl', function($scope, $location, Teams) {
  $scope.save = function() {
    $scope.teams = Teams.includeTeam($scope.team);    
    $scope.team = {};
    $location.path('/');
  };

});
