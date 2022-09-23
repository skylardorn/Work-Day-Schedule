
const $time = document.getElementById('currentTime');
const $currentDay = document.getElementById('currentDay');


function timerFunction() {
    const rightNow = new Date();
    let h = rightNow.getHours();
    let m = rightNow.getMinutes();
    let s = rightNow.getSeconds();
    m = currentTime(m);
    s = currentTime(s);
    $currentDay.innerHTML = rightNow

    setTimeout(timerFunction, 1000)
}

function currentTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

