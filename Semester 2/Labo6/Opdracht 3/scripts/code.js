const setup = () => {

        let p = document.createElement('p');

        p.textContent = "This is a new paragraph.";

        let DIV = document.getElementById('myDIV');

    DIV.appendChild(p);
}
window.addEventListener("load", setup); 