const setup = () => {
     document.getElementById("imgPhoto").addEventListener("mouseover", change)
}

const change = () =>
{
    let photo = document.getElementById("imgPhoto");
    photo.src = "./Image/cat.jpg";
    photo.alt = "cat";
    photo.className = "sizePhoto";

    document.getElementById("txtText").innerHTML = "School of cats"
}

window.addEventListener("load", setup);