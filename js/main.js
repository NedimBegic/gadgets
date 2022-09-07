/* -------------------------The main code for switching between gadgets---------------------- */

/* Storing all buttons in variables */
let stopwatchButton = document.querySelector('.stopwathcButton');
let clockButton = document.querySelector('.clockButton');

/* Storing all demonstrations in variables */
let stopwatchDemonstration = document.querySelector('.stopwatch');
let clockDemonstration = document.querySelector('.clock');

/* Storing all buttons, fileds and demonstrations in arrays */
let buttonArray = [stopwatchButton];

let demonstrationArray = [stopwatchDemonstration, clockDemonstration];

/* Adding Event Listeners on buttons */
stopwatchButton.addEventListener('click', stopwatchFun);
clockButton.addEventListener('click', clockFun)

/* Functions of Event Listeners */
function stopwatchFun() {
   chooseGadget(stopwatchDemonstration, demonstrationArray);

};

function clockFun() {
    chooseGadget(clockDemonstration, demonstrationArray);
}


/* Function that sets all to display none except chosed gadget */

function chooseGadget(demoGadget, otherDemoArray) {
    // setting all demonstrations on display: none
    for ( let x of otherDemoArray) {
        x.className = "hidden";
    };
    // set the choosen gadget to be visible
    demoGadget.className = "demonstration";
}