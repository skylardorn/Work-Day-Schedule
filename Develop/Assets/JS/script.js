
const $time = document.getElementById('currentTime');
const $currentDay = document.getElementById('currentDay');
const $save = document.getElementsByClassName('saveBtn');
const $input = document.getElementsByClassName('9am');
$input.textContent = localStorage.getItem($save);



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

$save.addEventListener("click", function(e) {
    e.preventDefault();
    
    

    localStorage.setItem($input.getAttribute("class"), $input.value);
    });

console.log("clicked");

