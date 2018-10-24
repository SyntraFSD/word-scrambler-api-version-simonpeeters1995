//select textarea
let userInput = document.querySelector(".textarea");
//select btn
let submitBtn = document.querySelector("#submit-btn");
//select result container
let resultContainer = document.querySelector(".card-content");
//# select wordCount
let wordCountContainer = document.querySelector("#word-count");
//# select letterCount
let letterCountContainer = document.querySelector("#letter-count");


function getUserInput() {
    //return value of userInput
    return userInput.textContent;
}

function textToWordArray(text) {
    //return array of words
    return text.split(" ");
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
