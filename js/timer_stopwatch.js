/* put buttons start, stop and restart in variables */
let buttonStart = document.querySelector('#onlyStart');
let buttonStop = document.querySelector('#onlyStop');
let buttonRestart = document.querySelector('#restartButton');

/* Event Listeners on start, stop and restart */
buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);
buttonRestart.addEventListener('click', restart);

/* variables for minutes, seconds and miliseconds */
let ms = 0;
let s = 0;
let m = 0;

/* declare variables of h1 in placeholder and append the time in the DOM  */
let miliseconds = document.querySelector('#miliseconds');
let seconds = document.querySelector('#second');
let minutes = document.querySelector('#minutes');

/*  set all to 00 */
miliseconds.textContent = "00";
seconds.textContent = "00";
minutes.textContent = "00";

/* Functions for stopwatch */
function start(){
    // change the size of START button
    buttonChange(buttonStart);
    // restart the size of the STOP button
    buttonStop.style.height = "2em";
    buttonStop.style.top = "-2em";
    // count miliseconds
    setInterval(count,10);

    function count() {
        // miliseconds
        ms++;
        ms<9 ? miliseconds.textContent = "0" + ms : miliseconds.textContent = ms;
        // seconds
        if(ms>99) {
            ms = 0;
            s++;
            seconds.textContent = s<=9 ? "0" + s : s;
        };
        // minutes
        if(s>59) {
            s = 0;
            m++;
            minutes.textContent = m<=9 ? "0" + m : m ;
        };
    };
    
};

function stop() {
    buttonChange(buttonStop);
};

function restart() {
    // push RESTART button down
    buttonRestart.style.height = "1em";
    buttonRestart.style.top = "-13em";
    

    // return the size of RESTART button
    setTimeout(returnHeight,300);
    function returnHeight() {
        buttonRestart.style.height = "3em";
        buttonRestart.style.top = "-14em";
    };
};

/* Function when start or stop is pressed */

function buttonChange(button) {
     button.style.height = "1em";
     button.style.top = "-1em";
};