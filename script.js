

const addNumbers = document.querySelector('.plus')
const minusNumbers = document.querySelector('.minus')
const counterDisplay = document.querySelector(".Answer")
const numberBox = document.querySelector("#dispNumb")
const upANum = document.querySelector(".up")
const downANum = document.querySelector(".down")


let counter = 0

function addCounter(){
    counterDisplay.innerHTML = numberBox
    // counter.innerHTML = counter + numberBox
}

function subtractCounter(){
    counter.innerHTML = counter - numberBox
}

// upANum.addEventListener('click', upOne())
// downANum.addEventListener('click', downOne())
// addNumbers.addEventListener('click', addCounter())
// minusNumbers.addEventListener('click', subtractCounter())


addNumbers.onclick = addCounter()
minusNumbers.onclick = subtractCounter()