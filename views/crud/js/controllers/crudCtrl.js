firstApp.controller('usersCtrl', function ($scope, Restangular) {
    
    Restangular.all('crud/new').getList()
			.then(function (users) {
			    $scope.persons = users;
			});
});
firstApp.controller('userNewCtrl', function ($scope, Restangular, $location) {
    $scope.firstName = null;
    $scope.lastName = null;

    $scope.createNew = function () {

        var newPerson = {
            firstName: $scope.firstName,
            lastName: $scope.lastName
        };
         Restangular.all('crud').post(newPerson);
        $location.path("/users");
    }
});
firstApp.controller('userShowCtrl', function ($scope, Restangular, $routeParams) {
    
    Restangular.one('crud', $routeParams.id).get().then(function (user) {
        $scope.person = user;
    });
});
firstApp.controller('userEditCtrl', function ($scope, Restangular, $routeParams, $location) {
    var selectedPerson = null;
   
    Restangular.one('crud', $routeParams.id).get().then(function (user) {
        selectedPerson = user;
        $scope.selectedPerson = selectedPerson;
    });
    $scope.saveChanges = function () {
        selectedPerson.put();
        $location.path("/users");

    }
});
firstApp.controller('userDelCtrl', function ($scope, Restangular, $routeParams, $location) {
    Restangular.one('crud', $routeParams.id).get().then(function (user) {
         user.remove();
    });
    
   
    
});