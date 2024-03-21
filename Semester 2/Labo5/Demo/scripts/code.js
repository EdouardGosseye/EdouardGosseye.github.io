const setup = () => {

    tree();
}

const tree  = () =>
{
    let x,y;
    let chr='';
    const  hoogte = 6;

    for (x = 1; x <= hoogte; x++)
    {
        chr +="*";
        console.log(chr)
    }
}
window.addEventListener("load", setup); 