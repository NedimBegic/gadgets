// add checkboxes
let defaultCheckbox = document.getElementById('defaultCheckbox');
let darkCheckbox = document.getElementById('darkCheckbox');

// add Event Listiners
defaultCheckbox.addEventListener("change", (e) => {
    if(e.target.checked)
    document.body.style.backgroundImage = "url('images/nature.jpg')";
    darkCheckbox.checked = false;
});

darkCheckbox.addEventListener('change', (e) => {
   if(e.target.checked)
   document.body.style.backgroundColor = "black";
   document.body.style.backgroundImage = "";
   document.body.className = "stars";
   defaultCheckbox.checked = false;
});

// put checkbox to off if color is changed
if(document.body.className !== "stars") {
  defaultCheckbox.checked = false;
  darkCheckbox.checked = false;
}