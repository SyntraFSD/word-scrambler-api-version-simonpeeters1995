//select textarea
let userInput = document.querySelector('#user-input');
//select btn
let submitBtn = document.querySelector('#submit-btn');
//select result container
let resultContainer = document.querySelector('#result-container');
//# select wordCount
let wordCountContainer;
//# select letterCount
let letterCountContainer;


function getUserInput() {
    //return value of userInput
    return userInput.value;
}

function textToWordArray(text) {
    //return array of words
    return text.trim().split(" ");
}

function arrayToText(array) {
}

function getRandomNumber(max) {
    //return random number between 0 and max (including 0 and excluding max)
}

function scrambleArray(oldArray) {
    //return scrambled array
}

function scrambleText(text) {
    // return scrambled text
}

function onClickScramble() {
    // update textContent of resultContainer
    let inputText = getUserInput();
    let inputTextArray = textToWordArray(inputText);
    console.log(inputTextArray);
    let scrambledInputTextArray = scrambleArray(inputTextArray);
}

function realTimeScramble(event) {
    //## update textContent of resultContainer realtime
}

function getWordCount(text) {
    //# return word count
}

function getLetterCount(text) {
    //# return letter count
}

function updateWordCount(wordCount) {
    //# update the Word Count
}

function updateLetterCount(letterCount){
    //# update the Letter Count
}

function updateCounts(event) {
    //# update Word Count and Letter Count
    let currentText = this.value;
    // this when function is executed by event => event.target
    // this.value == event.target.value
}

//add click event listener to submitBtn
submitBtn.addEventListener("click", onClickScramble);
//# add input event listener to userInput for counts
userInput.addEventListener("input", updateCounts);
//## add input event listener to userinput for realTimeScramble
userInput.addEventListener("input", realTimeScramble);
