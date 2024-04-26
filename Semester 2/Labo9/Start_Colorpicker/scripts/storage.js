

const storeSliderValues = () => {

    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let rgb = {
        red: red,
        green: green,
        blue: blue
    };
    let jsonText = JSON.stringify(rgb);
    localStorage.setItem('sliderValues',jsonText);
};

const restoreSliderValues = () => {
    let sliderValues = JSON.parse(localStorage.getItem('sliderValues'));
    if (sliderValues != null) {
        document.getElementById("sldRed").value = sliderValues.red;
        document.getElementById("lblRed").innerHTML = sliderValues.red;

        document.getElementById("sldGreen").value = sliderValues.green;
        document.getElementById("lblGreen").innerHTML = sliderValues.green;

        document.getElementById("sldBlue").value = sliderValues.blue;
        document.getElementById("lblBlue").innerHTML = sliderValues.blue;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = [];
    let swatchComponents = document.getElementsByClassName("swatch");
    for (let i = 1; i < swatchComponents.length; i++) {
        let rgb ={
            red: parseInt(swatchComponents[i].getAttribute("data-red")),
            green: parseInt(swatchComponents[i].getAttribute("data-green")),
            blue: parseInt(swatchComponents[i].getAttribute("data-blue"))
        }
        swatches.push(rgb)
    }
    let jsonText = JSON.stringify(swatches);
    localStorage.setItem('Vives.be.swatches',jsonText);
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem('Vives.be.swatches'));
    if (swatches) {
        for (let i = 0; i < swatches.length; i++) {
            addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
        }
    }
};
