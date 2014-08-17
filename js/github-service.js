app.factory('GitHub', function GitHub($http) {

    var searchRepos = function(query) {
        return $http.get('https://api.github.com/search/repositories', { params: { q: query }});
    };

    var getRepo = function(name) {
        return $http.get('https://api.github.com/repos/' + name);
    };

    var getReadme = function(name) {
        return $http.get('https://api.github.com/repos/' + name + '/readme');
    };

    var getUserRepos = function getUser(name, callback) {
        return $http.get('https://api.github.com/users/' + name + '/repos');
    };

    return {
        searchRepos: searchRepos,
        getRepo: getRepo,
        getReadme: getReadme,
        getUserRepos: getUserRepos
    };
});