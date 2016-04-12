angular.module('directivePractice').directive("lessonHider", function() {
    return {

        templateUrl: "lessonHider.html",
        restrict: "E",
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule;
            $scope.announceDay = function(lesson, day) {
                if (lesson && day) {
                    alert(lesson + ' is active on ' + day + '.');
                } else if (day === undefined)
                    alert(lesson + ' is not on the schedule');
            }
        },
        scope: {
            lesson: "=",
            dayAlert: "&",
        },
        link: function(scope, element, attribute) {
            scope.getSchedule().then(function(response) {
                scope.schedule = response.data;
                scope.schedule.forEach(function(scheduleDay) {
                    if (scheduleDay.lesson === scope.lesson) {
                        scope.lessonDay = scheduleDay.weekday;
                        element.toggleClass('checked');
                        scope.checked = true;
                        return;
                    }
                })

                scope.checkLesson = function() {
                    // console.log
                    if (scope.checked) {
                        element.toggleClass("checked")
                    } else {
                        element.toggleClass("checked")
                    }
                }
            });
        }
    }
    //end
});