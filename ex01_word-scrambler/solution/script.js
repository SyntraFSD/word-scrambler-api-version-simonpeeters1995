// select textarea
const userInput = document.querySelector('#user-input');
// select btn
const submitBtn = document.querySelector('#submit-btn');
// select result container
const resultContainer = document.querySelector('#result-container');
// # select wordCount
const wordCountContainer = document.querySelector('#word-count');
// # select letterCount
const letterCountContainer = document.querySelector('#letter-count');

function getUserInput() {
  // return value of userInput
  return userInput.value;
}

function textToWordArray(text) { 
    return text.trim().split(' ');
}

function arrayToText(array) { 
  return array.join(' ');
}

function getRandomNumber(max) {
  // return random number between 0 and max (including 0 and excluding max)
  return Math.floor(Math.random() * max);
}


function scrambleArray(oldArray) {
  // return scrambled array
  const newArray = [];

  while (oldArray.length > 0) {
    const randomIndex = getRandomNumber(oldArray.length);
    newArray.push(oldArray[randomIndex]);
    oldArray.splice(randomIndex, 1);
  }
  return newArray;
}

function scrambleText(oldText) {
  //  return scrambled text
  const textArray = textToWordArray(oldText);
  const scrambledArray = scrambleArray(textArray);
  return arrayToText(scrambledArray);
}

function onClickScramble() {
  //  update textContent of resultContainer
  const userInputValue = getUserInput();
  resultContainer.textContent = scrambleText(userInputValue);
}

function realTimeScramble() {
  // ## update textContent of resultContainer realtime
  const userInputValue = this.value;
  resultContainer.textContent = scrambleText(userInputValue);
}

function getWordCount(text) {
  // # return word count
  const userInputArray = textToWordArray(text);
  return userInputArray.length;
}

function getLetterCount(text) {
  // # return letter count
  return text.length;
}

function updateWordCount(wordCount) {
  // # update the Word Count
  wordCountContainer.textContent = wordCount;
}

function updateLetterCount(letterCount) {
  // # update the Letter Count
  letterCountContainer.textContent = letterCount;
}

function updateCounts() {
  // # update Word Count and Letter Count
  const currentText = this.value;
  //  this when function is executed by event => event.target
  //  this.value == event.target.value
  const wordCount = getWordCount(currentText);
  const letterCount = getLetterCount(currentText);
  updateWordCount(wordCount);
  updateLetterCount(letterCount);
}

// add click event listener to submitBtn
submitBtn.addEventListener('click', onClickScramble);
// # add input event listener to userInput for counts
userInput.addEventListener('input', updateCounts);
// ## add input event listener to userInput for realTimeScramble
userInput.addEventListener('input', realTimeScramble);
