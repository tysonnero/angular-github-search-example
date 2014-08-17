var SearchCtrl = function($scope, GitHub) {

    $scope.user = {};

    $scope.search = function search() {
        GitHub.searchRepos($scope.query)
            .then(function(response) {
                $scope.repos = response.data.items;
            });
    };

    $scope.open = function open(name) {
        GitHub.getRepo(name)
            .then(function(response) {
                $scope.activeRepo = response.data;
                GitHub.getReadme(name)
                    .then(function(response) {
                        $scope.activeRepo.readme = atob(response.data.content);
                    })
                    .catch(function() {
                        $scope.activeRepo.readme = 'No README found!';
                    });
            });
    };

    $scope.getUserRepos = function(name) {
        GitHub.getUserRepos(name)
            .then(function(response) {
                $scope.user.repos = response.data;
            });
    }

};

app.controller('SearchCtrl', ['$scope', 'GitHub', SearchCtrl]);