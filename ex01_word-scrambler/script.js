//select textarea
let userInput = document.querySelector("#user-input");
//select btn
let submitBtn = document.querySelector("#submit-btn");
//select result container
let resultContainer = document.querySelector("#result-container");
//# select wordCount
let wordCountContainer = document.querySelector("#word-count");
//# select letterCount
let letterCountContainer = document.querySelector("#letter-count");


function getUserInput() {
    //return value of userInput
    return userInput.value;
}

function textToWordArray(text) {
    //return array of words
    return text.trim().split(" ");
}

function arrayToText(array) {
    return array.join(" ");
}

console.log(arrayToText);

function getRandomNumber(max) {
    //return random number between 0 and max (including 0 and excluding max)
    return Math.floor(Math.random() * max);
    
}       

function scrambleArray(oldArray) {
    //return scrambled array
    let newArray = [];

    while(oldArray.length > 0){
        let randomIndex = getRandomNumber(oldArray.length);
        newArray.push(oldArray[randomIndex]);
        oldArray.splice(randomIndex, 1); 
}
    return newArray;
}

function scrambleText(text) {
    // return scrambled text
    return text.arrayToText(" ");
}


function printScrambledText(text){
    resultContainer.textContent = text;
}


function onClickScramble() {
    // update textContent of resultContainer
    let inputText = getUserInput();
    let inputTextArray = textToWordArray(inputText);
    let scrambleInputTextArray = scrambleArray(inputTextArray);
    let scrambledInputText = arrayToText(scrambleInputTextArray);
    printScrambledText(scrambledInputText);
}

/* function realTimeScramble(event) {
    //## update textContent of resultContainer realtime
    let inputText = getUserInput();
    let inputTextArray = textToWordArray(inputText);
    let scrambleInputTextArray = scrambleArray(inputTextArray);
    let scrambledInputText = arrayToText(scramblInputTextArray);
    printScrambledText(scrambledInputText);
} */

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
    let wordCount = getWordCount();
    wordCountContainer.textContent = text;

}

function updateLetterCount(letterCount){
    //# update the Letter Count
    let letterCount = getLetterCount();
    letterCountContainer.textContent = text;
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
