// pahle hmko randome Number chahiye 1 see 100 ke beech to (Math.random()*100 + 1) isko integer me kro taaki decimal me naa aa jaaye ise let me lenaa const nhi kyoun ki game phir se start krna hoga
let randomNumber = parseInt(Math.random() * 100 + 1);

// ab submit ko pehle pakro jiska id subt hai
const submit = document.querySelector("#subt");

// ab input ko pakarna hai jahan input daalenge jiska id guessField hai
const userInput = document.querySelector("#guessField");

// ab previous guess me jo span hai usko pakarna hai jiska class guesses hai
const guessSlot = document.querySelector(".guesses");

// ab remaining guess me jo 10 hai jiska class lastResult hai isko pakarna hai ye starting me 10 rahega lekin dheere dheere ghatta jaayega jaise jaise number of guess badhenge
const remaining = document.querySelector(".lastResult");

// wo para select kr lete hai jiska class lowOrHi tha us para me kuchh show krna hai
const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

// jab phir se start krna hai to ek paragraph create krna hai
const p = document.createElement("p");

// is array me wo sabhi guess ko store kr lenge jo user ne kiye taaki dobara wahi guess naa kr le
let prevGuess = [];
let numGuess = 1;

let playGame = true;

// <<<<<<< ---- ye sab cheez jo upar likhe wo basic tha ki usko kaise access aur store kare ab main logic likhenge----->>>>>

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value); // guess me hi hamara user input kaa value rhega
    console.log(guess);
    validateGuess(guess);
  });
}

// neeche me jo parameter guess le rhe hai wo jo guess wahi hai uper waala jisme hm userinput ka value le rhe hai

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
