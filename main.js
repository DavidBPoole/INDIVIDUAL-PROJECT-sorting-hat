console.log("DOES ANYTHING WORK?")

// Reference student list:
const students = [
  {
    id: 1,
    // color: "exampleColor",
    teamName: "exampleTeam",
    name: "Harry Potter",
    // expelButton: button,
  },
  {
    id: 2,
    // color: "exampleColor",
    teamName: "exampleTeam",
    name: "Hermione Granger",
    // expelButton: button,
  },
  {
    id: 3,
    // color: "exampleColor",
    teamName: "exampleTeam",
    name: "Ron Weasley",
    // expelButton: button,
  },
  {
    id: 4,
    // color: "exampleColor",
    teamName: "exampleTeam",
    name: "Draco Malfoy",
    // expelButton: button,
  },
];

// Console log to reveal form button works:
// 1 hour to setup console log on click
function accessForm(event) {
  console.log('Reveal Form Button Clicked');
}
const showForm = document.querySelector("#showForm");
showForm.addEventListener('click', accessForm);

//Function to enable student name form visibility functionality:
// 6 hours to complete this one step
const showSort = document.querySelector('#showForm');

const revealForm = (divId, htmlToRender) => {
  const formDiv = document.querySelector(divId);
  formDiv.innerHTML = htmlToRender;
};

let formString = "";
formString += `<form id="nameForm">
<div class="mb-3">
  <label for="student-name" class="form-name"></label>
  <input type="name" class="form-control" id="exampleStudentName" style="max-width:25%; margin:auto" placeholder="Enter First Year's Name" aria-describedby="studentName">
  <div id="emailHelp" class="form-text"></div>
</div>

<button type="submit" class="row d-flex justify-content-center align-content-center"  class="sortFilterButton" id="sortButton" style="margin: auto; background-color: rgb(0, 128, 255); color: white; margin-bottom: 10px; border-color: rgb(0, 128, 255); border-radius: 5px">Sort</button>
</form>

<div class="houseBorder" style="border: 10px solid darkgrey">
  <h3 id="filterHeader" style="text-align:center; font-size: 20px; margin-top: 2rem">Filter Students</h3>
  <div class="btn-group" class="houses" style="display:flex; margin-left: 50px; margin-right: 50px; margin-bottom: 10px" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-secondary">All</button>
    <button type="button" class="btn btn-danger">Gryffindor</button>
    <button type="button" class="btn btn-warning">Hufflepuff</button>
    <button type="button" class="btn btn-primary">Ravenclaw</button>
    <button type="button" class="btn btn-success">Slytherin</button>
  </div>
</div>`

showSort.addEventListener('click', (e) => {
  revealForm("#studentForm", formString);
});

// Console log to reveal sort button works (I guess this doesnt work because the button being tested for a click doesnt render until called with the prior button - I don't see why it wouldnt work if you click it after it's already rendered?...)
// function sortAssignor(event) {
//   console.log('Student Assignment Button Clicked');
// }
// const showAssignment = document.querySelector("#sortButton");
// sortButton.addEventListener('click', sortAssignor);

// const sortSubmitButton = document.querySelector("#submitStudent")


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

 
