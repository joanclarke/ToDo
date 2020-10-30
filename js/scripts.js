//DECLARATIONS

// BODY & CONTAINER 
const body = document.querySelector('body');
const container = document.querySelector('#container');
const listContainer = document.querySelector('#list-container');
const background = document.getElementById('background');

// MENU 
const menuBtn = document.querySelector('.menu-btn');
const menuBtnBurger = document.querySelector('.menu-btn_burger');
const menu = document.querySelector('.menu');
const menuItems = document.getElementById('menu-items');
const menuItem = document.querySelector('.menu-item');
// const menuBtn = document.querySelector('.menu-btn');

// TO DO LIST NAME OR TITLE 
const toDoTitle = document.getElementById('todo-title');
const toDoTitleText = document.getElementById('todo-title-text');
const warningText = document.getElementById('char-limit-warning');
const charLimit = document.getElementById('char-limit');

// INPUT & POPUP 
const popupText = document.getElementById('popuptext');
const popup = document.getElementById("myPopup");
const inputContainer = document.getElementById('input-container');
const input = document.getElementById('inputText');
const button = document.getElementById('button');

// HR 
const hr = document.getElementById('line');

// LIST & ICONS
const ul = document.getElementById("completed-list");
const listItem = document.getElementsByClassName('list-item');
const completedListItem = document.getElementsByClassName('completed-list-item');
const plusCircle = document.querySelector('.fa-plus-circle');
const faCheckCircle = document.getElementsByClassName('fa-check-circle');
const redirect2ToDo = document.getElementsByClassName('redirect-2-to-do');
const count = document.getElementById("count");


container.style.backgroundColor = 'rgb(49, 49, 91)'; //set initial background color.

let menuOpen = false; //initially set menuOpen to false

let arr = []; //create an empty array 

// show warning and change text and border color to red when text limit is exceeded
toDoTitle.addEventListener('keydown', function() {
  if(toDoTitleText.innerText.length <= 13) {
    toDoTitle.style.border = "none";
    toDoTitleText.style.color = "#9d9dc0";
    warningText.classList.add('hide');//add 'maximum character limit' exceeded warning
  } else {
    toDoTitleText.style.color = "#ff0000";
    warningText.classList.remove('hide'); //remove 'maximum character limit' exceeded warning
  }
})

//hide 'character limit = 12' notofication when toDoTitle is clicked
toDoTitle.addEventListener('click', function() {
  charLimit.classList.add('hide');
})

//remove 'character limit = 12' message when mouseleaves the toDoTitle
toDoTitle.addEventListener('mouseleave', function() {
  if(toDoTitleText.innerText.length == 0) {
    charLimit.classList.remove('hide');
  }
})



menuBtn.addEventListener('click', () => {
  toggleMenu();
});

menuItems.addEventListener('click', () => {
  toggleMenu();
});

for (let item of redirect2ToDo) {
  item.addEventListener('click', () => {
    listContainer.classList.add('list-container-top-padding')
  });
}

background.addEventListener('click', () => {
  background.innerText = "Light Mode";
  background.classList.add('change-background');
  menuBtnBurger.classList.toggle('hidden-burger');
  // changes to list when in dark mode 
  if(container.style.backgroundColor == 'rgb(255, 255, 255)'){
    container.style.backgroundColor = 'rgb(49, 49, 91)';
    hr.style.backgroundColor = "#35355E";
    hr.style.height = "1.5px";
    inputContainer.style.backgroundColor = "#282851";
    input.style.color = "#d1cccc";
    body.style.color = "#d1cccc";

    inputContainer.addEventListener('mouseover', function() {
      inputContainer.classList.remove('input-container-hover-light-effect');
      inputContainer.classList.add('input-container-hover-dark-effect');
      // toDoTitle.style.color = "white";
    })

    // remove light mode background-color on hover and replace it with dark mode background-color
    toDoTitle.addEventListener('mouseover', function() {
      toDoTitle.classList.remove('todo-title-hover-dark-mode');
      toDoTitle.classList.add('todo-title-hover-light-mode');
      // toDoTitle.style.color = "white";
    })

    plusCircle.classList.remove('hover-style');
    plusCircle.classList.add('fa-plus-circle-color');
    darkListStyle(listItem);
    darkListStyle(completedListItem);

    for (let item of faCheckCircle) {
      if(item.classList.contains('fa-check-circle')) {
        item.classList.remove("fa-check-circle-bg-color");
      }
    }
  } else { // changes to list when in light mode 
    background.innerText = "Dark Mode";
    container.style.backgroundColor = 'rgb(255, 255, 255)';
    // remove dark mode background-color on hover and replace it with light mode background-color
    toDoTitle.addEventListener('mouseover', function() {
      toDoTitle.classList.add('todo-title-hover-dark-mode');
      toDoTitle.classList.remove('todo-title-hover-light-mode');
    })

    // toggle light mode and dark mode hover on mouseleave
    toDoTitle.addEventListener('mouseleave', function() {
      toDoTitle.classList.remove('todo-title-hover-dark-mode');
      toDoTitle.classList.add('todo-title-hover-light-mode');
    })

    hr.style.background = "rgba(128, 128, 128, 0.5)";
    hr.style.height = "1px";
    inputContainer.style.backgroundColor = "#EBF1F5";
    input.style.color = "#808080";
    body.style.color = "#808080";
    // plusCircle.style.color = 'green';

    plusCircle.classList.remove('fa-plus-circle-color');
    plusCircle.classList.add('hover-style');

    lightListStyle(listItem);
    lightListStyle(completedListItem);

    for (let item of faCheckCircle) {
      if(item.classList.contains('fa-check-circle')) {
        item.classList.add("fa-check-circle-bg-color");
      }
    }
  }
});

//get value for button and add event listener
button.addEventListener('click', function() {
  if(input.value == "") {
    addItemAlert(popup);
  } else {
    pushData();
    clearInputField();
    if( container.style.backgroundColor !== 'rgb(49, 49, 91)') {
      lightListStyle(listItem);
    }
  }
});

// remove light mode and add dark mode background features
function darkListStyle(el) {
  for (let item of el) {
    item.classList.add('dark-list-style');
    item.classList.remove('light-list-style');
  }
}

// remove dark mode and add light mode background features
function lightListStyle(el) {
  for (let item of el) {
    item.classList.remove('dark-list-style');
    item.classList.add('light-list-style');
  }
}

// toggle between light and dark mode background features
function toggleMenu() {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.style.width = "100%";
    menu.style.height = "100%";
    // menuBtnBurger.style.backgroundColor = "red"
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.style.width = "0%";
    menu.style.height = "0%";
  }
}

// toggle popup 
function addItemAlert(x) {
  // let popup = document.getElementById("myPopup");
  x.classList.toggle("show");
}

//display user input on screen
function pushData() {
  let inputText = input.value;   // get input value
  arr.push(inputText);   // append data to the array
  let text = "";
                
  for(i = 0; i < arr.length; i++) {
    text = arr[i];
  }
  // create a list item or task if user has inputted text 
  if(text != "") {
    createList(text);
  }
}

//create list 
function createList(userInput) {
  let li = document.createElement("li");  // create list item
  document.getElementById('list').prepend(li);  //add list item to the top of the parent element (ul)
  li.setAttribute("class","list-item dark-list-style"); //set class attributes
  
  let p = document.createElement("p");   // create paragraph element to be placed inside of list element 
  p.setAttribute("class", "scroll");  // make data/content scrollable
  p.setAttribute("contenteditable", "true"); // make data/content editable

  //create circle icon for checking
  let i = document.createElement("i"); 
  i.setAttribute("class", "fas fa-circle");

  let checkCircle = document.createElement("span");
  checkCircle.setAttribute("class", "fa-check-border");

  //create trash bin icon
  let deleteTrash = document.createElement("span");
  deleteTrash.setAttribute("class", "hide");
  deleteTrash.innerHTML = "<i id='delete' class='delete fa fa-trash'></i>";

  p.innerHTML = userInput;  //add user input in paragraph (p) element

  // add checklist, data/content and trash functions to list
  checkCircle.appendChild(i);
  li.prepend(checkCircle);
  li.appendChild(p);
  li.appendChild(deleteTrash);

  checkCircle.addEventListener('click', function() {
    p.classList.add("strike-out");
    editData(i, p);
    transferCompletedData(i, p, li, deleteTrash);
    completedListCount();

    if( container.style.backgroundColor !== 'rgb(49, 49, 91)') {
      lightListStyle(completedListItem);
    }
  })

  li.addEventListener("mouseover", function() {
    deleteTrash.classList.remove("hide");
    deleteTrash.classList.add("show");
  });

  li.addEventListener("mouseleave", function() {
    deleteTrash.classList.remove("show");
    deleteTrash.classList.add("hide");
  });

  // deleteTrash.addEventListener('click', deleteData(li));
  deleteTrash.addEventListener('click', function() {
  deleteData(li);
  });

  const container = document.getElementById("container");
  container.addEventListener("click", function() {
    deleteEmptyList(p, li);
  });
}

// remove entire list element if p is empty
function deleteEmptyList(p, li) {
  if (p.innerHTML == "") {
    li.remove()
  } 
}

// Delete data/content
function deleteData(x) {
  x.remove();
}

//clear text from input field
function clearInputField() {
  document.getElementById('inputText').value = "";
}
 
// user can edit content only when circle does not have a tick inside of it
function editData(i, p) {
  if(i.className == "fas fa-circle") {
    i.className = "fas fa-check-circle";
    p.setAttribute("contenteditable", "false"); //makes content uneditable

  } else {
    i.className = "fas fa-circle";
    p.setAttribute("contenteditable", "true");
  }
}

// shows total amount of completed items/to dos
function completedListCount() {
  count.innerHTML = ul.childElementCount;//get total count of completed items/ to dos and show that number onscreen
}

//  transfer list completed data/content over to completed-list container
function transferCompletedData(i, p, li, deleteTrash) {
  let liCompleted = document.createElement("li");
  liCompleted.setAttribute("class","completed-list-item dark-list-style"); //set class attributes
  let checkCircleCompleted = document.createElement("span");
  let deleteTrash4CompletedList = document.createElement("span");
  let iCompleted = document.createElement("i");

  if(i.className == "fas fa-check-circle") {
    deleteTrash4CompletedList.innerHTML = deleteTrash.innerHTML;
    deleteTrash4CompletedList.addEventListener('click', function() {
    deleteData(liCompleted);
    // completedListCount();
    });

    iCompleted.setAttribute("class", "fas fa-check-circle");

    if( container.style.backgroundColor !== 'rgb(49, 49, 91)') {
      iCompleted.classList.add("fa-check-circle-bg-color");
    } 
    
    document.getElementById("completed-list").prepend(liCompleted); 
    p.innerHTML = li.innerText;
    checkCircleCompleted.appendChild(iCompleted);
    liCompleted.prepend(checkCircleCompleted);
    liCompleted.appendChild(p);
    liCompleted.appendChild(deleteTrash4CompletedList);
    li.remove();
  }

}
