let count = 0;
count = Number(count);


document.getElementById('decrease').onclick = function () {
    count--
    document.getElementById('count').textContent = count;
}

document.getElementById('reset').onclick = function () {
    count = 0
    document.getElementById('count').textContent = count;
}

document.getElementById('increase').onclick = function () {
    count++
    document.getElementById('count').textContent = count;
}