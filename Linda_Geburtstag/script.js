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

  







  updateClock();
  checkTime();
  updateDay();

