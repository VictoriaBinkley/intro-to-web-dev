// Array of objects representing a movie list.

const moviesArray = [
  {title: 'The Goonies', time: 114, date: '1985-06-07'},
  {title: 'Hairspray', time: 117, date: '2007-08-20'},
  {title: 'Twilight', time: 124, date: '2010-06-24'},
  {title: 'Harry Potter and the Goblet of Fire', time: 157, date: '2005-11-18'},
  {title: 'Waiting', time: 94, date: '2005-10-07'},
  {title: 'Scooby-Doo', time: 86, date: '2002-06-08'},
  {title: 'Hide and Seek', time: 101, date: '2005-01-28'},
  {title: 'This is the End', time: 107, date: '2013-06-03'},
  {title: 'The Crow', time: 102, date: '1994-05-01'},
  {title: 'Stand By Me', time: 89, date: '1986-08-22'}, 
  {title: 'me before you', time: 110, date: '2016-06-03'},
  {title: 'Napoleon Dynamite', time: 82, date: '2004-06-11'},
  {title: 'Avengers: Endgame', time: 182, date: '2019-04-26'},

];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the movie labels.
  moviesArray.sort((a, b) => compare(a.title, b.title));

  loadTable();
  loadShortestMovie();
  loadAverage();
}

// Adds a movie to the array and reloads the page content.

function addNewMovie() {
  const newMovieTitle = document.getElementById('title-input').value;
  const newMovieTime = document.getElementById('time-input').value;
  const newMovieDate = document.getElementById('date-input').value;
  const newMovie = {title: newMovieTitle, time: newMovieTime, date: newMovieDate };
  moviesArray.push(newMovie);

  loadContent();
}

// Iterates over the data array to create a table.

function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Title'));
  headerRowElement.appendChild(createElement('th', 'Time'));
  headerRowElement.appendChild(createElement('th', "Date- Yr/Mo/Dy"));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.

  for (let i = 0; i < moviesArray.length; i++) {
    const movie = moviesArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', movie.title));
    rowElement.appendChild(createElement('td', movie.time));
    rowElement.appendChild(createElement('td', movie.date)); 
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest movie.

function loadShortestMovie(){
  // Assume the first movie is shortest
  let shortestMovie = moviesArray[0];

  // Starting with the second movie, look for a shorter movie
  for (let i = 1; i < moviesArray.length; i++) {
    const movie = moviesArray[i];
    // If this movie is shorter than the previous shortest, it's now the shortest

    if(movie.time < shortestMovie.time) {
      shortestMovie = movie;
    }
  }
  document.getElementById('shortest-movie').innerText = shortestMovie.title;
}

//Average run time
//How to round decimal? 

function loadAverage(){
  let total = 0;
 for(let i = 0; i < moviesArray.length; i++){
    console.log (total)
   const movie = moviesArray[i];
    total += Number(movie.time);

 }
  let average = total / moviesArray.length;
  console.log (average);
  document.getElementById('average-time').innerText = average
  }



// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.

function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}