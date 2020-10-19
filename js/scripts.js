let body = document.querySelector('body');
let button = document.getElementById('button');
let input = document.getElementById('inputText');
let ul = document.getElementById("completed-list");
let count = document.getElementById("count");
// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;

const container = document.querySelector('#container');
container.style.backgroundColor = 'rgb(49, 49, 91)'; //set initial background color.
const listContainer = document.querySelector('#list-container');

let arr = []; 

const menuBtn = document.querySelector('.menu-btn');
let menuBtnBurger = document.querySelector('.menu-btn_burger');
const menu = document.querySelector('.menu');
let menuOpen = false;
let menuItems = document.getElementById('menu-items');
let menuItem = document.querySelector('.menu-item');
let background = document.getElementById('background');
let hr = document.getElementById('line');
let listItem = document.getElementsByClassName('list-item');
let completedListItem = document.getElementsByClassName('completed-list-item');
const inputContainer = document.getElementById('input-container');
const plusCircle = document.querySelector('.fa-plus-circle');
const faCheckCircle = document.getElementsByClassName('fa-check-circle');
let redirect2ToDo = document.getElementsByClassName('redirect-2-to-do');
// const inputContainer = document.getElementById('input-container');

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
  // console.log(background.innerText);
  body.style.color = "#808080";
  menuBtnBurger.classList.toggle('hidden-burger');
  // console.log(background.innerHTML);
  if(container.style.backgroundColor == 'rgb(255, 255, 255)'){
    container.style.backgroundColor = 'rgb(49, 49, 91)';
    hr.style.backgroundColor = "#35355E";
    hr.style.height = "1.5px";
    inputContainer.style.backgroundColor = "#282851";
    // plusCircle.style.color = '#ffffff';

    plusCircle.classList.remove('hover-style');
    plusCircle.classList.add('fa-plus-circle-color');
    darkListStyle(listItem);
    darkListStyle(completedListItem);

    for (let item of faCheckCircle) {
      if(item.classList.contains('fa-check-circle')) {
        item.classList.remove("fa-check-circle-bg-color");
      }
    }
  } else {
    background.innerText = "Dark Mode";
    // console.log(background.innerText);
    container.style.backgroundColor = 'rgb(255, 255, 255)';
    hr.style.background = "rgba(128, 128, 128, 0.5)";
    hr.style.height = "1px";
    inputContainer.style.backgroundColor = "#EBF1F5";
    input.style.color = "#808080";
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
    addItemAlert();
  } else {
    pushData();
    clearInputField();
    // element.classList.contains
    if( container.style.backgroundColor !== 'rgb(49, 49, 91)') {
      lightListStyle(listItem);
    }
  }
});

function darkListStyle(el) {
  for (let item of el) {
    item.classList.add('dark-list-style');
    item.classList.remove('light-list-style');
  }
}

function lightListStyle(el) {
  for (let item of el) {
    item.classList.remove('dark-list-style');
    item.classList.add('light-list-style');
  }
}

function toggleMenu() {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.style.width = "100%";
    menu.style.height = "100%";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.style.width = "0%";
    menu.style.height = "0%";
  }
}

function addItemAlert() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

//display user input on screen
function pushData() {
  let inputText = input.value;   // get input value
  arr.push(inputText);   // append data to the array
  let text = "";
                
  for(i = 0; i < arr.length; i++) {
    text = arr[i];
  }

  if(text != "") {
    createList(text);
  }
}

//create list 
function createList(userInput) {
  let li = document.createElement("li");  // create list item
  document.getElementById('list').prepend(li);  //add list item to the top of the parent element (ul)
  li.setAttribute("class","list-item dark-list-style"); //set class attributes
  let p = document.createElement("p");
  p.setAttribute("class", "scroll");  // make data/content editable
  p.setAttribute("contenteditable", "true");

  let i = document.createElement("i");
  i.setAttribute("class", "fas fa-circle");

  let checkCircle = document.createElement("span");
  checkCircle.setAttribute("class", "fa-check-border");

  let deleteTrash = document.createElement("span");//create span for holding trash bin icon
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



// https://stackoverflow.com/questions/33004177/add-user-input-to-list-on-button-click-in-javascript

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript


// App design link:
// https://www.uplabs.com/posts/todo-list-mobile-app

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content#How_does_it_work
 
// MOVE CHILD
// https://stackoverflow.com/questions/20910147/how-to-move-all-html-element-children-to-another-parent-using-javascript