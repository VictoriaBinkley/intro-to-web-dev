// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'fish') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'shark') {
    alert('Close, but my favorite animal is a little smaller.');
  } else {
    alert('Wrong! Hint: My favorite animal swims.')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 22) {
    alert("That's right!");
    hide('question-two');
    show('done');
  } else if(answerTwo < 22) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}


// When this function is called, it takes the user's answer to the third
// question and uses if statements to check whether it's correct.
function submitAnswerThree() {
  // Get answer three's input element
  const answerThreeInput = document.getElementById('answer-three-input');
  // Get the number from answer three's input element
  const answerThree = answerThreeInput.value;

 if(answerThree == 'green') {
   alert("Thats right!");
   hide('question-Three');
   show('done');
  } else if(answerThree == 'blue') {
    alert('close. try again.');
  } else if(answerThree == 'brown') {
    alert('too dark. try again')
  } else if (answerThree == 'hazel') {
    alert('not according to my license. try again.')
  }
}


// When this function is called, it takes the user's answer to the fourth
// question and uses if statements to check whether it's correct.
function submitAnswerFour() {
  // Get answer four's input element
  const answerFourInput = document.getElementById('answer-four-input');
  // Get the text from answer four's input element
  const answerFour = answerFourInput.value;

  if(answerFour == 'yes') {
    alert("That's right!");
    hide('question-four');
    show('done');
  } else if(answerFour == 'no') {
    alert("You're Wrong.");
  } else if(answerFour == 'maybe') {
    alert('I gave up.')
  }
}


// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}