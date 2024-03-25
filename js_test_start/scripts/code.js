const setup = () => {
    let kipSelect = document.getElementById('kip');
    kipSelect.addEventListener('change', telVoorkomens);

    let txtInput = document.getElementById('txtInput');
    txtInput.addEventListener('input', telVoorkomens);
};
const telVoorkomens = () => {
    let letter = document.getElementById("txtInput").value;
    let kipSelect = document.getElementById('kip');
    let selectedValue = kipSelect.value;
    let zin = "";
    if (selectedValue === 'm') {
        zin = "Met een ei";
    } else if (selectedValue === 'z') {
        zin = "Zonder een ei";
    } else {
        zin = "";
    }

    let result = 0;
    for (let i = 0; i < zin.length; i++) {
        if (zin[i].toLowerCase() === letter.toLowerCase()) {
            result++;
        }
    }

    document.getElementById("note").textContent = `Aantal voorkomens van '${letter}' in de zin: ${result}`;

    let imgContainer = document.getElementById('img');
    if (selectedValue === 'm') {
        imgContainer.innerHTML = '<img src="../img/with-egg.png" alt="Met een ei">';
    } else if (selectedValue === 'z') {
        imgContainer.innerHTML = '<img src="../img/without-egg.png" alt="Zonder een ei">';
    } else {
        imgContainer.innerHTML = '';
    }
};

window.addEventListener("load", setup);