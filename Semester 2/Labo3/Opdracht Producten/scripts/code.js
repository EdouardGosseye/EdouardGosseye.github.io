const setup = () => {
    const herberekenButton = document.querySelector('button');
    herberekenButton.addEventListener('click', herbereken);
};

const herbereken = () => {
    const prijsCellen = document.getElementsByClassName('prijs');
    const aantalCellen = document.getElementsByClassName('aantal');
    const btwCellen = document.getElementsByClassName('btw');
    const subtotaalCellen = document.getElementsByClassName('subtotaal');

    let totaalBedrag = 0;

    for (let i = 0; i < prijsCellen.length; i++) {

        const prijs = parseFloat(prijsCellen[i].innerText.replace(' EUR', '').replace(',', '.'));
        const aantal = parseFloat(aantalCellen[i].getElementsByTagName('input')[0].value);
        const btw = parseFloat(btwCellen[i].innerText.replace('%', '')) / 100;

        const subtotaal = prijs * aantal * (1 + btw);

        subtotaalCellen[i].innerText = subtotaal.toFixed(2) + ' EUR';

        totaalBedrag += subtotaal;
    }

    const totaalCel = document.getElementById('totaalBedrag');
    totaalCel.innerText = totaalBedrag.toFixed(2) + ' EUR';
};

window.addEventListener('load', setup);
