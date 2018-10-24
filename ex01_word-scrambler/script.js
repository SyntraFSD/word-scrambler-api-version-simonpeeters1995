//select textarea
let userInput= document.querySelector(".textarea");
//select btn
let submitBtn= document.querySelector("#submit-btn");
//select result container
let resultContainer= document.querySelector(".card-content");
//# select wordCount
let wordCountContainer= document.querySelector("#word-count");
//# select letterCount
let letterCountContainer= document.querySelector("#letter-count");


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

function getRandomNumber(max) {
    //return random number between 0 and max (including 0 and excluding max)
    return Math.floor(Math.random() * max);
}

function scrambleArray(oldArray) {
    //return scrambled array
    //alternative oplossing --->                    
    //return oldArray.sort(function(a,b) {return 0.5-Math.random()});
    let newAray=[];
    
    while(oldArray.length > 0){
        let randomIndex = getRandomNumber(oldArray.length);
        newAray.push(oldArray[randomIndex]);
        oldArray.splice(randomIndex,1);
    }

    return newAray;
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
    let text= getUserInput();
    let nieuweText = scrambleText(text);
    resultContainer.textContent = nieuweText;
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
    wordCountContainer.textContent=wordCount
}

function updateLetterCount(letterCount){
    //# update the Letter Count
    letterCountContainer.textContent=letterCount
}

function updateCounts(event) {
    //# update Word Count and Letter Count
    let currentText = this.value;
    // this when function is executed by event => event.target
    // this.value == event.target.value
    let letters = getLetterCount(currentText);
    let woorden = getWordCount(currentText);
    
    updateWordCount(letters);
    updateLetterCount(woorden);

}

//add click event listener to submitBtn
submitBtn.addEventListener("click", onClickScramble);
//# add input event listener to userInput for counts
userInput.addEventListener("input", updateCounts);
//## add input event listener to userinput for realTimeScramble
userInput.addEventListener("input", realTimeScramble);

document.addEventListener("DOMContentLoaded", function(event){
    let currentText = document.querySelector(".textarea").value;

    let letters = getLetterCount(currentText);
    let woorden = getWordCount(currentText);

    updateWordCount(letters);
    updateLetterCount(woorden);
}); 
