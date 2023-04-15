# Weather Dashboard and Temperature Drop Monitor 🌡️📉🚀

In this project, I created a weather dashboard using React and a temperature drop monitor script using Node.js. The weather dashboard displays the current temperature at JFK Airport and provides recommendations based on the temperature. The temperature drop monitor checks for a significant temperature drop (2°C or more) in the next 15 minutes for JFK, ORD, and DFW airports.

## Weather Dashboard 🌤️

The dashboard is built with React, and I used the Tomorrow.io API to fetch the current temperature at JFK Airport. To fetch the data, I implemented the `axios` library for making API calls and the `useEffect` hook to fetch the weather data when the component mounts. Once the data is fetched, it's stored in the `weatherData` state variable.

The dashboard displays the temperature and provides recommendations based on the temperature range, using a custom `getTemperatureStatus` function. The function takes the current temperature and returns an object containing the temperature, a message, and a background color based on the temperature range.

To run the Weather Dashboard, simply start the React development server by running `npm start` in the terminal.

## Temperature Drop Monitor 📉

The temperature drop monitor is a Node.js script that checks for a significant temperature drop (2°C or more) in the next 15 minutes for JFK, ORD, and DFW airports. The script uses the Tomorrow.io API to fetch forecast data for the upcoming 15 minutes and compares the current temperature to the forecasted temperature.

The script is implemented with `async/await` to handle asynchronous API calls efficiently, and the `axios` library is used for making the API calls. If a significant temperature drop is detected, the script logs the location and occurrence time to the console.

To run the Temperature Drop Monitor, you can execute the `temperature-drop-monitor.js` script using Node.js by running `node temperature-drop-monitor.js` in the terminal. The script is located in the root folder of the project.

## How to Run the Project 🚀

1. Clone the repository and navigate to the project directory.
2. Install dependencies with `npm install`.
3. Run the Weather Dashboard with `npm start`.
4. In a separate terminal, run the Temperature Drop Monitor with `node temperature-drop-monitor.js`.


Enjoy! 😊
