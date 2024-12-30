const arrayMessage = [
    { name: "Kuba", email: "kuba@wp.pl", message: "Hello" },
    { name: "Paweł", email: "paweł@wp.pl", message: "Hi" },
    {
        name: "Fryderyk",
        email: "Jan@wp.pl",
        message: "Welcome Jan. You created really nice project",
    },
];
const buttonContact = document.getElementById("buttonContact");
const buttonContacts = document.getElementById("buttonContacts");
function contactMe() {
    removeFirstChild(main);
    const buttonContactMe = createBtn("Send Message", addArrayMessage);
    const divNameEmail = document.createElement("div");
    const divNameInput = document.createElement("div");
    const divEmailInput = document.createElement("div");
    const divMessageInput = document.createElement("div");
    const formContact = document.createElement("form");
    const inputContactMeName = createinpute("Your name", "Name");
    const inputContactMeEmail = createinpute("email@example.com", "Name");
    const inputContactMeMessage = createinpute("Hello, my name is . . .", "Name");
    const labelName = document.createElement("label");
    const divButtonMessage = document.createElement("div");
    const labelMessage = document.createElement("label");
    const labelEmail = document.createElement("label");
    const spanContactMe = document.createElement("span");
    const divContactMe = document.createElement("div");
    const spanMessageContact = document.createElement("span");
    const spanNameContact = document.createElement("span");
    const spanEmailContact = document.createElement("span");
    spanHeaderName.textContent = "CONTACT ME";
    parHeaderName.textContent = "SAY HELLO TO ME";
    buttonContactMe.className = "buttonContactMe";
    divNameEmail.className = "divNameEmail";
    inputContactMeName.id = "inputContactMeName";
    inputContactMeEmail.id = "inputContactMeEmail";
    inputContactMeMessage.id = "inputContactMeMessage";
    labelName.textContent = "Name";
    divButtonMessage.className = "divButtonMessage";
    labelMessage.textContent = "Message";
    labelEmail.textContent = "Email";
    divNameEmail.append(divNameInput, divEmailInput);
    divNameEmail.className = "divNameEmail";
    divNameInput.append(labelName, inputContactMeName);
    divNameInput.className = "inputcontact";
    divEmailInput.append(labelEmail, inputContactMeEmail);
    divEmailInput.className = "inputcontact";
    divMessageInput.append(labelMessage, inputContactMeMessage);
    divMessageInput.className = "divMessageInput";
    spanContactMe.textContent = "Contact me";
    divContactMe.className = "divContactMe";
    spanMessageContact.id = "spanMessageContact";
    spanMessageContact.className = "validate";
    spanNameContact.id = "spanNameContact";
    spanNameContact.className = "validate";
    spanEmailContact.id = "spanEmailContact";
    spanEmailContact.className = "validate";
    divButtonMessage.append(buttonContactMe);
    divNameInput.append(spanNameContact);
    divMessageInput.append(spanMessageContact);
    divEmailInput.append(spanEmailContact);
    main.append(divContactMe);
    formContact.append(divNameEmail, divMessageInput);
    divContactMe.append(spanContactMe, formContact, divButtonMessage);
}

const createinpute = (placeHolder) => {
    const input = document.createElement("input");
    input.placeholder = placeHolder;
    return input;
};

function addArrayMessage() {
    const spanMessageContact = document.getElementById("spanMessageContact");
    const spanNameContact = document.getElementById("spanNameContact");
    const spanEmailContact = document.getElementById("spanEmailContact");
    const inputContactMeName = document.getElementById("inputContactMeName");
    const inputContactMeEmail = document.getElementById("inputContactMeEmail");
    const inputContactMeMessage = document.getElementById(
        "inputContactMeMessage"
    );
    const namePerson = inputContactMeName;
    const emailPerson = inputContactMeEmail;
    const messagePerson = inputContactMeMessage;
    spanMessageContact.textContent = " ";
    spanEmailContact.textContent = " ";
    spanNameContact.textContent = " ";
    let personNameValid = 0;
    let personMessageValid = 0;
    personNameValid = validProject(namePerson, personNameValid);
    personMessageValid = validProject(messagePerson, personMessageValid);
    console.log(personNameValid);
    console.log(personMessageValid);
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    if (
        personNameValid < 3 ||
        personNameValid > 20 ||
        personMessageValid < 3 ||
        !validateEmail(emailPerson.value)
    ) {
        namePerson.addEventListener("input", validNamePerson);

        if (personNameValid < 3) {
            spanNameContact.textContent =
                "The name must be at least 3 characters long.";
            namePerson.style.borderBottom = " #AF0808 2px solid";
        } else if (personNameValid > 20) {
            spanNameContact.textContent = "The name must not exceed 20 characters.";
            namePerson.style.borderBottom = " #AF0808 2px solid";
        }
        function validNamePerson(e) {
            personNameValid = 0;
            personNameValid = validProject(e.target, personNameValid);
            if (personNameValid < 3) {
                spanNameContact.textContent =
                    "The name must be at least 3 characters long.";
                namePerson.style.borderBottom = " #AF0808 2px solid";
            } else if (personNameValid > 20) {
                spanNameContact.textContent = "The name must not exceed 20 characters.";
                namePerson.style.borderBottom = " #AF0808 2px solid";
            } else {
                spanNameContact.textContent = " ";
                namePerson.style.borderBottom = "black 2px solid";
            }
        }
        if (personMessageValid < 1) {
            spanMessageContact.textContent = "The message cannot be empty.";
            messagePerson.style.borderBottom = " #AF0808 2px solid";
        } else if (personMessageValid > 100) {
            spanMessageContact.textContent =
                "The message must not exceed 100 characters.";
            messagePerson.style.borderBottom = " #AF0808 2px solid";
        }
        messagePerson.addEventListener("input", validMessagePerson);
        function validMessagePerson(e) {
            personMessageValid = 0;
            personMessageValid = validProject(e.target, personMessageValid);
            if (personMessageValid < 1) {
                spanMessageContact.textContent = "The message cannot be empty.";
                messagePerson.style.borderBottom = " #AF0808 2px solid";
            } else if (personMessageValid > 100) {
                spanMessageContact.textContent =
                    "The message must not exceed 100 characters.";
                messagePerson.style.borderBottom = " #AF0808 2px solid";
            } else {
                spanMessageContact.textContent = " ";
                messagePerson.style.borderBottom = "black 2px solid";
            }
        }
        emailPerson.addEventListener("input", validEmailPerson);
        if (!validateEmail(emailPerson.value)) {
            spanEmailContact.textContent = "Please enter a valid email address.";
            emailPerson.style.borderBottom = " #AF0808 2px solid";
        }
        function validEmailPerson(e) {
            if (!validateEmail(e.target.value)) {
                spanEmailContact.textContent = "Please enter a valid email address.";
                emailPerson.style.borderBottom = " #AF0808 2px solid";
            } else {
                spanEmailContact.textContent = " ";
                emailPerson.style.borderBottom = "black 2px solid";
            }
        }
    } else {
        const message = {
            name: namePerson.value,
            email: emailPerson.value,
            message: messagePerson.value,
        };
        arrayMessage.push(message);
        namePerson.value = "";
        emailPerson.value = "";

        messagePerson.value = "";
    }
    return arrayMessage;
}
buttonContact.addEventListener("click", boxContactButton);
buttonContacts.addEventListener("click", boxContactButton);
