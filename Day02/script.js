setInterval(() => {
  const date = new Date();
  document.getElementById("hours").innerHTML = date.getHours();
  document.getElementById("minutes").innerHTML = date.getMinutes();

  const seconds = document.getElementById('seconds')
  if(date.getSeconds() < 10){
    seconds.innerHTML = "0" + date.getSeconds()
  } else {
    seconds.innerHTML = date.getSeconds()
  }

  document.getElementById('date').innerHTML = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  document.getElementById('day').innerHTML = date.toLocaleDateString('en-US', { weekday: 'short' });

}, 1000);
