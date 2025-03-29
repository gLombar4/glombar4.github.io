var courses = [];
var i = 0;
var j = 1;
var courseinfo;

function addCourse() {
  var courseName = document.createElement('label');
  var courseNameInput = document.createElement('input');
  var courseDescription = document.createElement('label');
  var courseDescriptionInput = document.createElement('input');
  var deleteButton = document.createElement('button');

  
  
  courseName.innerText = "Course Name: ";
  courseNameInput.setAttribute('type', 'text');
  courseNameInput.setAttribute('id', `${i}`);

  courseDescription.innerText = "Course Description: ";
  courseDescriptionInput.setAttribute('type', 'text');
  courseDescriptionInput.setAttribute('id', `${j}`)

  deleteButton.innerText = "Remove Course";
  deleteButton.setAttribute('type', 'button')
  deleteButton.setAttribute('onclick', `removeCourse(${i})`)
  test = courseDescriptionInput.value;


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
  j++;
}

function printCourseInfo() {
  var text = document.getElementById('courselist');
  

  for (let i = 0; i < courses.length; i++){
    text.textContent += "Course Name: \n" + document.getElementById(i).value;
    // text.textContent += document.getElementById(i).value;
    text.textContent += " Course Description: "
    text.textContent += document.getElementById(i+1).value;
  }
}

function removeCourse(i) {
  $(`.${i}`).remove();
}


function submits() {
    
  const wipe = document.getElementById("wipe");

  const name = document.getElementById("name");
  const mascot = document.getElementById("mascot");

  const image = document.getElementById("image").files[0];
  const imageUrl = URL.createObjectURL(image);
  var text = "<img src=\"" + imageUrl + "\" > ";
  const img = document.createElement("div");
  img.setAttribute('class','image');
  img.innerHTML = text;
  
    
  const imageCaption = document.getElementById("image-caption");
  const personalBackground = document.getElementById("personal-background");
  const professionalBackground = document.getElementById("professional-background");
  const academicBackground = document.getElementById("academic-background");
  const webDevBackground = document.getElementById("web-dev-background");
  const computerPlatform = document.getElementById("computer-platform");
    
  const funnyThing = document.getElementById("funny-thing");
  const anythingElse = document.getElementById("anything-else");
  wipe.remove();

  const h2 = document.createElement("h2");
  h2.innerText = name.value + " || " + mascot.value;
  document.getElementById('append').appendChild(h2);

  document.getElementById('append').appendChild(img);

  const caption = document.createElement('p');
  caption.setAttribute('class', 'caption');
  caption.innerText = imageCaption.value;
  document.getElementById('append').appendChild(caption);

  const personal = document.createElement('p');
  personal.setAttribute('class', 'newp')
  personal.innerText = "Personal Background: \n" + personalBackground.value;
  document.getElementById('append').appendChild(personal);

  const professional = document.createElement('p');
  professional.setAttribute('class', 'newp')
  professional.innerText = "Professional Background: \n" + professionalBackground.value;
  document.getElementById('append').appendChild(professional);

  const academic = document.createElement('p');
  academic.setAttribute('class', 'newp')
  academic.innerText = "academic Background: \n" + academicBackground.value;
  document.getElementById('append').appendChild(academic);

  const webDev = document.createElement('p');
  webDev.setAttribute('class', 'newp')
  webDev.innerText = "Web Development Background: \n" + webDevBackground.value;
  document.getElementById('append').appendChild(webDev);

  const computer = document.createElement('p');
  computer.setAttribute('class', 'newp')
  computer.innerText = "Primary Computer Platform: \n" + computerPlatform.value;
  document.getElementById('append').appendChild(computer);

  const courselist = document.createElement('p');
  courselist.setAttribute('id', 'courselist');
  courselist.setAttribute('class', 'newp')
  document.getElementById('append').appendChild(courselist);



}