const setup = () => {

    let belangrijkeElementen = document.getElementsByClassName("belangrijk");

    for (let i = 0; i < belangrijkeElementen.length; i++) {
        belangrijkeElementen[i].classList.add("opvallend");
    }
}

window.addEventListener("load", setup);