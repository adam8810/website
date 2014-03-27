'use strict';

/**
 * @name ResumeCtrl
 */
angular.module('amboothcomApp')
    .controller('ResumeCtrl', function ($scope, person) {
        $scope.profile = person.profile;
        $scope.skillLists = person.skills;
        $scope.xp = person.xp;
        $scope.education = person.education;
        $scope.email = person.email;
        $scope.phone = person.phone;
    });
