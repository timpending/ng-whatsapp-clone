import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('clique', [
  angularMeteor
  ])
  .controller('PartiesListController', function($scope) {
    'ngInject';

    $scope.helpers({
      parties() {
        return Parties.find({});
      }
    })

  });
