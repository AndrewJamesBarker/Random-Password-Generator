const charactersAll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersUpperLower = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const charactersSpec = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersNums = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 

let numClick = false
let specClick = false

const passBoxOneEL = document.getElementById("pass-box-one")
const passBoxTwoEl = document.getElementById("pass-box-two")
const popUp = document.getElementById('pop-up')

const lengthInput = document.getElementById("password-length")
const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')

// password length updater

function passLengthUpdate() {
    const number = Math.floor(event.target.value)
  
    if (number >= 8 && number <= 20) {
      passwordLength = number
    } else {
      alert("Password length must be between 8 and 20 characters.")
    }
    event.target.value = passwordLength
}

function inputStepper(event) {
    if (event.target.id === "decrement") {
      lengthInput.stepDown()
    }
  
    if (event.target.id === "increment") {
      lengthInput.stepUp()
    }
  
    passwordLength = lengthInput.value
  }

// Random # generator

function randomCharGen() {
    if (numClick === true && specClick === false) {
    let randomCharacter = Math.floor(Math.random() * charactersNums.length)
    return charactersNums[randomCharacter]
    } else if (specClick === true && numClick === false) {
    let randomCharacter = Math.floor(Math.random() * charactersSpec.length)
    return charactersSpec[randomCharacter]
    } else if (numClick === true && specClick === true) {
    let randomCharacter = Math.floor(Math.random() * charactersAll.length)
    return charactersAll[randomCharacter]
    } else {
    let randomCharacter = Math.floor(Math.random() * charactersUpperLower.length)
    return charactersUpperLower[randomCharacter]
    }
}

// password generator

function passGen() {
    let randomPasswordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += randomCharGen()
    }
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += randomCharGen()
    }
    passBoxOneEL.textContent = randomPasswordOne
    passBoxTwoEl.textContent = randomPasswordTwo
}

// true/false if num or special character selector box clicked or unclicked

function numBox() {
    numClick = !numClick
}

function specBox() {
    specClick = !specClick
}

// clipboard paste

function clickCopy(name) {
    if (name === 'boxOne') {
    let copyText = document.getElementById("pass-box-one").innerText;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
    } else {
        let copyText = document.getElementById("pass-box-two").innerText;
        navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
        });
    }
}
let passwordLength = 15
lengthInput.value = passwordLength

decrementBtn.addEventListener('click', inputStepper)
incrementBtn.addEventListener('click', inputStepper)
lengthInput.addEventListener('blur', updateLength)