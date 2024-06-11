const setup = () => {
	let sliders = document.getElementsByClassName("colorSlider");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("input", updateColor);
	}

	updateColor();
}

const updateColor = () => {
	let redSlider = document.getElementById("redSlider");
	let greenSlider = document.getElementById("greenSlider");
	let blueSlider = document.getElementById("blueSlider");

	let redValue = document.getElementById("redValue");
	let greenValue = document.getElementById("greenValue");
	let blueValue = document.getElementById("blueValue");

	let colorDemos = document.getElementsByClassName("colorDemo");

	let red = redSlider.value;
	let green = greenSlider.value;
	let blue = blueSlider.value;

	redValue.innerText = red;
	greenValue.innerText = green;
	blueValue.innerText = blue;

	let color = `rgb(${red},${green},${blue})`;
	colorDemos[0].style.backgroundColor = color;
}

window.addEventListener("load", setup);
