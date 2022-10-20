/* Play the screen saver */
document.querySelector('#buttonScreen').addEventListener('click', screenFun);

function screenFun() {
    let screenDiv = document.querySelector('.hidden');
    screenDiv.classList.toggle("hidden")
}

/* Stop the screen saver */
document.getElementById('stopImages').addEventListener('click', stopScreen);

function stopScreen() {
    document.querySelector('.screenPictures').classList.toggle("hidden");
}