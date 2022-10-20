
document.querySelector('.changerButton').addEventListener('click', changeColorFun);

function changeColorFun() {
    let colorInput = document.querySelector('.colorInput').value;
    document.body.style.background = colorInput;
    // setting themes checkbox to false
    darkCheckbox.checked = false;
    defaultCheckbox.checked = false;
    // if the user miss typed a color
    if(colorInput !== document.body.style.background){
        document.querySelector('.noColor').textContent = "NO SUCH COLOR";
        setTimeout(() =>  document.querySelector('.noColor').textContent = "", 1000);  
    };
};