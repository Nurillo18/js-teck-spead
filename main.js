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
    if(elInputVal < 0){
        elMan.classList.add("danger");
        elMan.classList.remove("normal");
        elMan.classList.remove("should");
        elMan.classList.remove("good");
        elMan.classList.remove("num-last");
        return elMan.textContent = `Enter the positive number dear.!`
     }
     if(elInputVal == 0) {
        elMan.classList.add("normal");
        elMan.classList.remove("danger");
        elMan.classList.remove("should");
        elMan.classList.remove("good");
        elMan.classList.remove("num-last");
        return elMan.textContent = `0 is not a number dear. !!!`
    }
    if (elInputVal < 3.6) {
        elMan.classList.add("should");
        elMan.classList.remove("danger");
        elMan.classList.remove("normal");
        elMan.classList.remove("good");
        elMan.classList.remove("num-last");
        return elMan.textContent = `Can't go at this hour dear.!`
    }
    if (elInputVal > 0) {
        elMan.classList.add("good");
        elMan.classList.remove("danger");
        elMan.classList.remove("normal");
        elMan.classList.remove("should");
        elMan.classList.remove("num-last");
       return resulFirst = elInputVal / Math.round(manSpead)
    }
    if (elInputVal = " "){
        elMan.classList.add("num-last");
        elMan.classList.remove("danger");
        elMan.classList.remove("normal");
        elMan.classList.remove("should");
        elMan.classList.remove("good");
        return elMan.textContent = `Enter the number dear.!`
    }
}

function secoundSpead() {
    var elInputVal = elInput.value
    var resultSecound = elInputVal / Math.round(bikeSpead);
    elBike.textContent = Math.round(resultSecound) + " soat";
    if(elInputVal < 0){
        elBike.classList.add("danger");
        elBike.classList.remove("normal");
        elBike.classList.remove("should");
        elBike.classList.remove("good");
        elBike.classList.remove("num-last");
        return elBike.textContent = `Enter the positive number dear.!`
     }
     if(elInputVal == 0) {
        elBike.classList.add("normal");
        elBike.classList.remove("danger");
        elBike.classList.remove("should");
        elBike.classList.remove("good");
        elBike.classList.remove("num-last");
        return elBike.textContent = `0 is not a number dear. !!!`
    }
    if (elInputVal < 20.1){
        elBike.classList.add("should");
        elBike.classList.remove("danger");
        elBike.classList.remove("normal");
        elBike.classList.remove("good");
        elBike.classList.remove("num-last");
        return elBike.textContent = `Can't go at this hour dear.!`
    }
    if (elInputVal > 0) {
        elBike.classList.add("good");
        elBike.classList.remove("danger");
        elBike.classList.remove("normal");
        elBike.classList.remove("should");
        elBike.classList.remove("num-last");
        return resultSecound = elInputVal / Math.round(bikeSpead)
     }
     if (elInputVal = " "){
        elBike.classList.add("num-last");
        elBike.classList.remove("danger");
        elBike.classList.remove("normal");
        elBike.classList.remove("should");
        elBike.classList.remove("good");
        return elBike.textContent = `Enter the number dear.!`
     }
}
function thirdSpead() {
    var elInputVal = elInput.value
    var resultThird = elInputVal / Math.round(carSpead);
    elCar.textContent = Math.round(resultThird) + " soat";
    if(elInputVal < 0){
        elCar.classList.add("danger");
        elCar.classList.remove("normal");
        elCar.classList.remove("should");
        elCar.classList.remove("good");
        elBike.classList.remove("num-last");
        return elCar.textContent = `Enter the positive number dear.!`
     }
     if(elInputVal == 0) {
        elCar.classList.add("normal");
        elCar.classList.remove("danger");
        elCar.classList.remove("should");
        elCar.classList.remove("good");
        elCar.classList.remove("num-last");
        return elCar.textContent = `0 is not a number dear. !!!`
    }
    if (elInputVal < 70) {
        elCar.classList.add("should");
        elCar.classList.remove("danger");
        elCar.classList.remove("normal");
        elCar.classList.remove("good");
        elCar.classList.remove("num-last");
        return elCar.textContent = `Can't go at this hour dear.!`
    }
    if (elInputVal > 0) {
        elCar.classList.add("good");
        elCar.classList.remove("danger");
        elCar.classList.remove("normal");
        elCar.classList.remove("should");
        elCar.classList.remove("num-last");
        return resultThird = elInputVal / Math.round(carSpead)
     }
     if (elInputVal = " "){
        elCar.classList.add("num-last");
        elCar.classList.remove("danger");
        elCar.classList.remove("normal");
        elCar.classList.remove("should");
        elCar.classList.remove("good");
         return elCar.textContent = `Enter the number dear.!`
     }

}
function fourSpead() {
    var elInputVal = elInput.value
    var resultFour = elInputVal / Math.round(planeSpead);
    elPlane.textContent = Math.round(resultFour) + " soat"  ;
    if(elInputVal < 0){
        elPlane.classList.add("danger");
        elPlane.classList.remove("normal");
        elPlane.classList.remove("should");
        elPlane.classList.remove("good");
        elPlane.classList.remove("num-last");
        return elPlane.textContent = `Enter the positive number dear.!`
     }
     if(elInputVal == 0) {
        elPlane.classList.add("normal");
        elPlane.classList.remove("danger");
        elPlane.classList.remove("should");
        elPlane.classList.remove("good");
        elPlane.classList.remove("num-last");
        return elPlane.textContent = `0 is not a number dear. !!!`
    }
    if (elInputVal < 800) {
        elPlane.classList.add("should");
        elPlane.classList.remove("danger");
        elPlane.classList.remove("normal");
        elPlane.classList.remove("good");
        elPlane.classList.remove("num-last");
        return elPlane.textContent = `Can't go at this hour dear.!`
    }
    if (elInputVal > 0) {
        elPlane.classList.add("good");
        elPlane.classList.remove("danger");
        elPlane.classList.remove("normal");
        elPlane.classList.remove("should");
        elPlane.classList.remove("num-last");
        return resultFour = elInputVal / Math.round(planeSpead)
     }
     if (elInputVal = " "){
        elPlane.classList.add("num-last");
        elPlane.classList.remove("danger");
        elPlane.classList.remove("normal");
        elPlane.classList.remove("should");
        elPlane.classList.remove("good");
         return elPlane.textContent = `Enter the number dear.!`
     }
}