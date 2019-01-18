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
  // return array of words
  return text.trim().split(' ');
}

function scrambleState(event) {

  const request = event.target;

  if (request.readyState === 4){
    if (request.status >= 200 && request.status <= 300){
      const response = JSON.parse(request.responseText);
      console.log(response.scrambled_text);
      resultContainer.textContent = response.scrambled_text;
    }
  }
}

function apiScramble(object) {

  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', scrambleState);
  request.open('POST', 'http://connect4.pienter.space/api/scramble');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(object));
}

function scrambleText(oldText) {

  const object = { 'text': oldText };
  apiScramble(object);
}

function onClickScramble() {
  //  update textContent of resultContainer
  const userInputValue = getUserInput();
  scrambleText(userInputValue);
}

function realTimeScramble() {
  // ## update textContent of resultContainer realtime
  const userInputValue = this.value;
  scrambleText(userInputValue);
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
