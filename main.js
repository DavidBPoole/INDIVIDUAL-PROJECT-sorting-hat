console.log("IF YOU DONT SEE THIS THEN SOMETHING BROKE")

// Reference student list:
const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Griffyndor"
  },
  {
    id: 2,
    name: "Cho Chang",
    house: "Ravenclaw"
  },
  {
    id: 3,
    name: "Cedric Diggory",
    house: "Hufflepuff"
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin"
  },
];

// Master DOM Function:
const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}

// Home welcome message rendered to DOM upon page load:
const welcome = () => {
  let welcomeString = `<div class="navigationBar">
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Sorting Hat</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Students</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Expelled</a>
          </li>
        </ul>
        <span class="navbar-text">
          Hogwarts Class 2023-2024
        </span>
      </div>
    </div>
  </nav>
</div>
<div class="Introduction">
  <div class="card">
    <div class="card-header">
      Welcome to Hogwarts School of Wizardry
    </div>
    <div class="card-body-greeting" style="border: 10px solid darkgrey; margin: 10px">
      <h5 class="card-title">Assignment System</h5>
      <p class="card-text">Welcome aspiring students! Please click the button below to begin the initation and House assignment process..</p>
      <a href="#" class="btn btn-primary" id="showForm" style="margin-bottom: 10px">Access Sorting Hat</a>
    </div>
  </div>
</div>`;
renderToDom('#welcome', welcomeString);
};
welcome();

// FORM BUTTON CLICK console log test:
// 1 hour to setup console log on click
const showFormButton = document.querySelector("#showForm");
showFormButton.addEventListener('click', accessSortForm);

function accessSortForm(event) {
  console.log('Reveal Form Button Clicked');
}

//Function to enable student name form event visibility functionality:
// 6 hours to complete this one step.
const showSortForm = document.querySelector('#showForm');
const revealSortForm = (divId, htmlToRender) => {
  const formDiv = document.querySelector(divId);
  formDiv.innerHTML = htmlToRender;
};

// Form below includes name input validation throwing an error message if blank. All styling was added directly into the html to be rendered since CSS is seemingly unable to catch the element tags rendered to the DOM after initial page load DOM rendering.
let sortFormString = "";
sortFormString += `<form id="nameForm">
<div class="mb-3">
  <label for="student-name" class="form-name"></label>
  <input type="text" class="form-control" id="validation" value="" required style="max-width:25%; margin:auto; font=font-family: 'Jost', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-family: 'PT Sans', sans-serif;
  font-family: 'Shadows Into Light', cursive;" placeholder="Enter First Year's Name" aria-describedby="studentName">
  <div id="emailHelp" class="form-text"></div>
</div>

<button type="submit" class="row d-flex justify-content-center align-content-center"  class="sortFilterButton" id="sortButton" style="margin: auto; background-color: rgb(0, 128, 255); color: white; margin-bottom: 10px; border-color: rgb(0, 128, 255); border-radius: 5px; ">Sort</button>
</form>

<div class="houseBorder" style="border: 10px solid darkgrey; margin: 10px">
  <h3 id="filterHeader" style="text-align:center; font-size: 20px; font=font-family: 'Jost', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-family: 'PT Sans', sans-serif;
  font-family: 'Shadows Into Light', cursive; margin-top: 2rem">Filter Students</h3>
  <div class="btn-group" class="houses" style="display:flex; justify-content: center; margin-left: 50px; margin-right: 50px; margin-bottom: 10px; font=font-family: 'Jost', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-family: 'PT Sans', sans-serif;
  font-family: 'Shadows Into Light', cursive;" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-secondary">All</button>
    <button type="button" class="btn btn-danger">Gryffindor</button>
    <button type="button" class="btn btn-warning">Hufflepuff</button>
    <button type="button" class="btn btn-primary">Ravenclaw</button>
    <button type="button" class="btn btn-success">Slytherin</button>
  </div>
</div>`

showSortForm.addEventListener('click', (e) => {
  revealSortForm("#studentSortForm", sortFormString);
});

const showStudentCards = document.querySelector('#sortButton');
const revealStudentCards = (divId, htmlToRender) => {
  const formDiv = document.querySelector(divId);
  formDiv.innerHTML = htmlToRender;
};

let studentCardString = "";
for (const student of students) {
  studentCardString += `<div class="card mb-3" style="display: inline-block; max-width: 50%">
  <div class="row g-0">
    <div class="col-md-4">
    </div>
      <div class="card-body">
        <p class="card-text">${student.name}</p>
        <p class="card-text">${student.house}</p>
        <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
      </div>
    </div>
  </div>
</div>`;
renderToDom("#studentCards", studentCardString);
};

const showExpelledCards = document.querySelector('#sortButton');
const revealExpelledCards = (divId, htmlToRender) => {
  const formDiv = document.querySelector(divId);
  formDiv.innerHTML = htmlToRender;
};

let expelledCardsString = "";
for (const student of students) {
  expelledCardsString += `<div class="card mb-3" style="display: inline-block">
  <div class="row g-0">
    <div class="col-md-4">
    </div>
      <div class="card-body">
        <p class="card-text">${student.name}</p>
        <p class="card-text">${student.house}</p>
        <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
      </div>
    </div>
  </div>
</div>`;
renderToDom("#expelledCards", expelledCardsString);
};


//******* CURRENT CODE LINE BREAK - NO ACTIVE CODE BELOW THIS LINE ********


// Console log to reveal sort button works (I guess this doesnt work because the button being tested for a click doesnt render until called with the prior button - I don't see why it wouldn't work if you click it after it's already rendered?..)
// const showSortAssignment = document.querySelector("#sortButton");
// showSortAssignment.addEventListener('click', sortAssignor);

// function sortAssignor(event) {
//   console.log('Student Sort Assignment Button Clicked');
// };
// const sortSubmitButton = document.querySelector("#submitStudent")


// CODE BLOCK NOTES TO ASSIST IN PROJECT:

// Reset code for name form:
// form.reset();

// const targetingApp = document.querySelector("#name-form");
// console.log(targetingApp);

// let formString = "";
// for (const form of forms) {
//   formString += `<form id="nameForm">
//   <div class="mb-3">
//     <label for="student-name" class="form-name">First Year's Name</label>
//     <input type="name" class="form-control" id="exampleStudentName" aria-describedby="studentName">
//     <div id="emailHelp" class="form-text"></div>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>`;
// }

// console.log(formString);
// targetingApp.innerHTML = formString;

//Master function to render html to DOM at the selectedDiv:
// const renderToDom = (divId, html) => {
//   const selectedDiv = document.querySelector(divId);
//   selectedDiv.innerHTML = html;
// }

// const renderForm = (divId, html) => {

// }
// Reusable function to get the cards on the DOM
// .forEach() loop example:
// const renderStudents = (array) => {
//   let refStudents = "";

//   array.forEach((item) => {
//     refStuff += card(item);
//   });

//   renderToDom("#cards", refStuff);
// }

//Example for of loop:
// const renderStudents = (array,studentString) => {
//   const typeArray = [];
 
//   for (const pet of array) {
//     if (pet.type === typeString) {
//       typeArray.push(pet);
//     }
//   }

//   return typeArray;
// };

// const renderToDom = (divId, htmlToRender) => {
//   const selectedDiv = document.querySelector(divId);
//   // This variable tells the function to find all of the instances within the HTML of the specified ID passed through it:
//   selectedDiv.innerHTML = htmlToRender;
  // This statement takes the variable/method above and assigns the innerHTML method to it which enables the selected div to be assigned the html
// };

// Below is to render your JS HTML to the selected #app ID placeholder within the HTML. All functions needing to be dsiplayed on the DOM HTML must be within this JS file and pulled using querySelector() or getElementById()
  // renderToDom("#app", domString);

  // const startApp = () => {
  //   // PUT ALL CARDS ON THE DOM
  //   renderCards(studentList)
  // };

  // const showForm = document.querySelector("#nameForm");

  // showForm.addEventListener("click", (e) => {
  //   const studentForm = filter(pets, "cat");
  //   cardsOnDom(cats);
  // });

 
