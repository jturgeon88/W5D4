// STUDENT CLASS
function Student (first, last) {
  this.first = first;
  this.last = last;
  this.courses = [];
}

// FULL NAME FUNCTION 
Student.prototype.name = function () {
  return `${this.first} ${this.last}`;
};

// CREATE EXAMPLE STUDENT
const student1 = new Student('Josh', 'Turgeon');
//

// ENROLLMENT FUNCTION
Student.prototype.enroll = function (course) {
  if (!this.courses.includes(course)) {
    this.hasConflict(course);
    
    this.courses.push(course);
    course.enrolledStudents.push(this);
  }
};

// COURSELOAD HASH FUNCTION
Student.prototype.courseLoad = function () {
  const courseLoad = {};

  for (let i = 0; i < this.courses.length; i++) {
    let dep = this.courses[i].department;
    let cred = this.courses[i].credits;

    courseLoad[dep] = courseLoad[dep] || 0; // This is to set it equal to it's previously set amount first or zero to start, because if we try to add to a nil value, it won't work
    courseLoad[dep] += cred;
  }

  return courseLoad;
};

Student.prototype.hasConflict = function (course) {
  this.course.forEach(crs => {
    if (crs.conflictsWith(course)) {
      throw "Course conflicts with existing course";
    }
  })
}





function Course (name, department, credits, days, block) {
  this.enrolledStudents = [];
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.block = block;
}

Course.prototype.conflictsWith = function(otherCourse) {
  let conflicts = false;

  if (this.block !== otherCourse.block) { return false; } 

  return this.days.some(day => otherCourse.days.includes(day));

}











