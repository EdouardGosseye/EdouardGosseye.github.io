const setup = () => {
    vraagGemeente();
}
const vraagGemeente = () => {
    let input = [];
    let i = 0;

    let kader = prompt("Geef een gemeente!")
    while (kader !== "stop")
    {
        input.push(kader);

        kader = prompt("Geef een gemeente!");
    }

    kader = input.sort(compare);

    if (input[0] != null) {
        for (let i = 0; i < input.length; i++) {
            document.getElementById("Gemeentes").innerHTML += `<option value="${i}">${input[i]}</option>`;
        }
    }
}
const compare = (a, b) =>
{
    return a.localeCompare(b);
}


window.addEventListener("load", setup); 