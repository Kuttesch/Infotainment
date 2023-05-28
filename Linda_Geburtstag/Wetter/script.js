fetch('https://api.open-meteo.com/v1/forecast?latitude=47.49&longitude=12.05&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&forecast_days=3&timezone=Europe%2FBerlin')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const hourlyData = data.hourly;
        let currentDate = new Date();
        let currentHour = currentDate.getHours();

        const weatherReportElement = document.getElementById('weatherReport');
        const temperature = document.getElementById('temperature');
        const temperature2 = document.getElementById('temperature2');


        const todayTemperature = hourlyData.temperature_2m[currentHour];

        temperature.textContent = todayTemperature.toString();

        let SummetomorrowTemperature = 0;
        for (let i= 24; i <= 47; i++) {
            SummetomorrowTemperature += hourlyData.temperature_2m[i];
        }

        const tomorrowTemperature = SummetomorrowTemperature/24 ;
       /* const tomorrowApparentTemperature = hourlyData.Apparent_Temperature[24];*/

       temperature2.textContent = tomorrowTemperature.toString();
    })
    .catch(error => {
        console.log('Fehler bei der API-Anfrage:', error);
    });

/*<div class="temperature">Gefühlte Temperatur: ${todayApparentTemperature}°C</div>    
<div class="temperature">Gefühlte Temperatur: ${tomorrowApparentTemperature}°C</div>*/