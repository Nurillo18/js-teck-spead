var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elMan = document.querySelector(".list__man");
var elBike = document.querySelector(".list__bike");
var elCar = document.querySelector(".list__car");
var elPlane = document.querySelector(".list__plane");

var manSpead = 3.6
var bikeSpead = 20.1
var carSpead = 70
var planeSpead = 800

elForm.addEventListener("submit", function(e){
    e.preventDefault();

    firstSpaed()
    secoundSpead()
    thirdSpead()
    fourSpead()
})

function firstSpaed() {
    var elInputVal = elInput.value
    var resulFirst = elInputVal / Math.round(manSpead);
    elMan.textContent = Math.round(resulFirst) + " soat";
}

function secoundSpead() {
    var elInputVal = elInput.value
    var resultSecound = elInputVal / Math.round(bikeSpead);
    elBike.textContent = Math.round(resultSecound) + " soat";
}
function thirdSpead() {
    var elInputVal = elInput.value
    var resultThird = elInputVal / Math.round(carSpead);
    elCar.textContent = Math.round(resultThird) + " soat";
}
function fourSpead() {
    var elInputVal = elInput.value
    var resultFour = elInputVal / Math.round(planeSpead);
    elPlane.textContent = Math.round(resultFour) + " soat"  ;
}