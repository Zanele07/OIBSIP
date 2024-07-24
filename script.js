function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.textContent = 'Please enter a valid number';
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === 'celsius') {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === 'fahrenheit') {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
    } else if (unit === 'kelvin') {
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temperature;
    }

    result.innerHTML = `
        ${celsius.toFixed(2)} °C<br>
        ${fahrenheit.toFixed(2)} °F<br>
        ${kelvin.toFixed(2)} K
    `;
}
