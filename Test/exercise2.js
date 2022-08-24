let user = {
    firstName : "Arun",
    lastName : "Shah",
    role : "Admin",
    logInCount : 32,
    loggedInFrom : "facebook",
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
getCourseCount: function(){
    return `${this.firstName} is enrolled total of ${this.courseList.length} courses`;
},
}
console.log(user.firstName);
user.buyCourse("React js course");
user.buyCourse("Angular js course");
user.buyCourse(" js course");
console.log(user.getCourseCount());