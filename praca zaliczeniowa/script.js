const main = document.querySelector("main");
const section = document.createElement("section");
const img = document.createElement("img");
const headerName = document.getElementById("headerName");
const spanHeaderName = document.createElement("span");
const parHeaderName = document.createElement("p");
const sectionSecond = document.createElement("section");
const sectionThird = document.createElement("section");
const sectionMyExpirience = document.createElement("section");
const body = document.querySelector("body");
const spanTechnology = document.createElement("span");
const spanTitle = document.createElement("span");
const buttonHome = document.getElementById("buttonHome");
const buttonHomes = document.getElementById("buttonHomes");
const exitButton = document.createElement("button");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const imgExit = document.createElement("img");
const inputTitleProject = document.createElement("input");
const inputTechnologies = document.createElement("input");
const projectCarusele = [
    { title: "Caltulator", technology: ["HTML"] },
    { title: "Caltulator program", technology: ["Javascript"] },
    { title: "Non-governmental organization", technology: ["HTML", "CSS"] },
    { title: "Non-governmental organization", technology: ["HTML", "CSS"] },
];
let projectIndex = 0;
let projectIndex2 = 1;
let projectIndex3 = 2;
const imgHamburgerMenu = document.getElementById("imgHamburgerMenu");
const divHamburgerMenu = document.createElement("div");
imgHamburgerMenu.textContent === "whiteHamburger";
exitButton.addEventListener("click", boxExit);
imgExit.src = "./vector/exitButton.png";
imgExit.alt = "cross";
sectionMyExpirience.className = "sectionMyExpirience";
buttonHome.addEventListener("click", buttonBox);
buttonHomes.addEventListener("click", buttonBox);
function boxExit() {
    cleanInput();
    removeModal();
}
function addHome() {
    removeFirstChild(main);
    const divAddHome = document.createElement("div");
    const section = document.createElement("section");
    const articelSection = document.createElement("article");
    const divSection = document.createElement("div");
    const spanArticelSection = document.createElement("span");
    const ParArticleSection = document.createElement("p");
    const parLogoSubject = document.createElement("p");
    const logoSubject = document.createElement("div");
    spanHeaderName.textContent = "KONRAD KRZECZKOWSKI";
    parHeaderName.textContent = "WEB-DESIGNER";
    headerName.append(spanHeaderName, parHeaderName);
    divAddHome.className = "divAddHome";
    section.className = "sectionHome";
    sectionSecond.className = "sectionCarusel";
    divAddHome.append(section, sectionMyExpirience, sectionSecond, sectionThird);
    main.append(divAddHome);
    section.append(img, divSection);
    divSection.append(articelSection, logoSubject);
    articelSection.append(ParArticleSection, spanArticelSection);
    logoSubject.append(parLogoSubject);
    ParArticleSection.textContent = "About me";
    spanArticelSection.textContent =
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.";

    parLogoSubject.textContent = "My Skills";
    myExpirience();
}
addHome();

function removeFirstChild(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function buttonBox() {
    addHome();
    projectCarusel();
    activeButton();
    buttonDiv();
}

const createBtn = (btnName, btnFunction) => {
    const button = document.createElement("button");
    button.textContent = btnName;
    button.addEventListener("click", btnFunction);
    return button;
};

function myExpirience() {
    removeFirstChild(sectionMyExpirience);
    const html = {
        img: "./myExpirenceImg/html.png",
        technology: "HTML",
        expirience: 2,
    };
    const css = {
        img: "./myExpirenceImg/css.png",
        technology: "CSS",
        expirience: 4,
    };
    const javaScript = {
        img: "./myExpirenceImg/javascript.png",
        technology: "JAVASCRIPT",
        expirience: 2,
    };
    const git = {
        img: "./myExpirenceImg/git.png",
        technology: "GIT",
        expirience: 1,
    };
    const figma = {
        img: "./myExpirenceImg/figma.png",
        technology: "FIGMA",
        expirience: 3,
    };
    const chrome = {
        img: "./myExpirenceImg/chrome.png",
        technology: "CHROME",
        expirience: 0,
    };
    const vscode = {
        img: "./myExpirenceImg/visualStudioCode.png",
        technology: "VSCODE",
        expirience: 2,
    };
    const gitHub = {
        img: "./myExpirenceImg/gitHub.png",
        technology: "GITHUB",
        expirience: 0,
    };

    const myExpirienceObj = [
        css,
        html,
        javaScript,
        git,
        figma,
        chrome,
        gitHub,
        vscode,
    ];
    myExpirienceObj.forEach((element) => {
        const divProjectTechnology = document.createElement("div");
        divProjectTechnology.className = "divProjectTechnology";
        const divExpirience = document.createElement("div");
        const imgTechnology = document.createElement("img");
        const spanExperience = document.createElement("span");
        const parExperience = document.createElement("p");
        const divExperienceLi = document.createElement("div");
        const divExpirienceDotted = document.createElement("div");
        divExperienceLi.className = "divExperienceLi";
        divExpirienceDotted.className = "divExpirienceDotted";
        const expirience = "./vector/elipseBlack.png";
        const nonExpirience = "./vector/elipse.png";
        const expirienceArray = [
            nonExpirience,
            nonExpirience,
            nonExpirience,
            nonExpirience,
            nonExpirience,
        ];
        const expirienceArrayDotted = expirienceArray.map((item, index) => {
            if (index < element.expirience) {
                item = expirience;
            }
            return item;
        });
        const ulExperience = document.createElement("ul");
        ulExperience.className = "ulExperience";
        expirienceArrayDotted.forEach((value) => {
            const img = document.createElement("img");
            if (value === nonExpirience) {
                img.alt = "Elipse";
            } else {
                img.alt = "Elipse Black";
            }
            img.src = value;
            ulExperience.append(img);
        });
        divExpirienceDotted.append(ulExperience);
        divExperienceLi.append(divExpirienceDotted);
        sectionMyExpirience.append(divProjectTechnology);
        divProjectTechnology.append(imgTechnology, divExpirience);
        divExpirience.append(spanExperience, divExperienceLi, parExperience);
        divExpirience.className = "divExpirience";
        imgTechnology.src = element.img;
        spanExperience.textContent = element.technology;
        parExperience.textContent = `${element.expirience} years`;
    });
}

const createinput = (placeHolder, label) => {
    const input = document.createElement("input");
    input.placeholder = placeHolder;
    input.labels = label;
    return input;
};

function addMyProject() {
    removeFirstChild(main);
    const divInputBox = document.createElement("div");
    const divInputTitle = document.createElement("div");
    const divInputTechnology = document.createElement("div");
    const labelTitle = document.createElement("label");
    const labelTechnologies = document.createElement("label");
    const buttonAddProject = createBtn("", functionButton);
    const imgButtonModal = document.createElement("img");
    const spanTitle = document.createElement("span");
    const spanTechnology = document.createElement("span");
    const divAddMyProjects = document.createElement("div");
    const divExitButton = document.createElement("div");
    const divButtonAddProject = document.createElement("div");
    divInputBox.className = "inputBox";
    imgButtonModal.src = "./vector/Vector.png";
    imgButtonModal.alt = "plus";
    buttonAddProject.textContent = "Add project";
    buttonAddProject.className = "buttonModal";
    buttonAddProject.append(imgButtonModal);
    divButtonAddProject.className = "buttonModal";
    spanTitle.id = "spanTitle";
    spanTechnology.id = "spanTechnology";
    spanTechnology.className = "valid";
    spanTitle.className = "valid";
    inputTitleProject.id = "inputTitleProject";
    inputTitleProject.placeholder = "Project title";
    labelTitle.for = "inputTitleProject";
    inputTechnologies.id = "inputTechnologies";
    inputTechnologies.placeholder = "html,css,javascript";
    labelTechnologies.for = "inputTechnologies";
    labelTechnologies.textContent = "Technologies";
    labelTitle.textContent = "Project title";
    divExitButton.className = "divExitButton";
    exitButton.append(imgExit);
    exitButton.className = "exitButton";
    divExitButton.append(exitButton);
    divButtonAddProject.append(buttonAddProject);
    divButtonAddProject.className = "divButtonAddProject";
    divInputTitle.append(labelTitle, inputTitleProject, spanTitle);
    divInputTechnology.append(
        labelTechnologies,
        inputTechnologies,
        spanTechnology
    );
    divInputBox.append(divInputTitle, divInputTechnology);
    divInputTechnology.className = "divInputBox";
    divInputTitle.className = "divInputBox";
    divAddMyProjects.append(divExitButton, divInputBox, divButtonAddProject);
    divAddMyProjects.id = "divAddMyProjects";
    body.append(divAddMyProjects);
    addMyProjects();
    blur();
}

function validProject(element, validSum) {
    element.value.split(" ").forEach((element) => {
        if (element !== "," && element !== " ") {
            validSum += element.length;
        }
    });
    return validSum;
}

function functionButton() {
    const spanTitle = document.getElementById("spanTitle");
    const spanTechnology = document.getElementById("spanTechnology");
    let technologieValidate = 0;
    let titleValidate = 0;
    spanTitle.className = "validSpan";
    spanTechnology.className = "validSpan";
    spanTitle.textContent = " ";
    spanTechnology.textContent = " ";
    technologieValidate = validProject(inputTechnologies, technologieValidate);
    titleValidate = validProject(inputTitleProject, titleValidate);

    if (technologieValidate < 1 || titleValidate < 3 || titleValidate > 30) {
        inputTitleProject.addEventListener("input", updateValue);
        if (titleValidate < 3) {
            spanTitle.textContent = "The title must be at least 3 characters long";
            inputTitleProject.style.borderBottom = "#AF0808 2px solid";
        }
        function updateValue(e) {
            titleValidate = 0;
            titleValidate = validProject(e.target, titleValidate);
            if (titleValidate < 3) {
                spanTitle.textContent = "The title must be at least 3 characters long";
                inputTitleProject.style.borderBottom = "#AF0808 2px solid";
            } else if (titleValidate > 30) {
                spanTitle.textContent = "The title must not exceed 30 characters.";
                inputTitleProject.style.borderBottom = "#AF0808 2px solid";
            } else {
                spanTitle.textContent = " ";
                inputTitleProject.style.borderBottom = "#1f2041 2px solid";
            }
        }

        inputTechnologies.addEventListener("input", validTechnology);
        if (technologieValidate < 1) {
            spanTechnology.textContent = "Please add some technologies.";
            inputTechnologies.style.borderBottom = "#AF0808 2px solid";
        }
        function validTechnology(e) {
            technologieValidate = 0;
            technologieValidate = validProject(e.target, technologieValidate);
            if (technologieValidate < 1) {
                spanTechnology.textContent = "Please add some technologies.";
                inputTechnologies.style.borderBottom = "#AF0808 2px solid";
            } else {
                spanTechnology.textContent = " ";
                inputTechnologies.style.borderBottom = "#1f2041 2px solid";
            }
        }
    } else {
        removeModal(), projectCarusel(), project(), addMyProjects(), projectHome();
        inputTechnologies.value = "";
        inputTitleProject.value = "";
    }
}

function removeModal() {
    const remove = document.getElementById("divAddMyProjects");
    remove.remove();
    noneBlur();
    addMyProjects();
}
function cleanInput() {
    inputTechnologies.value = "";
    inputTitleProject.value = "";
    inputTitleProject.style.borderBottom = "#1f2041 solid 2px";
    inputTechnologies.style.borderBottom = "#1f2041 solid 2px";
}
function blur() {
    main.className = "blur";
    header.className = "blur";
    footer.className = "blur";
}

function noneBlur() {
    main.className = "nonBlur";
    header.className = "neneBlur";
    footer.className = "noneBlur";
}

function dltButton(index) {
    projectCarusele.splice(index, 1);
    project();
    projectHome();
    return projectCarusele;
}

function projectCarusel() {
    let valueInputTitle = inputTitleProject.value;
    let valueInputTechnologies = inputTechnologies.value;
    const array = valueInputTechnologies.split(",");

    if (valueInputTitle.length >= 3 || valueInputTechnologies >= 1) {
        const arr = { title: valueInputTitle, technology: array };
        projectCarusele.push(arr);
    }
    return projectCarusele;
}

const projectCard = projectCarusel();
function addDiv(arr) {
    while (sectionSecond.firstChild) {
        sectionSecond.removeChild(sectionSecond.firstChild);
    }
    if (arr.length > 0) {
        arr.forEach((element) => {
            const divProject = document.createElement("div");
            divProject.className = "divProject";
            const ul = document.createElement("ul");
            divProject.append(ul);
            sectionSecond.appendChild(divProject);
            if (element.title !== " ") {
                ul.innerHTML = "";
                ul.textContent = element.title;
            }
            for (let i = 0; i < element.technology.length; i++) {
                const li = document.createElement("li");
                li.innerHTML = "";
                li.textContent = element.technology[i];

                ul.appendChild(li);
            }
        });
    }
}

function addButton() {
    const buttonLeft = createBtn("", buttonLeftCarusel);
    const imgButtonArrowLeft = document.createElement("img");
    const buttonRight = createBtn("", buttonRightCarusel);
    const imgButtonArrowRight = document.createElement("img");
    buttonLeft.className = "arrowButton";
    imgButtonArrowLeft.id = "imgButtonArrowLeft";
    buttonLeft.append(imgButtonArrowLeft);
    buttonRight.className = "arrowButton";
    imgButtonArrowRight.id = "imgButtonArrowRight";
    buttonRight.append(imgButtonArrowRight);
    sectionThird.append(buttonLeft, buttonRight);
    sectionThird.className = "sectionThird";
}
window.addEventListener("resize", buttonDiv);

function buttonDiv() {
    removeFirstChild(sectionThird);
    if (
        projectCard.length > 3 &&
        spanHeaderName.textContent === "KONRAD KRZECZKOWSKI"
    ) {
        addButton();
        if (screen.width > 1023) {
            const imgButtonArrowLeft = document.getElementById("imgButtonArrowLeft");
            const imgButtonArrowRight = document.getElementById(
                "imgButtonArrowRight"
            );

            imgButtonArrowLeft.src = "./vector/arrowLeft.png";
            imgButtonArrowLeft.alt = "Arrow Left";
            imgButtonArrowRight.src = "./vector/arrow.png";
            imgButtonArrowRight.alt = "Arrow Right";
        } else {
            const imgButtonArrowLeft = document.getElementById("imgButtonArrowLeft");
            const imgButtonArrowRight = document.getElementById(
                "imgButtonArrowRight"
            );
            imgButtonArrowLeft.src = "./vector/arrowDown.png";
            imgButtonArrowLeft.alt = "Arrow Down";
            imgButtonArrowRight.src = "./vector/arrowUp.png";
            imgButtonArrowRight.alt = "Arrow Up";
        }
    }
}
addButton();
buttonDiv();

function projectHome() {
    const caruselArray = [];
    if (projectCard.length > 2) {
        caruselArray.push(
            projectCard[projectIndex],
            projectCard[projectIndex2],
            projectCard[projectIndex3]
        );
        addDiv(caruselArray);
    } else if (projectCard.length === 2) {
        caruselArray.push(projectCard[projectIndex], projectCard[projectIndex2]);
        addDiv(caruselArray);
    } else if (projectCard.length === 1) {
        caruselArray.push(projectCard[projectIndex]);
        addDiv(caruselArray);
    } else {
        while (sectionSecond.firstChild) {
            sectionSecond.removeChild(sectionSecond.firstChild);
        }
    }
}
projectHome();
function buttonLeftCarusel() {
    removeFirstChild(sectionSecond);
    const caruselArray = [];
    projectIndex = projectIndex - 1;
    projectIndex2 = projectIndex2 - 1;
    projectIndex3 = projectIndex3 - 1;
    if (projectIndex < 0) {
        projectIndex = projectCard.length - 1;
    }
    if (projectIndex2 < 0) {
        projectIndex2 = projectCard.length - 1;
    }
    if (projectIndex3 < 0) {
        projectIndex3 = projectCard.length - 1;
    }

    caruselArray.push(
        projectCard[projectIndex],
        projectCard[projectIndex2],
        projectCard[projectIndex3]
    );
    addDiv(caruselArray);
}

function buttonRightCarusel() {
    removeFirstChild(sectionSecond);
    const caruselArray = [];
    projectIndex = projectIndex + 1;
    projectIndex2 = projectIndex2 + 1;
    projectIndex3 = projectIndex3 + 1;

    if (projectIndex > projectCard.length - 1) {
        projectIndex = 0;
    } else if (projectIndex2 > projectCard.length - 1) {
        projectIndex2 = 0;
    } else if (projectIndex3 > projectCard.length - 1) {
        projectIndex3 = 0;
    }
    caruselArray.push(
        projectCard[projectIndex],
        projectCard[projectIndex2],
        projectCard[projectIndex3]
    );
    addDiv(caruselArray);
}

function project() {
    removeFirstChild(sectionProject);
    if (projectCard.length > 0) {
        projectCard.forEach((element, index) => {
            const dltProject = createBtn("", () => dltButton(index));
            const imgRrectangle = document.createElement("img");
            const divButton = document.createElement("div");
            const divProject = document.createElement("div");
            const ul = document.createElement("ul");
            divButton.className = "divButton";
            imgRrectangle.src = "./vector/rectangle.png";
            imgRrectangle.alt = "Rectangle";
            dltProject.append(imgRrectangle);
            dltProject.className = "dltButton";
            divProject.className = "divProject";
            divButton.append(dltProject);
            divProject.append(ul, divButton);
            sectionProject.appendChild(divProject);
            ul.innerHTML = "";
            ul.textContent = element.title;
            for (let i = 0; i < element.technology.length; i++) {
                const li = document.createElement("li");
                li.innerHTML = "";
                li.textContent = element.technology[i];
                ul.appendChild(li);
            }
        });
    } else {
        const spanProject = document.createElement("span");
        const spanNone = document.createElement("span");
        sectionProject.append(spanNone, spanProject);
        spanProject.textContent = "There are projects to display";
    }
}

function active(element, button, button2) {
    if (spanHeaderName.textContent === element) {
        if (screen.width < 764) {
            button.style.color = "#ADB6C4";
        } else {
            if (screen.width > 764) {
                button.style.color = "#ADB6C4";
                button2.style.color = "#ADB6C4";
            } else {
                button.style.color = "#ADB6C4";
            }
        }
    } else {
        if (screen.width > 764) {
            button.style.color = "#FFFFFF";
            button2.style.color = "#FFFFFF";
        } else {
            button.style.color = "#FFFFFF";
        }
    }
}
function buttonAddProject() {
    addMyProjects();
    activeButton();
}
function boxAboutButton() {
    addAbout(), activeButton();
}
function boxContactButton() {
    contactMe(), activeButton();
}
function boxMessageButton() {
    message(), activeButton();
}
function activeButton() {
    if (screen.width < 765) {
        active("CONTACT ME", buttonContactHamburgerMenu);
        active("MY PROJECTS", buttonProjectHamburgerMenu);
        active("KONRAD KRZECZKOWSKI", buttonHomeHamburgerMenu);
        active("MESSAGES", buttonMessageHamburgerMenu);
        active("ABOUT ME", buttonAboutHamburgerMenu);
    } else if (screen.width > 764) {
        active("CONTACT ME", buttonContact, buttonContacts);
        active("MY PROJECTS", buttonProject, buttonProjects);
        active("KONRAD KRZECZKOWSKI", buttonHome, buttonHomes);
        active("MESSAGES", buttonMessage, buttonMessages);
        active("ABOUT ME", buttonAbout, buttonAbouts);
    }
}

const buttonHomeHamburgerMenu = createBtn("HOME", buttonBox);
const buttonProjectHamburgerMenu = createBtn("PROJECT", buttonAddProject);
const buttonAboutHamburgerMenu = createBtn("ABOUT", boxAboutButton);
const buttonContactHamburgerMenu = createBtn("CONTACT", boxContactButton);
const buttonMessageHamburgerMenu = createBtn("MESSAGE", boxMessageButton);
const buttonSmallMenu = document.getElementById("buttonHamburger");
activeButton();

function buttonHamburgerMenu() {
    hamburgerMenu();
    activeButton();
}

function hamburgerMenu() {
    if (imgHamburgerMenu.textContent === "whiteHamburger") {
        imgHamburgerMenu.textContent = "whiteHamburger";
        divHamburgerMenu.className = "divHamburgerMenu";
        const navHamburgerMenu = document.createElement("nav");
        navHamburgerMenu.className = "navHamburgerMenu";
        const ulHamburgerMenu = document.createElement("ul");
        imgHamburgerMenu.src = "./vector/hamburgerMenuGold.png";
        imgHamburgerMenu.alt = "Gold Hamburger Menu";
        imgHamburgerMenu.textContent = "goldHamburger";
        header.append(divHamburgerMenu);
        divHamburgerMenu.appendChild(navHamburgerMenu);
        navHamburgerMenu.append(ulHamburgerMenu);
        ulHamburgerMenu.append(
            buttonHomeHamburgerMenu,
            buttonProjectHamburgerMenu,
            buttonAboutHamburgerMenu,
            buttonContactHamburgerMenu,
            buttonMessageHamburgerMenu
        );
    } else {
        removeFirstChild(divHamburgerMenu);
        divHamburgerMenu.remove();
        imgHamburgerMenu.src = "./vector/hamburgerMenu.png";
        img.alt = " Hamburger Menu";
        imgHamburgerMenu.textContent = "whiteHamburger";
    }
}
hamburgerMenu();

function sizeImg() {
    if (screen.width > 765) {
        img.src = "./pictureHome/pictureHome.png ";
        img.alt = "My photo";
    } else {
        img.src = "./pictureHome/pictureHomeSmall.png ";
        img.alt = "My photo";
    }
}
sizeImg();
window.addEventListener("resize", sizeImg);
buttonSmallMenu.addEventListener("click", buttonHamburgerMenu);
window.addEventListener("resize", activeButton);
