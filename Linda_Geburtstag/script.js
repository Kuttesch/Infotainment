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

 
function updateClock() {
  var now = new Date();
  let options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
  

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let miliseconds = now.getMilliseconds();

  let digitalClock = document.getElementById('digital-clock');
  digitalClock.textContent = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')// + ':' + miliseconds.toString().padStart(3, '0');

  let date = document.getElementById('date');
  date.textContent = now.toLocaleDateString('de-DE'/*,options*/);



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

function updateDay(){
  let weekday = weekdays[now.Day()];
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  let So =document.getElementById
  let Mo
  let Di
  let Mi
  let Do
  let Fr
  let Sa
}


updateClock();
checkTime();

