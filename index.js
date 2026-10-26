// with built-in method
function converterWithBuiltIn(reamur, kelvin, fahrenHeit) {
  const celcius = 40;
  const celciusReamur = (reamur * 5) / 4;
  const celciusKelvin = kelvin - 273.15;
  const celciusFahrenHeit = (fahrenHeit * 5) / 4;

  const allCelcius = [
    "Celcius: " + celcius,
    "Celcius reamur: " + celciusReamur,
    "Celcius kelvin: " + celciusKelvin,
    "Celcius fahrenHeit: " + celciusFahrenHeit,
  ];

  console.log("With built-in method");
  allCelcius.forEach((items) => {
    console.log(items);
  });
}
converterWithBuiltIn(30, 25, 22);

// without built-in method
function converterWithoutBuiltIn(reamur, kelvin, fahrenHeit) {
  const celcius = 40;
  const celciusReamur = (reamur * 5) / 4;
  const celciusKelvin = kelvin - 273.15;
  const celciusFahreinHeit = (fahrenHeit * 5) / 9;

  let result = "";

  result += "celcius: " + celcius;
  result += " celciusReamur: " + celciusReamur;
  result += " celciusKelvin: " + celciusKelvin;
  result += " celciusFahrenHeit: " + celciusFahreinHeit;

  let res = "";
  for (let i = 0; i < result.length; i++) {
    res += result[i];
  }

  console.log("\nWithout built-in method");
  console.log(result);
}
converterWithoutBuiltIn(30, 25, 22);
