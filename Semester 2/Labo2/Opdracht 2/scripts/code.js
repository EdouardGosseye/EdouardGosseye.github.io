alert("Dit is een alert pop-up!");

let confirmResult = confirm("Dit is een confirm pop-up. Klik op OK of Cancel.");
console.log("Return value van confirm:", confirmResult);

let promptResult = prompt("Dit is een prompt pop-up. Voer iets in:");
console.log("Return value van prompt (ingevuld):", promptResult);

let promptResultCancel = prompt("Dit is een prompt pop-up. Klik op Cancel zonder iets in te voeren:");
console.log("Return value van prompt (geklikt op Cancel):", promptResultCancel);