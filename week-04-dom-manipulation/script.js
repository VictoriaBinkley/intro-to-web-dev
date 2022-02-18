// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}

function fillPlaceOutput() {

  // Get the adjective input element
  const placeOneInput = document.getElementById('place-one-input');
  // Get the text from the input element
  const placeOne = placeOneInput.value;

  // Get the adjective output element
  const placeOneOutput = document.getElementById('place-one-output');
  // Set the text of the input element
  placeOneOutput.innerText = placeOne;

  // Get the output container element
  const outputDiv2 = document.getElementById('output2');
  // Make the output container element visible
  outputDiv2.style.display = 'block';
}


function fillPetOutput() {
  // Get the adjective input element
  const petOneInput = document.getElementById('pet-one-input');
  // Get the text from the input element
  const petOne = petOneInput.value;

  // Get the adjective output element
  const petOneOutput = document.getElementById('pet-one-output');
  // Set the text of the input element
  petOneOutput.innerText = petOne;

  // Get the output container element
  const outputDiv2 = document.getElementById('output3');
  // Make the output container element visible
  outputDiv2.style.display = 'block';
}

function fillVerbOutput() {
  // Get the adjective input element
  const verbOneInput = document.getElementById('verb-one-input');
  // Get the text from the input element
  const verbOne = verbOneInput.value;

  // Get the adjective output element
  const verbOneOutput = document.getElementById('verb-one-output');
  // Set the text of the input element
  verbOneOutput.innerText = verbOne;

  // Get the output container element
  const outputDiv2 = document.getElementById('output4');
  // Make the output container element visible
  outputDiv2.style.display = 'block';
}

function fillTimeOutput() {
  // Get the adjective input element
  const timeOneInput = document.getElementById('time-one-input');
  // Get the text from the input element
  const timeOne = timeOneInput.value;

  // Get the adjective output element
  const timeOneOutput = document.getElementById('time-one-output');
  // Set the text of the input element
  timeOneOutput.innerText = timeOne;

  // Get the output container element
  const outputDiv2 = document.getElementById('output5');
  // Make the output container element visible
  outputDiv2.style.display = 'block';
}