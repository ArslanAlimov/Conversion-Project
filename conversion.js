function Tconvert() {
    var input = parseFloat(document.getElementById("numconv").value);
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (unit === "F") {

        var c = (input - 32) * (5 / 9);

        result.textContent = input + " Fahrenheit is " + c + " Celsius";
    }
    else if (unit === "C") {
        var f = ((9 / 5) * input) + 32;

        result.textContent = input + " Celsius is " + f + " Fahrenheit";
    }
    else {
        result.textContent = " invalid input ";
    }
}
function Dconvert() {
    var input = parseFloat(document.getElementById("distconv").value);
    var unit = document.getElementById("distunit").value;
    var result = document.getElementById("result");

    if (unit === "M") {

        var km = (input * 1.609344);

        result.textContent = input + " Miles are " + km + " Kilometres";
    }
    else if (unit === "KM") {

        var m = (input * 0.62137119);

        result.textContent = input + " Kilometres are " + m + " Miles";
    }
    else {
        result.textContent = " invalid input ";
    }
}
function Vconvert() {
    var input = parseFloat(document.getElementById("volconv").value);
    var unit = document.getElementById("volunit").value;
    var result = document.getElementById("result");

    if (unit === "G") {

        var l = (input * 3.785412);

        result.textContent = input + " Gallons are " + l + " Litres";
    }
    else if (unit === "L") {

        var g = (input * 0.264172);

        result.textContent = input + " Litres are " + g + " Gallons";
    }
    else {
        result.textContent = " invalid input ";
    }
}



