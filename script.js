function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("date").textContent = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  document.getElementById("day").textContent = days[now.getDay()];
}

setInterval(updateClock, 1000);
updateClock(); // initial call
