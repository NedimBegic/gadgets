// calling the function every second
setInterval(setClock, 1000);

// store the pointers in variables
const hourPointer = document.querySelector('[data-hour-pointer]');
const minutePointer = document.querySelector('[data-minute-pointer]');
const secondPointer = document.querySelector('[data-second-pointer]');

// making the function that is called
function setClock() {
    const currentDate = new Date();

    const secondsRotation = currentDate.getSeconds()/60;
    const minutesRotation =  (secondsRotation + currentDate.getMinutes())/60;
    const hoursRotation =  (minutesRotation + currentDate.getHours())/12;

    // calling  rotation function on every pointer
    pointerRotation(secondPointer, secondsRotation);
    pointerRotation(minutePointer, minutesRotation);
    pointerRotation(hourPointer, hoursRotation);
    

}

// make a function that rotates the pointers 
function pointerRotation (element, rotation) {
    element.style.setProperty('--rotation', rotation * 360)
}

// calling the function setClock on load page, because otherwise it waits 1 second and the pointers are all on top
setClock();