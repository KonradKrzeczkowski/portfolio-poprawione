const buttonAbout = document.getElementById("buttonAbout");
const buttonAbouts = document.getElementById("buttonAbouts");

function addAbout() {
    removeFirstChild(main);
    spanHeaderName.textContent = "ABOUT ME";
    parHeaderName.textContent = "ITS A-ME, KONRAD!";
    const divButtonContact = document.createElement("div");
    const sectionAbout = document.createElement("section");
    const articelAddAbout = document.createElement("article");
    const articelSecondAddAbout = document.createElement("article");
    const spanArticelSection = document.createElement("span");
    const spanSecondArticelSection = document.createElement("span");
    const parSecondArticleSection = document.createElement("p");
    const parArticleSection = document.createElement("p");
    const parThirdArticleSection = document.createElement("p");
    const partFourthArticleSection = document.createElement("p");
    const partFifthArticleSection = document.createElement("p");
    const parFirst = document.createElement("p");
    const parSecond = document.createElement("p");
    const parThird = document.createElement("p");
    const parFourth = document.createElement("p");
    const buttonAboutContact = createBtn("", boxContactButton);
    const imgArrow = document.createElement("img");
    const spanButtonAbout = document.createElement("span");
    const divConteinerAbout = document.createElement("div");
    divConteinerAbout.className = "divConteinerAbout";
    buttonAboutContact.className = "buttonAboutContact";
    spanButtonAbout.textContent = "Contact me";
    imgArrow.src = "./vector/arrow.png";
    imgArrow.alt = "Arrow Right";
    buttonAboutContact.append(imgArrow, spanButtonAbout);
    main.append(divConteinerAbout);
    divConteinerAbout.append(sectionAbout);
    sectionAbout.className = "secttionAbout";
    articelAddAbout.className = "articelAddAbout";
    articelSecondAddAbout.className = "articelAddAbout";
    divButtonContact.className = "divButtonContact";
    divButtonContact.append(buttonAboutContact);
    sectionAbout.append(
        img,
        articelAddAbout,
        articelSecondAddAbout,
        divButtonContact
    );
    articelAddAbout.append(
        spanArticelSection,
        parArticleSection,
        parSecondArticleSection,
        parThirdArticleSection,
        partFourthArticleSection,
        partFifthArticleSection
    );
    articelSecondAddAbout.append(
        spanSecondArticelSection,
        parFirst,
        parSecond,
        parThird,
        parFourth
    );
    spanArticelSection.textContent = "My background";
    parArticleSection.textContent =
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.";

    parSecondArticleSection.textContent =
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ";

    parThirdArticleSection.textContent =
        "At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  ";

    partFourthArticleSection.textContent =
        "At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ";

    partFifthArticleSection.textContent =
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla ";

    spanSecondArticelSection.textContent = "My hobbies and interests";
    parFirst.textContent =
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ";
    parSecond.textContent =
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    parThird.textContent =
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   ";
    parFourth.textContent =
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla";
}

buttonAbout.addEventListener("click", boxAboutButton);
buttonAbouts.addEventListener("click", boxAboutButton);
