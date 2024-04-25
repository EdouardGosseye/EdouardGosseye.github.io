let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    let lstPersonen = document.getElementById("lstPersonen");
    if(isAllesGevalideerd())
    {
        let persoon = {};
        if (lstPersonen.selectedIndex === -1) {
            //nieuwe persoon bewaren
            vulPersoonOpBasisVanUserInterface(persoon); // par ByRef
            personen.push(persoon); //toevoegen aan interne lijst
            voegPersoonToeAanLijstInUserInterface(persoon);
        }
        else
        {
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            UpdateSelect(persoon);
        }
    }
    else
    {
        alert("Niet gevalideerd")
    }
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};
const UpdateSelect = (persoon) => {
    let lstPersonen  = document.getElementById("lstPersonen")
    let index = persoon.indexOf(persoon);
    let option = lstPersonen.options[index];
    option.text = `${persoon.firstName} ${persoon.lastName}`;
    option.value = `${persoon.email}`;

}
const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = persoon.firstName + " " + persoon.lastName;
    option.value = persoon.email;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length-1;
}

const ToonDataPersoon = (e) => {
    let index = e.currentTarget.selectedIndex;
    if(index !== -1)
    {
        let persoon = personen[index];
        document.getElementById("txtVoornaam").value = persoon.firstName;
        document.getElementById("txtFamilienaam").value = persoon.lastName;
        document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    }
}

const vulPersoonOpBasisVanUserInterface = (persoon) => {

    persoon.firstName = document.getElementById("txtVoornaam").value.trim();
    persoon.lastName = document.getElementById("txtFamilienaam").value.trim();
    persoon.geboorteDatum = document.getElementById("txtGeboorteDatum").value.trim();
    persoon.email = document.getElementById("txtEmail").value.trim();
    persoon.aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();
}


const isAllesGevalideerd =() =>{
    let error = document.querySelectorAll('.errorMessage');
    let gevalideerd = true;
    error.forEach((error) =>{
        if (error.innerHTML !== "")
        {
            gevalideerd = false;
        }
    })
    return gevalideerd;
}


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;
let inputs = document.querySelectorAll('input[type=text]');
for (let i = 0; i < inputs.length; i++)
{
    inputs[i].value = "";
}
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    clearAllErrors();
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click",ToonDataPersoon);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);