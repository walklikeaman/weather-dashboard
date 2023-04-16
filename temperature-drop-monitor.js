const axios = require('axios');

const API_KEY = 'w5AYjvQdyA5o9wt4jcrWPLYL3SXseYNe';
const LOCATIONS = [
    { code: 'JFK', lat: 40.6413, lon: -73.7781 },
    { code: 'ORD', lat: 41.9742, lon: -87.9073 },
    { code: 'DFW', lat: 32.8998, lon: -97.0403 },
];

const fetchData = async (location) => {
    const response = await axios.get(
        `https://api.tomorrow.io/v4/timelines?location=${location.lat},${location.lon}&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY}`
    );

    return response.data.data.timelines[0].intervals;
};

const checkTemperatureDrop = async () => {
    for (const location of LOCATIONS) {
        const data = await fetchData(location);

        for (let i = 0; i < data.length - 1; i++) {
            const currentTemp = data[i].values.temperature;
            const nextTemp = data[i + 1].values.temperature;
            const drop = currentTemp - nextTemp;

            if (drop >= 2) {
                console.log(
                    `Temperature drop alert for ${location.code}: ${currentTemp}°C -> ${nextTemp}°C at ${data[i + 1].startTime}`
                );
            }
        }
    }
};

const monitorTemperature = () => {
    checkTemperatureDrop();
    setInterval(checkTemperatureDrop, 15 * 60 * 1000); // Check every 15 minutes
};

monitorTemperature();
