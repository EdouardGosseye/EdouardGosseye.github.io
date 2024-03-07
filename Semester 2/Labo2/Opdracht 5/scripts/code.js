function setup() {
    let pElement = document.getElementById("txtOutput");
    let wijzigButton = document.getElementById("wijzigButton");

    wijzigButton.addEventListener("click", function () {
        pElement.innerHTML = "Welkom!";
    });
}

window.addEventListener("load", setup);