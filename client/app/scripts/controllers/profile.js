'use strict';

/**
 * @ngdoc function
 * @name phrPrototypeApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the phrPrototypeApp
 */
angular.module('phrPrototypeApp')
    /*
    <<<<<<< HEAD
        .controller('ProfileCtrl', function($scope, $location, $anchorScroll, account, profile) {

            $scope.navClick = function(element) {
                var old = $location.hash();
                $location.hash(element);
                $anchorScroll();
                //reset to old to keep any additional routing logic from kicking in
                $location.hash(old);
            };

            $scope.updateProfile = function() {
                var info = $scope.profile;
                var tmpemail = {
                    "type": "primary",
                    "email": $scope.profile.email[0].email
                };

                $scope.profile.email[0] = tmpemail;

                var formatdob = moment($scope.tmpDOB).format('YYYY-MM-DDTHH:mmZ');
                $scope.profile.dob = {
                  "date": formatdob,
                  "precision": "day"
                };

                profile.saveProfile(info, function(err) {
                    console.log('profile controller', info);
                });

                displayProfile();
            };

            function displayProfile() {
                profile.getProfile(function(err, profileInfo) {
                    $scope.profile = profileInfo;
                    console.log('profile controller', $scope.profile);
                    //Shims for HL7 weirdness.
                    if (profileInfo&&profileInfo.dob) {
                      //special format for profile form
                        $scope.tmpDOB = moment($scope.profile.dob.date).format('YYYY-MM-DD');
                        console.log($scope.profile.dob, $scope.tmpDOB);
                    }
                });
            }

            displayProfile();


    =======
    */
    .controller('ProfileCtrl', function ($scope, $location, $route, $anchorScroll, account, profile, format) {

        $scope.editAddress = false;
        $scope.editPhone = false;
        // $scope.editLangs = false;
        $scope.editProf = false;
        // $scope.user_language = {};

        $scope.editAddressSection = function () {
            $scope.editAddress = true;
        };
        $scope.cancelAddressSection = function () {
            $scope.editAddress = false;
            $scope.new_address = {};
            displayProfile();
        };

        $scope.editPhoneSection = function () {
            $scope.editPhone = true;
        };
        $scope.cancelPhoneSection = function () {
            $scope.editPhone = false;
            $scope.new_phone = {};
            displayProfile();
        };

        $scope.editProfSection = function () {
            $scope.editProf = true;
        };
        $scope.cancelProf = function () {
            $scope.editProf = false;
            displayProfile();
        };

        // $scope.editLangsSection = function () {
        //   $scope.editLangs = true;
        // };
        // $scope.cancelLangs = function () {
        //   $scope.editLangs = false;
        // };

        $scope.navClick = function (element) {
            var old = $location.hash();
            $location.hash(element);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        };

        $scope.updateProfile = function () {
            // if (angular.isDefined($scope.new_language)) {
            //   addLang();
            // }
            addAddress();
            addPhone();

            var info = $scope.profile;
            var tmpemail = {
                "type": "primary",
                "email": $scope.profile.email[0].email
            };

            $scope.profile.email[0] = tmpemail;

            var formatdob = moment($scope.editDOB).format('YYYY-MM-DD');
            $scope.profile.dob = {
                "point": {
                    "date": formatdob,
                    "precision": "day"
                }
            };
            if ($scope.tmpMiddleName) {
                // var tmpMiddleName = $scope.profile.name.middle;
                $scope.profile.name.middle = [];
                $scope.profile.name.middle[0] = $scope.tmpMiddleName;
            } else {
                //remove name if it is empty string
                $scope.profile.name.middle = [];
                delete $scope.profile.name.middle;
            }

            // console.log($scope.tmpDOB, $scope.profile.dob);
            profile.saveProfile(info, function (err) {
                $route.reload();
                // displayProfile();
                // console.log('profile controller', info);
            });
            $scope.editAddress = false;
            $scope.editPhone = false;
            // $scope.editLangs = false;
            $scope.editProf = false;

        };

        function displayProfile() {
            profile.getProfile(function (err, profileInfo) {
                $scope.profile = profileInfo;
                //console.log('profile controller', $scope.profile);
                //Shims for HL7 weirdness.
                if (profileInfo && profileInfo.dob) {
                    $scope.editDOB = moment($scope.profile.dob.point.date).format('YYYY-MM-DD');
                    $scope.viewDOB = format.formatDate($scope.profile.dob.point);
                    // console.log($scope.tmpDOB, $scope.tmp1DOB, $scope.profile.dob);
                    // hard coded language

                    // if (angular.isDefined($scope.profile.languages)) {
                    // for (var index in $scope.profile.languages) {
                    //   if ($scope.profile.languages[index].language === 'en') {
                    //     $scope.user_language[index] = 'English';
                    //   }
                    // }
                    // }
                }
                if (profileInfo && profileInfo.name.middle) {
                    $scope.tmpMiddleName = profileInfo.name.middle[0];
                }

            });
        }

        displayProfile();

        // function addLang() {
        //     // add new language
        //     if ($scope.new_language.language === 'English') {
        //       $scope.new_language.language = 'en';
        //     }
        //     var tmpLanguages =
        //         {"language": $scope.new_language.language,
        //         "mode": $scope.new_language.mode,
        //         "proficiency": $scope.new_language.proficiency};
        //       if (angular.isDefined($scope.profile.languages)) {
        //         var lang_count = $scope.profile.languages.length;
        //         // console.log(lang_count);
        //         $scope.profile.languages[lang_count] = $scope.new_language;
        //         $scope.profile.new_language = {};
        //       } else {
        //         $scope.profile.languages = [];
        //         $scope.profile.languages[0] = tmpLanguages;
        //         $scope.profile.new_language = {};
        //       }
        //   }

        function addPhone() {
            if (angular.isDefined($scope.new_phone)) {
                var tmpPhone = {
                    "number": $scope.new_phone.number,
                    "type": $scope.new_phone.type
                };
                if (angular.isDefined($scope.profile.phone)) {
                    var phone_count = $scope.profile.phone.length;
                    $scope.profile.phone[phone_count] = $scope.new_phone;
                    $scope.new_phone = {};
                } else {
                    $scope.profile.phone = [];
                    $scope.profile.phone[0] = tmpPhone;
                    //console.log($scope.tmpNewPhone, $scope.new_phone);
                    $scope.new_phone = {};
                }
            }
        }

        function addAddress() {
            console.log("$scope.new_address ", $scope.new_address);
            if (angular.isDefined($scope.new_address)) {
                var tmpNewAddress = {
                    "city": $scope.new_address.city,
                    "state": $scope.new_address.state,
                    "zip": $scope.new_address.zip,
                    "country": $scope.new_address.country,
                    "use": $scope.new_address.use
                };
                if ($scope.new_address.street_line1) {
                    tmpNewAddress.street_lines = [];
                    tmpNewAddress.street_lines[0] = $scope.new_address.street_line1;
                }

                if (angular.isDefined($scope.profile.addresses)) {
                    var addresses_count = $scope.profile.addresses.length;
                    $scope.profile.addresses[addresses_count] = $scope.new_address;
                    $scope.new_address = {};
                } else {
                    $scope.profile.addresses = [];
                    $scope.profile.addresses[0] = tmpNewAddress;
                    //console.log($scope.tmpNewAddress, $scope.new_address);
                    $scope.new_address = {};
                }

            }

        }

    });

// 'email': $scope.profile.email[0].email,
// 'firstName': $scope.profile.name.first,
// 'middleName': $scope.profile.name.middle[0],
// 'lastName': $scope.profile.name.last,
// 'dob': $scope.profile.dob,
// 'gender': $scope.profile.gender,
// 'race_ethnicity': $scope.profile.race_ethnicity,
// 'marital_status': $scope.profile.marital_status,
// 'religion': $scope.profile.religion,
// 'db_id': $scope.profile._id,
// 'record_id': $scope.profile.metadata.attribution[0].record._id

// var info = {
//   "name": {
//       "middle": [$scope.inputMiddle],
//       "last": $scope.inputLast,
//       "first": $scope.inputFirst
//   },
//   "dob": $scope.inputDOB,
//   "gender": $scope.inputGender,
//   "email": [{
//       "email": $scope.inputEmail,
//       "type": "primary"
//   }]
// };
