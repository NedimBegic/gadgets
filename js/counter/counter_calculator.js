
let display = document.querySelector('#results');

let buttons = Array.from(document.getElementsByClassName('button'));

let lastElement = display.value;

buttons.map(button => {
    //put event listener on every button
    button.addEventListener('click', (e) => {
        console.log(lastElement)

        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                // break so it don't write C after clearing it 
                break;
            case "←":
                display.innerText = display.innerText.slice(0, -1);
                break;
            case "=":
                display.innerText = eval(display.innerText);
                break;
            case "+":
                if(display.innerText[display.innerText.lnegth-1] == "+") return;
                console.log(display.innerText[display.innerText.length-1])
                display.innerText += "+";
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

