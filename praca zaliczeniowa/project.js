const sectionProject = document.createElement("section");
const divAddMyProject = document.createElement("div");
const buttonProject = document.getElementById("buttonProject");
const buttonProjects = document.getElementById("buttonProjects");
function addMyProjects() {
    removeFirstChild(main);
    const section = document.createElement("div");
    const imgProjects = document.createElement("img");
    const buttonAddProjects = createBtn("Add Projects", addMyProject);
    spanHeaderName.textContent = "MY PROJECTS";
    parHeaderName.textContent = "MADE WITH LOVE";
    imgProjects.src = "./vector/vector.png";
    imgProjects.alt = "plus";
    sectionProject.className = "sectionCarusele";
    section.append(buttonAddProjects);
    section.id = "section";
    buttonAddProjects.append(imgProjects);
    buttonAddProjects.id = "buttonRemove";
    divAddMyProject.id = "divAddMyProject";
    main.append(divAddMyProject);
    main.append(section, sectionProject);
}
buttonProject.addEventListener("click", buttonAddProject);
buttonProjects.addEventListener("click", buttonAddProject);
project();
