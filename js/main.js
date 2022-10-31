/* -------------------------The main code for switching between gadgets---------------------- */

/* Storing all buttons in variables */
let stopwatchButton = document.querySelector('.stopwathcButton');
let clockButton = document.querySelector('.clockButton');
let wordCounterButton = document.querySelector('.counterButton');
let calculatorButton = document.querySelector('.calculatorButton');

/* Storing all demonstrations in variables */
let stopwatchDemonstration = document.querySelector('.stopwatch');
let clockDemonstration = document.querySelector('.clock');
let calculatorDemonstration = document.querySelector('.calculatorDemo');
let wordDemonstration = document.querySelector('.counterDemo');

/* Storing all buttons, fileds and demonstrations in arrays */
let buttonArray = [stopwatchButton];

let demonstrationArray = [stopwatchDemonstration, clockDemonstration, calculatorDemonstration, wordDemonstration];

/* Adding Event Listeners on buttons */
stopwatchButton.addEventListener('click', stopwatchFun);
clockButton.addEventListener('click', clockFun);
wordCounterButton.addEventListener('click', counterFun);
calculatorButton.addEventListener('click', calculatorFun);


/* Functions of Event Listeners */
function calculatorFun() {
    chooseGadget(calculatorDemonstration, demonstrationArray);
}

function counterFun() {
    chooseGadget(wordDemonstration, demonstrationArray);
    wordDemonstration.classList.add('flexDemo')

}

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

// Storing all fileds in variables and array
let changerFiled =  document.querySelector('.changerField');
let timerFiled = document.querySelector('.timerField');
let counterField = document.querySelector('.counterField');

let fieldArray = [changerFiled, timerFiled, counterField];

// function that turns of all filed except the clicked one
function showField(choosenField, otherFIled) {
    for(let x of otherFIled){
        x.className = 'hidden';
    };
    choosenField.className = 'field'
}

// Clicking on changer icon
document.querySelector('.changer').addEventListener('click', () => {
    showField(changerFiled, fieldArray)
    hideDemonstrations();
})
// Clicking on timer icon
document.querySelector('.timer').addEventListener('click', () => {
    showField(timerFiled, fieldArray);
    hideDemonstrations();
})
// Clicking on counter icon
document.querySelector('.counter').addEventListener('click', () => {
    showField(counterField, fieldArray);
    hideDemonstrations();
})

// Function to hide all demonstrations
function hideDemonstrations() {
    for(let x of demonstrationArray) {
        x.className = " hidden"
    }
}