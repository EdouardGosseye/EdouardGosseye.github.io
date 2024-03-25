const setup = () => {
    let listItems = document.querySelectorAll('li');

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add('listitem');
    }

    let img = document.createElement('img');
    img.src = 'Labo6/Opdracht_2/image/cat.jpg';
    document.body.appendChild(img);
}
window.addEventListener("load", setup); 