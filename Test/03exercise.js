let user = function (firstName, courseCount){
    this.firstName  = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Total course is: ${this.courseCount}`)
    };
};
user.prototype.getFirstName = function(){
    console.log(`Your first name is: ${this.firstName}`);
};

let hitesh = new user ("Hitesh", 3);
hitesh.getFirstName();
hitesh.getCourseCount();

let sam = new user ("Sam", 2);
sam.getFirstName();
sam.getCourseCount();

//console.log(hitesh);
// console.log(sam);