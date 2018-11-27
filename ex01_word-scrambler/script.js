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

function textToWordArray(text) {   // maakt van de userInput een array v woorden (nodig om over te kn loopen) // 
  // return array of words
  return userInput.trim().split('');
}

function arrayToText(array) { //maak een string tekst van de array door de woorden achter elkaar te zetten //
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
  
  const textArray = textToWordArray(oldText); // = array maken v userInput (woorden)  //
  const scrambledArray = scrambleArray(textArray); // woorden door elkaar gooien in de array
  return arrayToText(scrambledArray); // userInput uit array halen en ze dus als text te tonen
}

}

function onClickScramble() {
  //  update textContent of resultContainer // functie scrambletext toepassen op userInput //
  const userInputValue = getUserInput();
  resultContainer.textContent = scrambleText(userInputValue);
}

function realTimeScramble() {
  // ## update textContent of resultContainer realtime
  const userInputValue = this.value;                        // this.????!!!!!// //zelfde als onder?//
  resultContainer.textContent = scrambleText(userInputValue);
}

function getWordCount(text) {
  // # return word count
const userInputArray = textToWordArray(text); // array maken van woorden van userInput //
return userInputArray.length; //lengte array weergeven //
}

function getLetterCount(text) {
  // # return letter count
  return text.length; //                      // komt die text van hierboven???!!! //
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
