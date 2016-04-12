angular.module('directivePractice').service("lessonService", function($http){

  this.getSchedule = function(){
    // console.log("hit")
    return $http.get("schedule.json");
  }

  //end
})
