// select textarea
const userInput = document.querySelector('#user-input');
// select btn
const button = document.querySelector('#submit-btn');
// select result container
const resultContainer = document.querySelector('#result-container');
// # select wordCount
const WordCountContainer = document.querySelector('#word-count');
// # select letterCount
const letterCountContainer = document.querySelector('#letter-count');

function getUserInput() {
  // return value of userInput
  return userInput.value;
}

function textToWordArray(text) {
  // return array of words
  return userInput.trim().split('');
}

function arrayToText(array) {
  return array.join('');
}

function getRandomNumber(max) {
  // return random number between 0 and max (including 0 and excluding max)
  return Math.floor(Math.random() * Math.floor(max));
}

function scrambleArray(oldArray) {
  // return scrambled array 
  const newArray = [];
  while (oldArray.length > 0){ //eerst verzekeren we dat de loop stopt als de oldArray leeg is, als length=0)
    const randomIndex = getRandomNumber(oldArray.length); // en dan vervangen we woorden door indexnr en pikken we een willekeurig nr uit oldArray
    newArray.push(oldArray[randomIndex]); // en voegen het random indexnummer toe aan newArray
    oldArray.splice(randomIndex, 1); // verwijdert random indexnr uit oldArray om te voorkomen dat bepaalde indexnrs 2x zouden in newArray zitten//
  }
  return newArray;
}


function scrambleText(oldText) {
  // pikt er scrambelt de indexnrs en vervangt de indexnrs door woorden
  const textArray = textToWordArray(oldText); 
  const scrambledArray = scrambleArray(textArray);
  return arrayToText(scrambledArray);
}

}

function onClickScramble() {
  //  update textContent of resultContainer

}

function realTimeScramble() {
  // ## update textContent of resultContainer realtime

}

function getWordCount(text) {
  // # return word count

}

function getLetterCount(text) {
  // # return letter count

}

function updateWordCount(wordCount) {
  // # update the Word Count

}

function updateLetterCount(letterCount) {
  // # update the Letter Count
}

function updateCounts() {
  // # update Word Count and Letter Count

  //  this when function is executed by event => event.target
  //  this.value == event.target.value

}

// add click event listener to submitBtn

// # add input event listener to userInput for counts
// ## add input event listener to userInput for realTimeScramble
