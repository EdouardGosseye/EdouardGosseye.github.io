const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");

    let tekst = txtInput.value;

    txtOutput.textContent = tekst;
}

function setup() {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

window.onload = setup;