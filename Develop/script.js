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

$(document).ready(function () {
  const date = dayjs();
  console.log(date);
  let day = date.date();
  console.log(day);
  let month = date.month() + 1
  let year = date.year()
  let time = date.valueOf()

  let fullDate = '${month}-${day}-${year}-${time}'
  console.log(month, year, time, fullDate);

  $(document).ready(function () {
    // Get the current hour using the built-in Date object
    var currentHour = new Date().getHours();

    // Loop through each time block
    $('.time-block').each(function () {
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

      // Compare the time block hour with the current hour
      if (timeBlockHour < currentHour) {
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  });

  $(document).ready(function() {
    const toDoStorage = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
  
    // Event handler for save button click
    $(".saveBtn").on("click", function(event) {
      event.preventDefault();
      
      const timeBlock = $(this).closest(".time-block");
      const toDoInput = timeBlock.find(".description");
      const toDoText = toDoInput.val();
  
      toDoStorage.push(toDoText);
      localStorage.setItem("todo", JSON.stringify(toDoStorage));
  
      listBuilder(toDoText, timeBlock);
      toDoInput.val("");
    });
  
    const listBuilder = (text, timeBlock) => {
      const note = $("<li>").html(text + ' <button class="deleteBtn">x</button>');
      timeBlock.find(".toDoList").append(note);
    };
  
    const getNotes = JSON.parse(localStorage.getItem("todo"));
    if (getNotes) {
      getNotes.forEach((note) => {
        listBuilder(note, $(".time-block"));
      });
    }
  
    // Event handler for delete button click
    $(document).on("click", ".deleteBtn", function() {
      const timeBlock = $(this).closest(".time-block");
      const index = timeBlock.find(".deleteBtn").index(this);
      
      toDoStorage.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(toDoStorage));
  
      $(this).closest("li").remove();
    });
  })
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
