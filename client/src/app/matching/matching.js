/*=======================================================================
Copyright 2013 Amida Technology Solutions (http://amida-tech.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
======================================================================*/

angular.module('dre.match', ['dre.match.reconciliation'])

.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.when('/match', {
      templateUrl: 'templates/matching/matching.tpl.html',
      controller: 'matchCtrl'
  });
}])

  .controller('matchCtrl', ['$scope', '$http', '$location', 
    function($scope, $http, $location) {

      $scope.navPath = "templates/nav/nav.tpl.html";


      $scope.reconciliationClick = function () {
        $location.path("match/reconciliation");
      };

      

    }
  ]);