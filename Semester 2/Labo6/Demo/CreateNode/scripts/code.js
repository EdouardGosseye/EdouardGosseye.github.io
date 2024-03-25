const setup = () => {
    let element = document.createElement("p");
    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar");

    console.log(element.getAttribute("class"));

    let textNode = document.createTextNode("Hello world!");
    element.appendChild(textNode);
    document.querySelector('#myDIV').appendChild(element);
}
window.addEventListener("load", setup); 