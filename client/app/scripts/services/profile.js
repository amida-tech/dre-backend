'use strict';

/**
 * @ngdoc service
 * @name phrPrototypeApp.profile
 * @description
 * # post registration info to profile
 * Service in the phrPrototypeApp.
 */
angular.module('phrPrototypeApp')
    .service('profile', function profile($location, $http, format) {

        this.getProfile = function (callback) {
            $http.get('api/v1/record/demographics')
                .success(function (data) {
                    var profileInfo = data.demographics[0];
                    // format.formatDate(profileInfo.dob);
                    // console.log('profile service', profileInfo);
                    callback(null, profileInfo);
                })
                .error(function (data) {
                    callback('error getting profile info');
                });
        };

        this.saveProfile = function (info, callback) {
            $http.post('api/v1/record/demographics', info)
                .success(function (data) {
                    // console.log('updated profile information');
                    callback(null);
                })
                .error(function (data) {
                    callback('error saving profile info');
                });
        };
    });
