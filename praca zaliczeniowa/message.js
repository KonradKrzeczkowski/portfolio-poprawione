const buttonMessage = document.getElementById("buttonMessage");
const buttonMessages = document.getElementById("buttonMessages");

function message() {
    removeFirstChild(main);
    const sectionMessage = document.createElement("section");
    sectionMessage.className = "sectionMessage";
    main.appendChild(sectionMessage);
    spanHeaderName.textContent = "MESSAGES";
    parHeaderName.textContent = "MESSAGE FROM THE INTERESTED PERSON";
    arrayMessage.forEach((element) => {
        const divMessage = document.createElement("div");
        const spanNameMessage = document.createElement("span");
        const spanEmailMessage = document.createElement("span");
        const spanMessage = document.createElement("span");
        const namemessage = element.name;
        const message = element.message;
        const emailMessage = element.email;
        divMessage.className = "messageDiv";
        divMessage.append(spanNameMessage, spanEmailMessage, spanMessage);
        spanEmailMessage.textContent = `Email: ${emailMessage}`;
        spanMessage.textContent = `Message: ${message}`;
        spanNameMessage.textContent = `Name: ${namemessage}`;
        sectionMessage.append(divMessage);
    });
}
buttonMessage.addEventListener("click", boxMessageButton);
buttonMessages.addEventListener("click", boxMessageButton);
