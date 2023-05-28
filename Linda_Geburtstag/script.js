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
//Weather
/*function updateWeather() {
fetch('https://api.open-meteo.com/v1/forecast?latitude=47.49&longitude=12.05&hourly=temperature_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&forecast_days=3&timezone=Europe%2FBerlin')
    .then(response => response.json())
    .then(data => {
        console.log(data);
//Variablen
      const hourlyData = data.hourly;
      const dailyData = data.daily;
      let date = new Date();
      let hour = date.getHours();

//Heute
  //Html-Zeug
      const todayContainer = document.getElementById('today-container');
      const curTemp = document.getElementById('temp-cur');
      const maxTemp = document.getElementById('temp-max');
      const minTemp= document.getElementById('temp-min');
      const appTemp= document.getElementById('temp-app');
      const Symbol= document.getElementById('symbol-cur');
  //Variablen
      let TempCur = hourlyData.temperature_2m[hour];
      let TempMax = dailyData.temperature_2m_max[0];
      let TempMin = dailyData.temperature_2m_min[0];
      let TempApp = hourly.Data.apparent_temperature[hour];
      let SymbolId = hourlyData.weathercode[hour];
  //Schreiben in div
      curTemp.textContent = TempCur.toString();
      maxTemp.textContent = TempMax.toString();
      TempMin.textContent = TempMin.toString();
      TempApp.textContent = TempApp.toString();
      


    })}*/

  updateClock();
  checkTime();
  updateDay();
  /*updateWeather();*/
  

