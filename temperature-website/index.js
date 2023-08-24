
// ELEMENTS

const calculate = document.getElementById("calculate");
const inputValue = document.getElementById("inputField");
const scaleFrom = document.getElementById("scaleFrom");
const scaleTo = document.getElementById("scaleTo");
const displayOutput = document.getElementById("displayOutput");


// CALCULATTE BUTTON EVENTLISTENER

calculate.addEventListener('click', () => {

    const selectedScaleFrom = scaleFrom.options[scaleFrom.selectedIndex].value;
    const selectedScaleTo = scaleTo.options[scaleTo.selectedIndex].value;
    const enteredValue = parseFloat(inputValue.value);
    // CHECKING IF A NUMBER OR NOT
    if (isNaN(enteredValue)) {
        alert("Enter a Number 🔢🔢🔢");
    }
    // CHECKING IF SCALE IS SELECTED OR NOT
    else if (selectedScaleFrom === "From" || selectedScaleTo === "To") {
        alert("Select a Scale ⚖⚖⚖ to Convert From and To ⚠⚠⚠");
    }
    // CALCULATIONS
    else {
        // CELCIUS CALCULATIONS
        if (selectedScaleFrom === "Celcius" && selectedScaleTo === "Celcius") {
            displayOutput.innerHTML = enteredValue;
        }
        else if (selectedScaleFrom === "Celcius" && selectedScaleTo === "Fahrenheit") {
            displayOutput.innerHTML = ((enteredValue * 1.8) + 32).toFixed(2);
        }
        else if (selectedScaleFrom === "Celcius" && selectedScaleTo === "Kelvin") {
            displayOutput.innerHTML = ((enteredValue + 273.15) * 1).toFixed(2);
        }
        // FAHRENHEIT CALCULATIONS
        else if (selectedScaleFrom === "Fahrenheit" && selectedScaleTo === "Fahrenheit") {
            displayOutput.innerHTML = enteredValue;
        }
        else if (selectedScaleFrom === "Fahrenheit" && selectedScaleTo === "Celcius") {
            displayOutput.innerHTML = ((enteredValue - 32) * 0.55556).toFixed(2);
        }
        else if (selectedScaleFrom === "Fahrenheit" && selectedScaleTo === "Kelvin") {
            displayOutput.innerHTML = (((enteredValue - 32) * 0.55556) + 273.15).toFixed(2);
        }
        // KELIVIN CALCULATIONS
        else if (selectedScaleFrom === "Kelvin" && selectedScaleTo === "Kelvin") {
            displayOutput.innerHTML = enteredValue;
        }
        else if (selectedScaleFrom === "Kelvin" && selectedScaleTo === "Celcius") {
            displayOutput.innerHTML = (enteredValue - 273.15).toFixed(2);
        }
        else if (selectedScaleFrom === "Kelvin" && selectedScaleTo === "Fahrenheit") {
            displayOutput.innerHTML = (((enteredValue - 273.15) * 1.8) + 32).toFixed(2);
        }
        // NO CALCULATION
        else {
            displayOutput.innerHTML = "No Output"
        }
    }
})
