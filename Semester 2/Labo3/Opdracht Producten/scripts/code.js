const setup = () => {
    console.log ("setup");
    let btnHerbereken = document.getElementsByClassName('btnHerbereken')[0];
    btnHerbereken.addEventListener("click", update);

    update();
};




const update = () => {

    let txtBtws = document.getElementsByClassName('btw');
    let txtAantallen = document.getElementsByClassName('aantal');
    let txtPrijzen = document.getElementsByClassName('prijs');
    let txtSubtotalen = document.getElementsByClassName('subtotaal');
    let txtTotaal=document.getElementsByClassName('totaal')[0];
    let totaal = 0;

    for (let i = 0; i < txtBtws.length; i++) {

        let aantal=parseFloat(txtAantallen[i].value, 10);
        console.log (txtBtws[i].innerHTML);
        console.log (txtBtws[i].textContent);
        let btw=parseFloat(txtBtws[i].innerHTML, 10); // let op : niet .value!
        let prijs=parseFloat(txtPrijzen[i].innerHTML, 10); // let op : niet .value!
        let subtotaal=aantal*prijs*(1+(btw/100));
        totaal+=subtotaal;

        txtSubtotalen[i].textContent=subtotaal.toFixed(2)+" Eur";

    }
    txtTotaal.textContent=totaal.toFixed(2)+" Eur";
};

window.addEventListener("load", setup);

