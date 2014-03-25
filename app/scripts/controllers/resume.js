'use strict';

angular.module('amboothcomApp')
    .controller('ResumeCtrl', function ($scope, person) {
        $scope.profile = person.profile;

        var columns = 3;
        var skillList = [
            [],
            [],
            []
        ];
        angular.forEach(person.skills, function (skill, index) {
//            console.log((index % 3) + 1, index %3);
                if (index < 5) {
                    skillList[0].push(skill);
                } else if (index < 10) {
                    skillList[1].push(skill);
                } else {
                    skillList[2].push(skill);
                }
        });

        console.log(skillList);

        $scope.skillLists = skillList;
        $scope.xp = person.experience;
    });
