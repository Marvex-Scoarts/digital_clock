function updateClock() {
    const clockElement = 
    document.getElementById('clock');
    const now = new Date();

    const time = now.toLocaleTimeString();
    clockElement.textContent = time;
}

setInterval(updateClock, 1000);
updateClock();