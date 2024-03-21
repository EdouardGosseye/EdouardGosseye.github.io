const setup = () => {
    document.getElementById("btnResultaat").addEventListener("click",showResult )
}
const showResult = () => {
    let isRoker = document.getElementById("Rcheck").value;
    let moedertaal = document.querySelector('input[name="taal"]:checked').value;
    let favorietBuurland = document.getElementById("land").value;
    let bestelling = [];
    let bestellingSelect = document.getElementById("bestelling");
    for (let i = 0; i < bestellingSelect.options.length; i++) {
        if (bestellingSelect.options[i].selected) {
            bestelling.push(bestellingSelect.options[i].text);
        }
    }
    if (isRoker === true)
    {
        console.log("Is Roker");
    }
    else
    {
        console.log("Is geen Roker");
    }
    console.log("Moedertaal is " + moedertaal);
    console.log("Favoriete Buurland is " + favorietBuurland);
    console.log("Bestelling bestaat uit " + bestelling.join(", "));
}
window.addEventListener("load", setup); 