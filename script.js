const sensorValueElement = document.getElementById('sensorValue');
const statusCircleElement = document.getElementById('statusCircle');

function updateDashboard(sensorValue) {
    sensorValueElement.textContent = `Sensor Value: ${sensorValue}`;

    // Assuming your sensor sends "high" or "low" values
    if (sensorValue.toLowerCase() === 'high') {
        statusCircleElement.classList.remove('circle-low');
        statusCircleElement.classList.add('circle-high');
    } else {
        statusCircleElement.classList.remove('circle-high');
        statusCircleElement.classList.add('circle-low');
    }
}

// Fetch data from the server (replace 'sensor-data-endpoint' with your actual endpoint)
function fetchData() {
    fetch('sensor-data-endpoint')
        .then(response => response.json())
        .then(data => {
            updateDashboard(data.sensorValue);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Fetch data every 5 seconds (adjust the interval as needed)
setInterval(fetchData, 5000);

// Initial fetch
fetchData();
