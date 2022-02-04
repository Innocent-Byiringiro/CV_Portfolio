
let colors= ['red', 'green', 'tahoma', 'orange', "pink", "indigo"]
let button = document.getElementById('title');

button.addEventListener('click', function(){
    var allColors = colors[Math.floor(Math.random() * colors.length)]
    let colorContainer = document.getElementById('content');
    colorContainer.style.background = allColors;
})