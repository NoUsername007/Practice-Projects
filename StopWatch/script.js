const time = document.getElementById('time');
let startingTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

function startTime () {
    if (!isRunning) {
        startingTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
}

function stopTime () {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetTime () {
    clearInterval(timer);
    startingTime = 0;
    elapsedTime = 0;
    isRunning = false;
    time.textContent = `00:00:00:00`;
}

function updateTime () {
    const currentTime = Date.now()
    elapsedTime = currentTime - startingTime;
    let hours = Math.floor(elapsedTime / ( 1000 * 60 * 60 ));
    let minutes = Math.floor(elapsedTime / ( 1000 * 60) % 60 );
    let seconds = Math.floor(elapsedTime / ( 1000 ));
    let milliseconds = Math.floor(elapsedTime % 1000 /  10 );

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    time.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}