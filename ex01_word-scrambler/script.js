//select textarea
let userInput= document.querySelector(".textarea");
//select btn
let submitBtn= document.querySelector("#submit-btn");
//select result container
let resultContainer= document.querySelector(".card-content");
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
    return array.tostring();   
}

function getRandomNumber(max) {
    //return random number between 0 and max (including 0 and excluding max)
    return Math.floor(Math.random() * max + 1);
}

function scrambleArray(oldArray) {
    //return scrambled array
    return oldArray.sort(function(a,b) {return 0.5-Math.random()});
}

function scrambleText(text) {
    // return scrambled text
    let wordArray = textToWordArray(text);
    wordArray = scrambleArray(wordArray);
    let textChanged = arrayToText(wordArray);

    return textChanged;
}

function onClickScramble() {
    // update textContent of resultContainer
    let text= getUserInput();
    let nieuweText = scrambleText(text);
    resultContainer.textContent = nieuweText; 
}

function realTimeScramble(event) {
    //## update textContent of resultContainer realtime
}

function getWordCount(text) {
    //# return word count
    return text.wordCount;
}

function getLetterCount(text) {
    //# return letter count
    return text.letterCount;
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
