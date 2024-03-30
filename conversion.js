function Tconvert() {
  var input = parseFloat(document.getElementById("numconv").value);
  var unit = document.getElementById("unit").value;
  var result = document.getElementById("result");

  switch (unit) {
    case "F":
      var c = (input - 32) * (5 / 9);
      result.textContent = input + " Fahrenheit is " + c + " Celsius";
      break;
    case "C":
      var f = input * (9 / 5) + 32;
      result.textContent = input + " Celsius is " + f + " Fahrenheit";
      break;
    default:
      result.textContent = "Invalid input";
  }
}
function Dconvert() {
  var input = parseFloat(document.getElementById("distconv").value);
  var unit = document.getElementById("distunit").value;
  var result = document.getElementById("result");

  switch (unit) {
    case "M":
      var km = input * 1.609344;
      result.textContent = input + " Miles are " + km + " Kilometres";
      break;
    case "KM":
      var m = input * 0.62137119;
      result.textContent = input + " Kilometres are " + m + " Miles";
      break;
    default:
      result.textContent = "Invalid input";
  }
}
function Vconvert() {
  var input = parseFloat(document.getElementById("volconv").value);
  var unit = document.getElementById("volunit").value;
  var result = document.getElementById("result");

  switch (unit) {
    case "G":
      var l = input * 3.785412;
      result.textContent = input + " Gallons are " + l + " Litres";
      break;
    case "L":
      var g = input * 0.264172;
      result.textContent = input + " Litres are " + g + " Gallons";
      break;
    default:
      result.textContent = "Invalid input";
  }
}
