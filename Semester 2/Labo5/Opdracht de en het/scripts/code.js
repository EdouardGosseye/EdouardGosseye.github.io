/*const setup = () => {
    document.getElementById("btnVervang").addEventListener("click", vervangDe)
}
const vervangDe = () => {
    let input = document.getElementById("txtTekst").value;
    let zoekinput = "de";
    let het = "het";

    let index = input.indexOf(zoekinput);
    while (index !== -1)
    {
        let  de = input.slice(index, 2);
        de = het;
        input = input.slice(0, index) + het + input.slice(index+2);
        index = input.indexOf(zoekinput, index +1 );
    }
    console.log(input);
}*/
const setup = () => {
    let inputTekst = "Gistere, zat de jongen op de stoep en at de helft van de appel";
    let outputTekst = vervangAlles(inputTekst, "de", "het");
    console.log(outputTekst);
}
const vervangAlles = (bronTekst, oud, nieuw) => {
    let result =bronTekst;
    let index = result.indexOf(oud);
    while (index !== -1)
    {
        let voor = result.slice(0, index);
        let na = result.slice(index + oud.length, result.length);
        result = voor + nieuw + na;
        index = result.indexOf(oud, index + nieuw.length);
    }
    return result;
}
window.addEventListener("load", setup); 