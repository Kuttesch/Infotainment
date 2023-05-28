//Weather
fetch('https://api.open-meteo.com/v1/forecast?latitude=47.49&longitude=12.05&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&forecast_days=3&timezone=Europe%2FBerlin')
    .then(response => response.json())
    .then(data => {
        console.log(data);
//Variablen
      const hourlyData = data.hourly;
      const dailyData = data.daily;
      let date = new Date();
      let hour = date.getHours();

      console.log(hour)

//Heute
  //Html-Zeug
      const todayContainer = document.getElementById('today-container');
      const curTemp = document.getElementById('temp-cur');
      const maxTemp = document.getElementById('temp-max');
      const minTemp= document.getElementById('temp-min');
      const appTemp= document.getElementById('temp-app');
      const Symbol= document.getElementById('symbol-today');
  //Variablen
      const TempCur = hourlyData.temperature_2m[hour];
      const TempMax = dailyData.temperature_2m_max[0];
      const TempMin = dailyData.temperature_2m_min[0];
      const TempApp = hourlyData.apparent_temperature[hour];
      let SymbolId = hourlyData.weathercode[hour];
      console.log(SymbolId);
  //Schreiben in div
      curTemp.textContent = TempCur.toString();
      maxTemp.textContent = TempMax.toString();
      minTemp.textContent = TempMin.toString();
      appTemp.textContent = TempApp.toString();
  //Ändern SVG
  const svgMap = {
    0: 'clear.svg',
    1: 'clear.svg',
    2: 'cloudy.svg',
    3: 'cloudy.svg',
    45: 'fog.svg',
    48: 'fog.svg',
    51: 'light_rain.svg',
    53: 'light_rain.svg',
    55: 'light_rain.svg',
    56: 'light_rain.svg',
    57: 'light_rain.svg',
    61: 'light_rain.svg',
    66: 'light_rain.svg',
    63: 'rain.svg',
    65: 'rain.svg',
    67: 'rain.svg',
    71: 'snow.svg',
    73: 'snow.svg',
    75: 'snow.svg',
    80: 'snow.svg',
    81: 'rain.svg',
    82: 'rain.svg',
    85: 'snow.svg',
    86: 'snow.svg',
    95: 'storm.svg',
    96: 'storm.svg',
    99: 'storm.svg'
  };

  if (SymbolId in svgMap) {
    const svgPath = 'svg/'+ svgMap[SymbolId];
    fetch(svgPath)
      .then(response => response.text())
      .then(svgData => {
        const symbolToday = document.getElementById('symbol-today');
        symbolToday.innerHTML = svgData;
        const svgElement = symbolToday.querySelector('svg');
        svgElement.classList.add('svg-today');
      })
  }

//Morgen
  //Html-Zeug
  const tomorrowContainer = document.getElementById('tomorrow-container');
  const curTempTom = document.getElementById('temp-cur-tom');
  const maxTempTom = document.getElementById('temp-max-tom');
  const minTempTom= document.getElementById('temp-min-tom');
  const appTempTom= document.getElementById('temp-app-tom');
  const SymbolTom= document.getElementById('symbol-today-tom');
  //Variablen
  let SumTempCurTom = 0;
  for (let i=24; i <= 47; i++) {
    SumTempCurTom += hourlyData.temperature_2m[i];
    }
  const TempCurTom = SumTempCurTom/24;
  const TempMaxTom = dailyData.temperature_2m_max[1];
  const TempMinTom = dailyData.temperature_2m_min[1];
  const SumTempAppTom = 0;
  for (let i=24; i <= 47; i++) {
    SumTempAppTom += apparent_temperature[i];
    }
  const TempAppTom = SumTempAppTom/24;
  let SymbolIdTom = dailyData.weathercode[1];
//Schreiben in div
curTempTom.textContent = TempCurTom.toString();
maxTempTom.textContent = TempMaxTom.toString();
minTempTom.textContent = TempMinTom.toString();
appTempTom.textContent = TempAppTom.toString();

})


//Darkmode
  function enableDarkMode() {
      document.body.classList.add('dark-mode');
  }
  function disableDarkMode() {
      document.body.classList.remove('dark-mode');
  }

  function checkDarkMode(){
      let currentDate = new Date();
      let currentHour = currentDate.getHours();
  
     if (currentHour >= 21 || currentHour < 6) {
          enableDarkMode();
      } else {
          disableDarkMode();
      }
  }

  function checkTime(){
      checkDarkMode();
      setInterval(checkDarkMode, 15 * 60 * 1000);
  }

//Darkmode
//Clock

  function updateClock() {  
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let miliseconds = now.getMilliseconds();

    let digitalClock = document.getElementById('digital-clock');
        digitalClock.textContent = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')// + ':' + miliseconds.toString().padStart(3, '0');

    let date = document.getElementById('date');
        date.textContent = now.toLocaleDateString('de-DE');



    let hourHand = document.getElementById('hand-hour');
    let minuteHand = document.getElementById('hand-min');
    let secondHand = document.getElementById('hand-sec');
    let milsecHand = document.getElementById('hand-mili');

    let degPerHour = 360 / 12;
    let degPerMinute = 360 / 60;
    let degPerSecond = 360 / 60;
    let degPerMilSec = 360 / 1000;

    let hourRotation = (hours % 12) * degPerHour + minutes * degPerMinute / 12;
    let minuteRotation = minutes * degPerMinute;
    let secondRotation = seconds * degPerSecond;
    let milsecRotation = miliseconds * degPerMilSec;

        hourHand.style.transform = ' rotate(' + hourRotation + 'deg)';
        minuteHand.style.transform = 'rotate(' + minuteRotation + 'deg)';
        secondHand.style.transform = 'rotate(' + secondRotation + 'deg)';
        milsecHand.style.transform = 'rotate(' + milsecRotation + 'deg)';

        setTimeout(updateClock, 1);
  }

//Clock
//Weekdays  

  function updateDay(){
    let now = new Date();
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    let weekday = weekdays[now.getDay()];

    let container =document.getElementById('week-container');
    let Su =document.getElementById('Su');
    let Mo =document.getElementById('Mo');
    let Tu =document.getElementById('Tu');
    let We =document.getElementById('We');
    let Th =document.getElementById('Th');
    let Fr =document.getElementById('Fr');
    let Sa =document.getElementById('Sa');

        if (weekday === 'Su') {
            Su.style.fontSize = '60px';
            container.insertBefore(Mo, null);
            container.insertBefore(Tu, null);
            container.insertBefore(We, null);
      } else if (weekday === 'Mo') {
            Mo.style.fontSize = '60px';
            container.insertBefore(Fr, Mo);
            container.insertBefore(Sa, Mo);
            container.insertBefore(Su, Mo);
      } else if (weekday === 'Tu') {
            Tu.style.fontSize = '60px';
            container.insertBefore(Sa, Mo);
            container.insertBefore(Su, Mo);
      } else if (weekday === 'We') {
            We.style.fontSize = '60px';
            container.insertBefore(Su, Mo);
      } else if (weekday === 'Th') {
            Th.style.fontSize = '60px';
      } else if (weekday === 'Fr') {
            Fr.style.fontSize = '60px';
            container.insertBefore(Mo, null);
      } else if (weekday === 'Sa') {
            Sa.style.fontSize = '60px';
            container.insertBefore(Su, null);
            container.insertBefore(Mo, null);
            container.insertBefore(Tu, null);
      } 
  }

//Weekdays

  updateClock();
  checkTime();
  updateDay();
  

