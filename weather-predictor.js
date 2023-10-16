function predictWeather() {
    // Show loading indicator
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';

    // Get input values
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const pressure = parseFloat(document.getElementById('pressure').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);

    // Get the selected temperature scale (Celsius or Fahrenheit)
    const temperatureScale = document.querySelector('input[name="temperatureScale"]:checked').value;

    // Convert temperature to Celsius (if in Fahrenheit)
    let temperature = temperatureInput;
    if (temperatureScale === 'Fahrenheit') {
        temperature = (temperature - 32) * (5/9);
    }

    // Initialize prediction with a default value
    let prediction = "Unknown";

    // Weather prediction logic
    if (temperature < 5 && humidity > 80) {
        prediction = "It's likely to snow tomorrow!";
    } else if (temperature > 30 && pressure > 1015) {
        prediction = "Hot and clear skies expected. Stay hydrated!";
    } else if (humidity > 90 && pressure < 1005) {
        prediction = "High chances of rain tomorrow. Carry an umbrella!";
    } else if (pressure < 1000) {
        prediction = "Low pressure detected! It might rain tomorrow. Be prepared.";
    } else if (temperature > 20 && temperature <= 30) {
        prediction = "Mild and pleasant weather expected. Perfect for outdoor activities!";
    } else if (temperature <= 20 && temperature >= 10) {
        if (windSpeed > 20) {
            prediction = "Cooler temperatures and windy conditions. Dress warmly and brace for strong winds.";
        } else {
            prediction = "Cooler temperatures. Dress warmly if heading out.";
        }
    } else if (temperature < 10) {
        prediction = "Cold weather ahead. Bundle up and stay warm!";
    } else {
        prediction = "Typical weather conditions for the season.";
    }

    // Simulate a brief delay for prediction and then display the result
    setTimeout(function() {
        // Hide loading indicator and show result area
        loadingElement.style.display = 'none';
        document.getElementById('result').style.display = 'block';
        
        // Set the prediction text
        const predictionElement = document.getElementById('prediction');
        predictionElement.innerText = prediction;
    }, 1000);  // Delay of 1 second for demonstration purposes
}
