//select textarea
let userInput = document.querySelector('#user-input');
//select btn
let submitBtn = document.querySelector('#submit-btn');
//select result container
let resultContainer = document.querySelector('#result-container');
//# select wordCount
let wordCountContainer = document.querySelector('#word-Count');
//# select letterCount
let letterCountContainer =document.querySelector('#letter-count');


function getUserInput() {
    //return value of userInput (geen variabele nodig omdat )
    return userInput.value;
}

function textToWordArray(text) {
    //return array of words
    return text.trim().split(" ");
}

function arrayToText(array) {
    return array.join(" ");
}

function getRandomNumber(max) {
    //return random number between 0 and max (including 0 and excluding max)
   return Math.floor(Math.random()*max);
}

function scrambleArray(oldArray) {
    //return scrambled array
    //return oldArray.sort();
    let newArray = [];
    while (oldArray.length > 0){
        let randomIndex = getRandomNumber(oldArray.length);
        newArray.push(oldArray[randomIndex]);
        oldArray.splice(randomIndex,1)

    }
    return newArray;
}

function scrambleText(text) {
    // return scrambled text
    let woordenString = textToWordArray(text);
    let woordenRij = scrambleArray(woordenString);
    let gewijzigdeWoordenString = arrayToText(woordenRij);


    return gewijzigdeWoordenString;
}

function printScrambledText(text){
    resultContainer.textContent = text;
}

function onClickScramble() {
    // update textContent of resultContainer
    let inputText = getUserInput();
    let inputTextArray = textToWordArray(inputText);
    let scrambledInputTextArray = scrambleArray(inputTextArray);
    let scrambledInputText = arrayToText(scrambledInputTextArray);
    printScrambledText(scrambledInputText);
}

function realTimeScramble(event) {
    //## update textContent of resultContainer realtime
    let nieuweTekst = getUserInput();
    let gehaspeldeTekst = scrambleText(nieuweTekst);
    resultContainer.textContent = gehaspeldeTekst;
}

function getWordCount(text) {
    //# return word count
    return text.split(" ").length;
}

function getLetterCount(text) {
    //# return letter count
    return text.length;
}

function updateWordCount(wordCount) {
    //# update the Word Count
    wordCountContainer.textContent = wordCount;
}

function updateLetterCount(letterCount){
    //# update the Letter Count
    letterCountContainer.textContent = letterCount;
}

function updateCounts(event) {
    //# update Word Count and Letter Count
    let currentText = this.value;
    // this when function is executed by event => event.target
    // this.value == event.target.value
    let letterTeller = getLetterCount(currentText);
    let woordTeller = getWordCount(currentText);
    updateWordCount(woordTeller);
    updateLetterCount(letterTeller);
}

//add click event listener to submitBtn
submitBtn.addEventListener("click", onClickScramble);
//# add input event listener to userInput for counts
userInput.addEventListener("input", updateCounts);
//## add input event listener to userinput for realTimeScramble
userInput.addEventListener("input", realTimeScramble);
