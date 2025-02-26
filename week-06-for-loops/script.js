// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `take a breath, take a breath. 
keep breathing, counts of three. 
count to ten. feel the pain lessen in your chest
take a breath, take a breath
fill your lungs and your chest. 
don't think about it. just do it. 
it shouldn't feel forced, but why can't i just breath. 
the thing, the act, the assignment, the world, all falling. 
take a breath, take a breath. 
anxiety, overthinking, judgement, general living
make your mind feel fogged, 
why think about it at all  
don't cloud your mind
just breathe. breathe. breathe. 
just don't tell me to breathe, it's not that easy. `;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.

const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

// Display words that start with letter b.

function displayLetterBWords(){
  const letterWordsElement = document.getElementById('letter-words');

  for(let word of wordsArray){
    if(word.startsWith('b')){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      letterWordsElement.appendChild(wordElement);
    }
  }
}


//Longest word?????


function displayLongestWord(){
  const longestWordElement = document.getElementById('longest-word');

  let longestWord = wordsArray[0];

  for(let i = 1; i < wordsArray.length; i++){
    if(wordsArray[i].length > longestWord.length){
      longestWord = wordsArray[i];
    }
  }
  const wordElement = document.createElement('li');
  wordElement.innerText = longestWord;
  longestWordElement.appendChild(wordElement);
}



//every third word

function displayThirdWords(){
  const thirdWordsElement = document.getElementById('third-words');

  for(let i = 2; i <= 300; i += 3){
     const word = wordsArray[i];
     if(word){
       const wordElement = document.createElement('li');
       wordElement.innerText = word;
       thirdWordsElement.appendChild(wordElement);
     }
   }
}

//not 10 most common words

function displayUncommonWords(){
  let commonWords = ['the' , 'be' , 'to' , 'of' , 'and' , 'a' , 'in' , 'that' , 'have' , 'i'];

  let uncommonWordsElement = document.getElementById('uncommon-words');

  for(let word of wordsArray){
    if(!commonWords.includes(word.toLowerCase())){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      uncommonWordsElement.appendChild(wordElement);
    }
  }
}



// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  
  displayLetterBWords(); 

  displayLongestWord();

  displayThirdWords();

  displayUncommonWords();

  // TODO: Call your functions here!
}