


var addButton = document.getElementById("add-button");
var reduceButton = document.getElementById("reduce-button");
var numberDisplay = document.getElementById("number-display");
var incrementInput = document.getElementById("input-increment");

addButton.addEventListener('click', addFunc);
reduceButton.addEventListener('click', reduceFunc);


var count, increment;


initialize();
function initialize() {
    count = 0;
    increment = 0;
    render();
};

function addFunc() {
    increment += parseInt(incrementInput.value, "<br>");
    count += increment;
    render();
};

function reduceFunc() {
    count -= parseInt(incrementInput.value, "<br>");
    render();
};

function render() {
    if ( Math.sign(count) === -1) {
        numberDisplay.textContent = count;
        numberDisplay.style.color = "red";
    } else {
        numberDisplay.textContent = count;
        numberDisplay.style.color = "black";
    }

};


