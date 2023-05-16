const saveButton = document.getElementById("save-btn");
const past = document.getElementById("past");
const present = document.getElementById("present");
const future = document.getElementById("future");
const rows = document.getElementsByClassName("row");
const toDO = document.getElementById("todo");
const toDoInput = document.getElementById("todo-input");
const toDoSave = document.getElementById("todo-save");
const toDoForm = document.getElementById("todo-form");
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const date = Date();
console.log(date);
let day = getDate();
console.log(day);
let month = date.getMonth() + 1
let year = date.getFullYear()
let time = date.getTime()

let fullDate = '${month}-${day}-${year}-${time}'
console.log(fulldate);

function upDateSchedule() {
  Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor(row, "red");
      } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setColor(row, "green");
      } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "white");
      }
    }
  });
}

function addToDO() {
  let toDoStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  toDoForm.addEventListener("todo-save", (e) => {
   console.log("clicked save button")
    e.preventDefault();
    toDoStorage.push(toDoInput.value);
    localStorage.setItem("todo", JSON.stringify(toDoStorage));
    listBuilder(toDoInput.value);
    toDoInput.value = "";
  });

  const listBuilder = (text) => {
    const note = document.createElement("li");
    note.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
    toDO.appendChild(note);
  };

  const getNotes = JSON.parse(localStorage.getItem("todo"));
  getNotes.forEach((note) => {
    listBuilder(note);
  });

  const deleteNote = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
    notesStorage.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(notesStorage));
    el.remove();
  };
}
//
$( document ) .ready (function () {
  const date = Date();
console.log(date);
let day = getDate();
console.log(day);
let month = date.getMonth() + 1
let year = date.getFullYear()
let time = date.getTime()

let fullDate = '${month}-${day}-${year}-${time}'
console.log(fulldate);

function upDateSchedule() {
  Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor(row, "red");
      } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setColor(row, "green");
      } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "white");
      }
    }
  });
}

function addToDO() {
  let toDoStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  toDoForm.addEventListener("todo-save", (e) => {
   console.log("clicked save button")
    e.preventDefault();
    toDoStorage.push(toDoInput.value);
    localStorage.setItem("todo", JSON.stringify(toDoStorage));
    listBuilder(toDoInput.value);
    toDoInput.value = "";
  });

  const listBuilder = (text) => {
    const note = document.createElement("li");
    note.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
    toDO.appendChild(note);
  };

  const getNotes = JSON.parse(localStorage.getItem("todo"));
  getNotes.forEach((note) => {
    listBuilder(note);
  });

  const deleteNote = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
    notesStorage.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(notesStorage));
    el.remove();
  };
}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
