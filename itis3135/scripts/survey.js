let labelId;
let nameIdNum;
let descriptionIdNum;
let descriptionLabel;

function addCourse() {
    labelId = Math.floor(Math.random() * 10000).toString();
    nameIdNum = Math.floor(Math.random() * 10000).toString();
    descriptionIdNum = Math.floor(Math.random() * 10000).toString();
    descriptionLabel = Math.floor(Math.random() * 10000).toString();
    const buttonId = Math.floor(Math.random() * 10000).toString();
    
    const parent = document.getElementById("courselist");

    const courseLabel = document.createElement("label");
    courseLabel.setAttribute('for', 'courseLabel');
    courseLabel.setAttribute('id', labelId);
    courseLabel.innerText = "Course Name: "

    var courseName = document.createElement("input");
    courseName.setAttribute('type', 'text');
    courseName.setAttribute('id', nameIdNum);

    const descLabel = document.createElement("label");
    descLabel.setAttribute('for', 'courseLabel');
    descLabel.setAttribute('id', descriptionLabel)
    descLabel.innerText = "Course Description: "

    var courseInfo = document.createElement("input");
    courseInfo.setAttribute('type', 'text');
    courseInfo.setAttribute('id', descriptionIdNum);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', buttonId)

    deleteButton.setAttribute('onclick', `removeCourse(${labelId},${nameIdNum},${descriptionLabel},${descriptionIdNum},${buttonId})`)
    deleteButton.innerText = "Delete Course";
    deleteButton.setAttribute('style', 'margin-bottom:20px; margin-top:20px;')
    
    parent.appendChild(courseLabel);

    parent.appendChild(courseName);

    parent.appendChild(descLabel);

    parent.appendChild(courseInfo);

    parent.appendChild(deleteButton);

    
}

function removeCourse(labelId, nameIdNum, descriptionLabel, descriptionIdNum, buttonId) {
    const label = document.getElementById(labelId);
    const name = document.getElementById(nameIdNum);
    const descLabel = document.getElementById(descriptionLabel);
    const descId = document.getElementById(descriptionIdNum);
    const button = document.getElementById(buttonId);
    
    label.remove();
    name.remove();
    descLabel.remove();
    descId.remove();
    button.remove();
}
function checkRequiredFields() {
    const requiredFields = document.querySelectorAll("[required]");
    let allFilled = true;
  
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        allFilled = false;
        field.classList.add("error"); // Add visual feedback
      } else {
        field.classList.remove("error"); // Remove error class if filled
      }
    });
  
    if (!allFilled) {
      alert("Please fill in all required fields.");
    }
    return allFilled;
  }

function submits() {
    
    const wipe = document.getElementById("wipe");

    const name = document.getElementById("name");
    const mascot = document.getElementById("mascot");

    const image = document.getElementById("image").files[0];
    const imageUrl = URL.createObjectURL(image);
    var text = "<img src=\"" + imageUrl + "\" > ";
    
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

    // document.getElementById('loadImage').innerHTML = text;
    //append to loadImage after this point
    // var append = document.getElementById('loadImage');
    //-----------------------------------------------//
    const figcaption = document.createElement("p");
    p.textContent= imageCaption.value;
    document.getElementById('append').appendChild(figcaption);
    
    

    
    
    


}
