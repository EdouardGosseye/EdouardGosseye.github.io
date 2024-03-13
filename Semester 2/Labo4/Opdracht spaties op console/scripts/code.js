const setup = () => {
    var btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toon);
}

const toon = () => {
    let inputText = document.getElementById('txtTekst');
    let tekst = inputText.value;
    let spatie = "";

    for (let i=0; i < tekst.length; i++)
    {
        spatie += tekst.charAt(i);
        spatie += " ";
    }

    console.log(spatie);
}

window.addEventListener("load", setup);