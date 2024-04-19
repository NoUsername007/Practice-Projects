function updateClock () {
    const now = new Date;
    const clock = document.getElementById('clock');
    const hour = now.getHours().toString().padStart( 2, 0 );
    const minutes = now.getMinutes().toString().padStart( 2, 0 );
    const seconds = now.getSeconds().toString().padStart( 2, 0 );
    const Time = `${hour} : ${minutes} : ${seconds}`

    clock.textContent = Time;
}

updateClock();

setInterval(updateClock, 1000);