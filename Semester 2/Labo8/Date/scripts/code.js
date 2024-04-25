const setup = () => {

    let start = new Date(); //system Date
    console.log(start);

    //dag van de week
    console.log((start.getDate()));

    //maand
    console.log((start.getMonth()));

    //jaar
    console.log((start.getFullYear()));

    //dag
    console.log(start.getDate());

    console.log(start.getDate() + "-" + (start.getMonth() + 1) + "-" + start.getFullYear() + " " + start.getHours()
     + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2024, 0, 1);
    console.log(datum);

    let event = new Date();

    console.log("toString " + event.toString());

    /*ISO het is eerder een notatieconventie voor het weergeven van tijdstippen*/
    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());

    let geboorteDatum = new Date(2004, 7,11);
    let miliSec = start - geboorteDatum;
    let leefDag = miliSec/(1000*60*60*24)
    console.log(leefDag)
}
window.addEventListener("load", setup); 