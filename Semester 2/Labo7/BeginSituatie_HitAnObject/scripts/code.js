let global = {
    IMAGE_COUNT:5, // aantal figuren
    IMAGE_SIZE:48, // grootte van de figuur
    IMAGE_PATH_PREFIX:"images/", // map van de figuren
    IMAGE_PATH_SUFFIX:".png", // map van de figuren

    MOVE_DELAY:3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt

    score:0, // aantal hits
    timeoutId:0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    console.log("loaded");
    document.getElementById("btnStart").addEventListener("click", start);
}

const start = () => {
    removeStart();
    document.getElementById("target").addEventListener("click",move)
    startMovingTarget();
    let target = document.getElementById("target");
    target.addEventListener("click", deleteImg)
    target.addEventListener("click", end)

}

const move = () => {
    let playField = document.getElementById("playField");
    let target = document.getElementById("target");
    let randomX = Math.floor(Math.random() * (playField.offsetWidth - global.IMAGE_SIZE));
    let randomY = Math.floor(Math.random() * (playField.offsetHeight - global.IMAGE_SIZE));
    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
    let nummer = Math.floor(Math.random() * global.IMAGE_COUNT);
    if (nummer === 0)
    {
        target.className = 'bom';
    }
    else {
        target.className  = "";
    }
    replaceImage()
}

const removeStart = () => {
    let btnStart = document.getElementById("btnStart")
    btnStart.remove();
}
const addStart = () => {
    let btnStart =  document.createElement("button")


}
const update =() => {
        global.score++;
        document.querySelector(".score").textContent = global.score;
}

const replaceImage = () => {
    let target = document.getElementById("target");
    let random = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.style.visibility = "visible";
    target.src = `${global.IMAGE_PATH_PREFIX}${random}${global.IMAGE_PATH_SUFFIX}`;
};

const startMovingTarget = () => {
    global.timeoutId = setInterval(move, global.MOVE_DELAY);
};

const deleteImg = () => {
    let target = document.getElementById("target");
    target.style.visibility = "hidden";
}

const end = (e) => {
    if (e.target.className === "bom")
    {
        alert("GAME OVER");
        console.log(e.target)
        global.score = 0;
        document.querySelector(".score").textContent = global.score;
        clearInterval(global.timeoutId);
        addStart();
    }
    else {
        update();
    }
}

window.addEventListener("load", setup);


