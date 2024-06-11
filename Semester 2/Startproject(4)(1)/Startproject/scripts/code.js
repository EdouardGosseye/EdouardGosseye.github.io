let global = {
    woorden: ["stoel", "vives", "tafel"],
    WOORD_LENGTE: 5,
    gekozenWoord: "",
    timerID: 0,
    naam: "",
    pogingen: 0,
    timestamp: "",
    maanden: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
};
const setup = () => {
    document.getElementById("nieuw").addEventListener("click", nieuwSpel);
    showHighscores();
    document.getElementById("clear").addEventListener("click", clearHighscores);
};
const nieuwSpel = () => {
    global.gekozenWoord = kiesWoord();
    global.naam = "";
    global.pogingen = 0;
    let go = document.getElementById("go");
    go.classList.remove("hidden");
    let gok = document.getElementById("gok");
    gok.value = "";
    document.getElementById("gokken").innerHTML = "";
    global.naam = prompt("Naam speler:");
    gok.focus();
    document.getElementById("nieuw").className = "hidden";
    go.addEventListener("click", gokken);
    let date = new Date();
    global.timestamp = "[" + date.getDay() + " " + global.maanden[date.getMonth()] + " om " + date.getHours() + ":" + date.getMinutes() + "]";
};

const checkInput = () => {
    let input = document.getElementById("gok").value;
    if (input.length === global.WOORD_LENGTE) {
        showWoord();
        global.pogingen++;
    }
    if (input === global.gekozenWoord) {
        stopSpel();
    }
};
const gokken = () => {
    checkInput();
};

const showWoord = () => {
    let input = document.getElementById("gok").value;
    let div = document.createElement("div");
    let gokken = document.getElementById("gokken");
    gokken.appendChild(div);

    for (let i = 0; i < global.WOORD_LENGTE; i++) {
        let letterDiv = document.createElement("div");
        if (input[i] === global.gekozenWoord[i]) {
            letterDiv.className = "juist";
        } else if (global.gekozenWoord.includes(input[i])) {
            letterDiv.className = "bevat";
        } else {
            letterDiv.className = "fout";
        }
        letterDiv.innerText = input[i];
        div.appendChild(letterDiv);
        letterDiv.addEventListener("click", showHelp);
    }
};
const showHelp = (e) => {
    let p = document.querySelector(".help");
    let letter = e.target.innerText.toUpperCase();
    if (e.target.className === "juist") {
        p.innerText = `De letter ${letter} staat op de juiste plaats.`
    } else if (e.target.className === "bevat") {
        p.innerText = `De letter ${letter} komt voor, maar staat op de verkeerde plaats.`
    } else {
        p.innerText = `De letter ${letter} komt niet voor.`
    }
    p.classList.remove("hidden");
    global.timerID = setTimeout(hideHelp, 2500);
};
const hideHelp = () => {
    let p = document.querySelector(".help");
    p.classList.add("hidden");
    clearTimeout(global.timerID);
};

const stopSpel = () => {
    document.getElementById("go").className = "hidden";
    document.getElementById("nieuw").classList.remove("hidden");
    // toon highscores
    saveScore();
    showHighscores();
};
const saveScore = () => {
    let users = JSON.parse(localStorage.getItem("be.vives.users"));
    if (!users) {
        users = [];
    }
    let userObject = {
        naam: global.naam, pogingen: global.pogingen, timestamp: global.timestamp
    };
    users.push(userObject);
    let usersJSON = JSON.stringify(users);
    localStorage.setItem("be.vives.users", usersJSON);
};
const showHighscores = () => {
    let list = document.getElementById("list");
    list.innerHTML = "";
    let users = JSON.parse(localStorage.getItem("be.vives.users"));
    if (users) {
        users.sort((a, b) => a.pogingen - b.pogingen);
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            let li = document.createElement("li");
            li.innerText = user.naam + ": " + user.pogingen + " gok(ken)\n" + user.timestamp;
            list.appendChild(li);
        }
    }
};

const clearHighscores = () => {
    localStorage.clear();
    showHighscores();
};
const kiesWoord = () => {
    let i = Math.floor(Math.random() * global.woorden.length);
    return global.woorden[i];
};
window.addEventListener("load", setup); 