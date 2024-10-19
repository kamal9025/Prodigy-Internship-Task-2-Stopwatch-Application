let timerInterval;
let startTime;
let elapsedTime = 0;

const timeDisplay = document.getElementById('time');

function formatTime(ms) {
    const date = new Date(ms);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

document.getElementById('start').onclick = function() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timeDisplay.innerText = formatTime(elapsedTime);
        }, 10);
    }
};

document.getElementById('stop').onclick = function() {
    clearInterval(timerInterval);
    timerInterval = null;
};

document.getElementById('reset').onclick = function() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timeDisplay.innerText = formatTime(elapsedTime);
};
