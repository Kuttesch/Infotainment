fetch('https://api.open-meteo.com/v1/forecast?latitude=47.49&longitude=12.05&hourly=temperature_2m&Apparent_Temperature')
    .then(response => response.json())
    .then(data => {
        const todayForecast = data.hourly[0];
        const tomorrowForecast = data.hourly[24];
        const weatherReportElement = document.getElementById('weatherReport');

        const todayDate = new Date(todayForecast.time);
        const todayTemperature = todayForecast.temperature_2m;
        const todayApparentTemperature = todayForecast.Apparent_Temperature;

        const todayHtml = `
            <h2>Heute</h2>
            <div class="date">${todayDate.toLocaleDateString()}</div>
            <div class="temperature">Temperatur: ${todayTemperature}°C</div>
            <div class="temperature">Gefühlte Temperatur: ${todayApparentTemperature}°C</div>
        `;

        const tomorrowDate = new Date(tomorrowForecast.time);
        const tomorrowTemperature = tomorrowForecast.temperature_2m;
        const tomorrowApparentTemperature = tomorrowForecast.Apparent_Temperature;

        const tomorrowHtml = `
            <h2>Morgen</h2>
            <div class="date">${tomorrowDate.toLocaleDateString()}</div>
            <div class="temperature">Temperatur: ${tomorrowTemperature}°C</div>
            <div class="temperature">Gefühlte Temperatur: ${tomorrowApparentTemperature}°C</div>
        `;

        weatherReportElement.innerHTML = todayHtml + tomorrowHtml;
    })
    .catch(error => {
        console.log('Fehler bei der API-Anfrage:', error);
    });
