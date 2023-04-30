console.log("DOES ANYTHING WORK?")

// Console log to reveal form button works:
// 1 hour to setup console log on click
function accessForm(event) {
  console.log('Reveal Form Button Clicked');
}
const showForm = document.querySelector("#showForm");
showForm.addEventListener('click', accessForm);

//Function to enable student name form visibility functionality:
// 6 hours to complete this one step
const sort = document.querySelector('#showForm');

const revealForm = (divId, htmlToRender) => {
  const formDiv = document.querySelector(divId);
  formDiv.innerHTML = htmlToRender;
};

let formString = "";
formString += `<form id="nameForm">
<div class="mb-3">
  <label for="student-name" class="form-name"></label>
  <input type="name" class="form-control" id="exampleStudentName" placeholder="Enter First Year's Name" aria-describedby="studentName">
  <div id="emailHelp" class="form-text"></div>
</div>
<button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
</form>`

sort.addEventListener('click', (e) => {
  revealForm("#form", formString);
});

// Reset code for name form:
// form.reset();

//Reference student list:
// const students = [
//   {
//     id: 1,
//     // color: "exampleColor",
//     teamName: "exampleTeam",
//     name: "Harry Potter",
//     expelButton: button,
//   },
//   {
//     id: 2,
//     // color: "exampleColor",
//     teamName: "exampleTeam",
//     name: "Hermione Granger",
//     expelButton: button,
//   },
//   {
//     id: 3,
//     // color: "exampleColor",
//     teamName: "exampleTeam",
//     name: "Ron Weasley",
//     expelButton: button,
//   },
//   {
//     id: 4,
//     // color: "exampleColor",
//     teamName: "exampleTeam",
//     name: "Draco Malfoy",
//     expelButton: button,
//   },
// ];

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

 
