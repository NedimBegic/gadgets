
document.querySelector('.changerButton').addEventListener('click', changeColorFun);

function changeColorFun() {
    let colorInput = document.querySelector('.colorInput').value;
    document.body.style.background = colorInput;
    console.log(colorInput)


}