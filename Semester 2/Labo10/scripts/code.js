const global = {
    prefixes: ["/g", "/y", "/t", "/i"],
    //keywords: ["webdesign", "arctic monkeys", "COVID19", "viveshwbkortrijk", "mondmasker maken", "bootstrap", "responsive design"],
    urlPrefix: "https://www.",
    google: "google.com/search?q=",
    youtube: "youtube.com/results?search_query=",
    twitter: "twitter.com/hashtag/",
    instagram: "instagram.com/explore/tags/",
    googleCol: "#2790fd",
    youtubeCol: "#fa4848",
    twitterCol: "#48a1c5",
    instagramCol: "#c163ee",
};

const setup = () => {
    document.getElementById("go").addEventListener("click", checkInput);
    loadCommands();
    document.getElementById("clearStorage").addEventListener("click", clearStorage);
};

const checkInput = () => {
    let input = getInput();
    let prefix = input.substring(0, 2);
    let command = input.substring(3);

    /*if (global.prefixes.includes(prefix)) {
        if (global.keywords.includes(command)) {
            search(prefix, command);
        } else {
            alert("Invalid command");
        }
    } else {
        alert("Unknown command prefix");
    }*/
    if (!global.prefixes.includes(prefix)) {
        alert("Unknown command prefix");
    } else {
        search(prefix, command);
    }
};

const getInput = () => {
    return document.getElementById("txtZoekopdracht").value.trim();
};

// url met zoekopdracht samenstellen
const search = (prefix, command) => {
    let url = global.urlPrefix;
    let website;
    if (prefix === global.prefixes[0]) {
        url += global.google + command;
        website = "Google";
    } else if (prefix === global.prefixes[1]) {
        url += global.youtube + command;
        website = "Youtube";
    } else if (prefix === global.prefixes[2]) {
        url += global.twitter + command;
        website = "Twitter";
    } else {
        url += global.instagram + command;
        website = "Instagram";
    }
    window.open(url, "_blank");
    createCard(website, command, url);
    document.getElementById("txtZoekopdracht").value = "";
    saveCommand(website, command, url);
};

const loadCommands = () => {
    let commandsJSON = localStorage.getItem("VIVES.be.commands");
    if (commandsJSON) {
        let commands = JSON.parse(commandsJSON);
        for (let i = 0; i < commands.length; i++) {
            createCard(commands[i].website, commands[i].command, commands[i].url);
        }
    }
}

const saveCommand = (website, command, url) => {
    let commandsJSON = localStorage.getItem("VIVES.be.commands");
    let commands = [];
    if (commandsJSON) {
        commands = JSON.parse(commandsJSON);
    }
    commands.push({website, command, url});
    localStorage.setItem("VIVES.be.commands", JSON.stringify(commands));
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}


const createCard = (website, command, url) => {
    let history = document.querySelector(".history").querySelector(".row");
    let card = document.createElement("div");
    let body = document.createElement("div");
    let col4 = document.createElement("div");
    let h5 = document.createElement("h5");
    let p = document.createElement("p");
    let a= document.createElement("a");

    card.classList.add("card");
    card.classList.add("text-light");
    col4.classList.add("col-4");
    body.classList.add("card-body");
    h5.classList.add("card-title");
    h5.innerText = website;
    p.classList.add("card-text");
    p.innerText = command;
    a.classList.add("btn");
    a.classList.add("btn-dark");
    a.href = url;
    a.innerText = "Go!";
    a.target = "_blank";

    history.appendChild(col4);
    col4.appendChild(card)
    card.appendChild(body);
    body.appendChild(h5);
    body.appendChild(p);
    body.appendChild(a);
    changeColors();
};

const changeColors = () => {
    let cardTitles = document.querySelectorAll(".card-title");
    for (let i = 0; i < cardTitles.length; i++) {
        if (cardTitles[i].innerText === "Youtube") {
            cardTitles[i].parentElement.parentElement.style.backgroundColor = global.youtubeCol;
        } else if (cardTitles[i].innerText === "Google") {
            cardTitles[i].parentElement.parentElement.style.backgroundColor = global.googleCol;
        } else if (cardTitles[i].innerText === "Instagram") {
            cardTitles[i].parentElement.parentElement.style.backgroundColor = global.instagramCol;
        } else {
            cardTitles[i].parentElement.parentElement.style.backgroundColor = global.twitterCol;
        }
    }
};

const clearStorage = () => {
    localStorage.clear();
    let row = document.querySelector(".row");
    row.innerHTML = "";

}

window.addEventListener("load", setup);