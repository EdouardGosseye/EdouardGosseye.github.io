const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let txtBegin = document.getElementById("txtBegin");
    let txtEinde = document.getElementById("txtEinde");

    let tekst = txtInput.value;
    let idxBegin=parseInt(txtBegin.value, 10);
    let idxEinde=parseInt(txtEinde.value, 10);

    let resultaat = tekst.substring(idxBegin, idxEinde);
    txtOutput.innerHTML=resultaat;
}

window.addEventListener('load',setup);


/*
p-element -> inhoud InnerHTML  <p id="txtTekst">dit is een test </p>

input-elememt -> inhoud Value  <input id="txtName" type="text">*/