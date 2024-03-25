const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();

    document.getElementById("saveButton").addEventListener("click", saveColor);

    loadSavedColors();
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

const saveColor = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let color = "rgb(" + red + "," + green + "," + blue + ")";

    let newSwatch = document.createElement("div");
    newSwatch.classList.add("savedSwatch");
    newSwatch.style.backgroundColor = color;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", deleteSwatch);

    newSwatch.appendChild(deleteButton);

    document.body.appendChild(newSwatch);

    let savedColors = JSON.parse(localStorage.getItem("savedColors"));
    savedColors.push(color);
    localStorage.setItem("savedColors", JSON.stringify(savedColors));
};

const deleteSwatch = (event) => {
    let swatch = event.target.parentNode;
    swatch.parentNode.removeChild(swatch);

    let savedColors = JSON.parse(localStorage.getItem("savedColors"));
    let index = savedColors.indexOf(swatch.style.backgroundColor);
    if (index !== -1) {
        savedColors.splice(index, 1);
        localStorage.setItem("savedColors", JSON.stringify(savedColors));
    }
};

const loadSavedColors = () => {
    let savedColors = JSON.parse(localStorage.getItem("savedColors"));
    savedColors.forEach(color => {

        let newSwatch = document.createElement("div");
        newSwatch.classList.add("savedSwatch");
        newSwatch.style.backgroundColor = color;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", deleteSwatch);

        newSwatch.appendChild(deleteButton);

        document.body.appendChild(newSwatch);
    });
};
window.addEventListener("load", initialize);