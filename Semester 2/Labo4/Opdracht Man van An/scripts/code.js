const setup = () => {
   document.getElementById("search").addEventListener("click", telVoorkomens)

}
const telVoorkomens = () =>
{
    let input = document.getElementById("txtTekst").value;
    let zoekinput = document.getElementById("txtZoekTekst").value;

    let result = 0;
    let idx = input.indexOf(zoekinput);
    while (idx !== -1)
    {
        result++;
        idx=input.indexOf(zoekinput, idx + 1);
    }
    document.getElementById("txtAantal").innerHTML = result;
}
window.addEventListener("load", setup);