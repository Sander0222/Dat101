"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask1CalculateClick() {
  
  const width = parseFloat(document.getElementById("txtRectWidth").value);
  const height = parseFloat(document.getElementById("txtRectHeight").value);

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    alert("Please enter positive numbers for width and height.");
    return;
  }
  
  const perimeter = 2 * (width + height);
  const area = width * height;
  
  document.getElementById("txtTask1Output").textContent = `Circumference = ${perimeter}, Area = ${area}`;
}

document.getElementById("cmbTask1Calculate").addEventListener("click", cmbTask1CalculateClick);


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const task2Words = []; 

function txtTask2WordKeyPress(event) {
  
  if (event.key === "Enter") {
    const inputField = document.getElementById("txtTask2Word");
    const word = inputField.value.trim(); 

    
    if (word) {
      task2Words.push(word);

      
      const wordCount = task2Words.length;
      document.getElementById("txtTask2Output").textContent = 
        `Number of words = ${wordCount}: ${task2Words.join(", ")}`;

      
      inputField.value = "";
    }
  }
}


document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);


//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask3CheckAnswerClick() {
  
  const checkboxes = document.querySelectorAll("input[name='chkTask3']:checked");

  
  const selectedTexts = Array.from(checkboxes).map(checkbox => checkbox.parentElement.textContent.trim());

  
  if (selectedTexts.length > 0) {
    document.getElementById("txtTask3Output").textContent = 
      `You selected: ${selectedTexts.join(", ")}`;
  } else {
    document.getElementById("txtTask3Output").textContent = "No checkboxes selected.";
  }
}


document.getElementById("cmbTask3CheckAnswer").addEventListener("click", cmbTask3CheckAnswerClick);


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function initializeCarRadios() {
  const carContainer = document.getElementById("divTask4Cars");
  carContainer.innerHTML = ""; 

  
  CarTypes.forEach(car => {
    const radioWrapper = document.createElement("label");

   
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carRadio";
    radio.value = car.caption;

   
    radioWrapper.appendChild(radio);
    radioWrapper.appendChild(document.createTextNode(car.caption));
    radioWrapper.appendChild(document.createElement("br")); 

    
    carContainer.appendChild(radioWrapper);
  });
}

function displaySelectedCar() {
  
  const selectedRadio = document.querySelector("input[name='carRadio']:checked");

  
  if (selectedRadio) {
    document.getElementById("txtTask4Output").textContent = `You selected: ${selectedRadio.value}`;
  } else {
    document.getElementById("txtTask4Output").textContent = "No car selected.";
  }
}


initializeCarRadios();


document.getElementById("divTask4Cars").addEventListener("change", displaySelectedCar);

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function selectTask5AnimalsChange() {
  
  const dropdown = document.getElementById("selectTask5Animals");
  const selectedAnimal = dropdown.options[dropdown.selectedIndex].text;
  
  document.getElementById("txtTask5Output").textContent = `You selected: ${selectedAnimal}`;
}


document.getElementById("selectTask5Animals").addEventListener("change", selectTask5AnimalsChange);


//--- Part 6 ----------------------------------------------------------------------------------------------
// Task 6: Dynamic Dropdown & Selection
function initializeTask6Dropdown() {
  const dropdown = document.getElementById("selectTask6Girls");
  dropdown.innerHTML = ""; 
  
  GirlsNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
  });
}

function selectTask6GirlsChange() {

  const dropdown = document.getElementById("selectTask6Girls");
  const selectedName = dropdown.options[dropdown.selectedIndex].text;

  document.getElementById("txtTask6Output").textContent = `You selected: ${selectedName}`;
}


initializeTask6Dropdown();


document.getElementById("selectTask6Girls").addEventListener("change", selectTask6GirlsChange);


//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function initializeMovieGenreDropdown() {
  const genreDropdown = document.getElementById("selectMovieGenre");
  genreDropdown.innerHTML = ""; 

  
  MovieGenre.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreDropdown.appendChild(option);
  });
}

function cmbAddMovieClick() {
  
  const movieTitle = document.getElementById("txtMovieTitle").value.trim();
  const movieGenre = document.getElementById("selectMovieGenre").value;
  const movieDirector = document.getElementById("txtMovieDirector").value.trim();
  const movieRate = document.getElementById("txtMovieRate").value.trim();

  if (!movieTitle || !movieDirector || !movieRate || isNaN(movieRate) || movieRate < 1 || movieRate > 10) {
    alert("Please enter valid movie details. Ensure the rate is between 1 and 10.");
    return;
  }

  const movieTable = document.getElementById("tblMovies");

  
  const newRow = movieTable.insertRow();

  
  const cell1 = newRow.insertCell(0); 
  const cell2 = newRow.insertCell(1); 
  const cell3 = newRow.insertCell(2); 
  const cell4 = newRow.insertCell(3); 
  const cell5 = newRow.insertCell(4); 

  cell1.textContent = movieTable.rows.length - 1; 
  cell2.textContent = movieTitle;
  cell3.textContent = movieGenre;
  cell4.textContent = movieDirector;
  cell5.textContent = movieRate;

  
  document.getElementById("txtMovieTitle").value = "";
  document.getElementById("txtMovieDirector").value = "";
  document.getElementById("txtMovieRate").value = "5"; 
}


initializeMovieGenreDropdown();


document.getElementById("cmbAddMovie").addEventListener("click", cmbAddMovieClick);