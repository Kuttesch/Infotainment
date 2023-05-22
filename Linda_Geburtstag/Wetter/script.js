fetch('https://api.open-meteo.com/v1/forecast?latitude=47.49&longitude=12.05&hourly=temperature_2m&Apparent_Temperature')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const hourlyData = data.hourly;
        let currentDate = new Date();
        let currentHour = currentDate.getHours();

        const todayForecast = hourlyData.time[currentHour];
        const tomorrowForecast = hourlyData.time[24];
        const weatherReportElement = document.getElementById('weatherReport');

        const todayDate = new Date(todayForecast);
        const todayTemperature = hourlyData.temperature_2m[currentHour];
        /*const todayApparentTemperature = hourlyData.Apparent_Temperature[0];*/

        const todayHtml = `
            <h2>Heute</h2>
            <div class="date">${todayDate.toLocaleDateString()}</div>
            <div class="temperature">Temperatur: ${todayTemperature}°C</div>
           
        `;

        const tomorrowDate = new Date(tomorrowForecast);
        const tomorrowTemperature = hourlyData.temperature_2m[24];
       /* const tomorrowApparentTemperature = hourlyData.Apparent_Temperature[24];*/

        const tomorrowHtml = `
            <h2>Morgen</h2>
            <div class="date">${tomorrowDate.toLocaleDateString()}</div>
            <div class="temperature">Temperatur: ${tomorrowTemperature}°C</div>
            
        `;

        weatherReportElement.innerHTML = todayHtml + tomorrowHtml;
    })
    .catch(error => {
        console.log('Fehler bei der API-Anfrage:', error);
    });

/*<div class="temperature">Gefühlte Temperatur: ${todayApparentTemperature}°C</div>    
<div class="temperature">Gefühlte Temperatur: ${tomorrowApparentTemperature}°C</div>*/