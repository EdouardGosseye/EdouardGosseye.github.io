const setup = () =>
{
    let lblCursus = document.getElementById("lblCursus"); /*Zoekt naar element lblCursus en wordt inde variabele lblCursus geplaatst*/
    lblCursus.addEventListener("mouseover", change); /*Het element luistert voor een mouseover event*/

    /*let btnSend = document.getElementById(btnSend);
    btnSend.addEventListener("click", show);*/
    document.getElementById("btnSend").addEventListener("click", show);/*Alternatief/korter*/
}

const show = () =>
{
    let txtName = document.getElementById("txtName");

    if (txtName.value != "")
    {
        alert("jouw naam is " + txtName.value);

        console.log ("jouw naam is" + txtName.value);
        /*console.log (`jouw naam is ${txtName.value}`)*/
    }
    else
    {
        alert("gelieve naam in te vullen");
    }
}

const change = () =>
{
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}
window.addEventListener("load", setup); 