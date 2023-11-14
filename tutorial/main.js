import webgazer from 'webgazer'

// main.js

window.onload = function () {
    webgazer.setGazeListener((data, elapsedTime) => {
        if (data == null) {
            return;
        }

        // Display gaze data on the webpage
        document.getElementById('gazeData').innerText = `
            Gaze X: ${data.x.toFixed(2)}
            Gaze Y: ${data.y.toFixed(2)}
        `;
    }).begin(); //d
};