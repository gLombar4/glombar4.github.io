var courses = [];
var i = 0;
var courseinfo;
function addCourse() {
  var courseName = document.createElement('label');
  var courseNameInput = document.createElement('input');
  var courseDescription = document.createElement('label');
  var courseDescriptionInput = document.createElement('input');
  var deleteButton = document.createElement('button');

  
  
  courseName.innerText = "Course Name: ";
  courseNameInput.setAttribute('type', 'text');

  courseDescription.innerText = "Course Description: ";
  courseDescriptionInput.setAttribute('type', 'text');

  deleteButton.innerText = "Remove Course";
  deleteButton.setAttribute('type', 'button')
  deleteButton.setAttribute('onclick', `removeCourse(${i})`)


  courseinfo = [courseName, courseNameInput, courseDescription, courseDescriptionInput, deleteButton];
  courseinfo.forEach((thing) => {
    thing.setAttribute('class', `${i}`);
  });
  
  var courseList = document.getElementById('courses');
  courseList.appendChild(courseName);
  courseList.appendChild(courseNameInput);
  courseList.appendChild(courseDescription);
  courseList.appendChild(courseDescriptionInput);
  courseList.appendChild(deleteButton);
  courses[i] = courseinfo;
  i++;
}

function printCourseInfo() {
  var text = document.getElementById("print_test");
  text.textContent = "test ";
  text.innerText += courses[0].value;
  // courses.forEach((course) => {
  //   text.textContent += course[0].value;
  // });
}

function removeCourse(i) {
  $(`.${i}`).remove();
}