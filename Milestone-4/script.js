var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePicInput = document.getElementById('profilePic');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    if (profilePicInput && nameElement && emailElement && contactElement && addressElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicURL = profilePicFile ? URL.createObjectURL(profilePicFile) : '';
        //generate resume
        var resumeHTML = "\n    <center><h2><b>Resume</b></h2></center>\n    ".concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt = \"Profile Picture\" class=\"profilePic\">") : '', "\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span id =\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n    <p><b>Email:</b> <span id =\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><b>Contact:</b> <span id =\"edit-contact\" class=\"editable\"> ").concat(contact, " </span> </p>\n    <p><b>Address:</b> <span id =\"edit-address\" class=\"editable\"> ").concat(address, " </span> </p>\n\n    <h3>Education</h3>\n    <p id =\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p id =\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p id =\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeHTMLElement = document.getElementById('resume-display');
        if (resumeHTMLElement) {
            resumeHTMLElement.innerHTML = resumeHTML;
            makeEditable();
        }
    }
    else {
        console.error('One or more elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
