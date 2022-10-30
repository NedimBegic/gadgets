
/* Storing input content and show length of the text */
let inputText = document.querySelector('.counterInput');
let wordCount = document.querySelector('.wordCount');
let letterCount = document.querySelector('.letterCount');
let everyChar = document.querySelector('.everyChar')
inputText.addEventListener('input', function (e) {
  // remove white space for both sides of string
  let textContent = inputText.value.trim();
  // count words
  wordCount.textContent = textContent.split(/\s+/).length;
  // count letters
  letterCount.textContent = inputText.value.trim().length;


  // look in the object properties and add char with value of 1 if it does't exist, if it does add ++   
  if (charObj.hasOwnProperty(`${e.data}`)) {
    //because it doesn't add 2 the second time char is clicked I add it here manualy
    if(charObj[`${e.data}`]==1) {charObj[`${e.data}`]=2}
    //then it goes plus one
    document.getElementById(`${e.data}`).innerHTML = `${e.data} = ${charObj[`${e.data}`]++}`;

  } else {
    charObj[`${e.data}`] = 1;
    let list = document.createElement("li");
    list.innerHTML = `${`${e.data}`} = ${charObj[`${e.data}`]}`;
    list.setAttribute('id', `${e.data}`);
    list.setAttribute('class', 'chars');
    everyChar.appendChild(list);
  }

});

/* Object to store letters */
let charObj = {};


document.querySelector('.counterButton').addEventListener('click', () => {
  document.querySelector('.counterDemo').classList.toggle('hidden')
})