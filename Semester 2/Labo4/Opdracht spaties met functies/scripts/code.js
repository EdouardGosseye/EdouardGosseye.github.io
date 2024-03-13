const setup = () => {
    var btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toon);
}

const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i);
        result += " ";
    }

    return result;
}

const toon = () => {
    let inputText = document.getElementById('txtTekst').value;

    let result = maakMetSpaties(inputText);

    console.log(result);
}

window.addEventListener("load", setup); 