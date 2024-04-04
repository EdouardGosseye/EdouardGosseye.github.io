const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;
let isBusy = false;
let cards = [];

const setup = () => {
    createSpel();
}


const images = [
    "Images/Kaart1.jpg",
    "Images/Kaart2.jpg",
    "Images/Kaart3.jpg",
    "Images/Kaart4.jpg",
    "Images/Kaart5.jpg",
    "Images/Kaart6.jpg"
];

const createSpel = () => {
    const randomKaarten = images.concat(images);
    willekeurigeKaarten(randomKaarten);
    const veld = document.querySelector('.memory-board');
    for (let i = 0; i < randomKaarten.length; i++) {
        const kaart = document.createElement('div');
        kaart.classList.add('memory-card');
        kaart.innerHTML = `<img src="Images/Achterkant.jpg" alt="Achterkant">`;
        kaart.addEventListener('click', () => omdraaien(i));
        veld.appendChild(kaart);
        cards.push({ img: randomKaarten[i], flipped: false, matched: false });
    }
}

const omdraaien = (index) => {
    if (isBusy || cards[index].flipped || cards[index].matched) return;
    const card = document.querySelectorAll('.memory-card')[index];
    card.classList.add('active');
    card.innerHTML = `<img src="${cards[index].img}" alt="Voorkant">`;
    cards[index].flipped = true;

    const omgedraaideKaarten = cards.filter(card => card.flipped && !card.matched);
    if (omgedraaideKaarten.length === 2) {
        isBusy = true;
        setTimeout(() => keuring(omgedraaideKaarten), 1000);
    }
}

const keuring = (omgedraaideKaarten) => {
    const [eersteKaart, tweedeKaart] = omgedraaideKaarten;
    if (eersteKaart.img === tweedeKaart.img) {
        Matched(eersteKaart, tweedeKaart);
    } else {
        terugDraaien(eersteKaart, tweedeKaart);
    }
    isBusy = false;
}

const Matched = (eersteKaart, tweedeKaart) => {
    eersteKaart.matched = true;
    tweedeKaart.matched = true;
    const omgedraaideIndex = cards.reduce((acc, card, index) => {
        if (card.flipped && !card.matched) acc.push(index);
        return acc;
    }, []);
    if (omgedraaideIndex.length === 0) {
       alert("Je hebt een match!!!");
    }
}

const terugDraaien = (eersteKaart, tweedeKaart) => {
    const omgedraaideIndex = cards.reduce((acc, card, index) => {
        if (card.flipped && !card.matched) acc.push(index);
        return acc;
    }, []);
    omgedraaideIndex.forEach(index => {
        const kaartElement = document.querySelectorAll('.memory-card')[index];
        kaartElement.classList.remove('active');
        kaartElement.innerHTML = `<img src="Images/Achterkant.jpg" alt="Achterkant">`;
        cards[index].flipped = false;
    });
}

const willekeurigeKaarten = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.addEventListener("load", setup);
