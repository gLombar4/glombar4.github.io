function submit() {
    
}

function addCourse() {
    const labelId = Math.floor(Math.random() * 10000).toString();
    const nameIdNum = Math.floor(Math.random() * 10000).toString();
    const descriptionIdNum = Math.floor(Math.random() * 10000).toString();
    const descriptionLabel = Math.floor(Math.random() * 10000).toString();
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
