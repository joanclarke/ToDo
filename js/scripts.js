let button = document.getElementById('button');
let input = document.getElementById('inputText');
let ul = document.getElementById("completed-list");
let count = document.getElementById("count");
// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;

let arr = []; 

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }



const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    // menu.classList.add('show');
    // menu.classList.remove('hide');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    // menu.classList.add('hide');
    // menu.classList.remove('show');
  }

      menu.classList.toggle('hide');
});

//get value for button and add event listener
button.addEventListener('click', function() {
  if(input.value == "") {
    addItemAlert();
  } else {
    pushData();
    clearInputField();
  }
});

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
  li.setAttribute("class", "list-item"); //set class attribute


  let p = document.createElement("p");
  p.setAttribute("class", "scroll");  // make data/content editable
  p.setAttribute("contenteditable", "true");
  let i = document.createElement("i");
  i.setAttribute("class", "fas fa-circle");

  let checkCircle = document.createElement("span");
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
  })

  li.addEventListener("mouseover", function() {
    deleteTrash.classList.remove("hide");
    deleteTrash.classList.add("show");
    // deleteTrash.classList.toggle("show");
  });

  li.addEventListener("mouseleave", function() {
    deleteTrash.classList.remove("show");
    deleteTrash.classList.add("hide");
    // deleteTrash.classList.toggle("show");
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
  // ul.childElementCount;
  count.innerHTML = ul.childElementCount;//get total count of completed items/ to dos and show that number onscreen
}

// function ReverseTransferData(li, liCompleted) {
//   let NewLi = document.createElement("li"); 
//   li.innerHTML = liCompleted.innerHTML;
// let liInnerHTML = li.innerHTML;
//   // NewLi.appendChild(liInnerHTML[0]);
//   console.log(liInnerHTML);
//   // console.log(liInnerHTML);
//   liCompleted.innerHTML = "";

// }

//  transfer list completed data/content over to completed-list container
function transferCompletedData(i, p, li, deleteTrash) {
  let liCompleted = document.createElement("li");
  let checkCircleCompleted = document.createElement("span");
  let deleteTrash4CompletedList = document.createElement("span");
  let iCompleted = document.createElement("i");

  if(i.className == "fas fa-check-circle") {
    deleteTrash4CompletedList.innerHTML = deleteTrash.innerHTML;
    deleteTrash4CompletedList.addEventListener('click', function() {
      deleteData(liCompleted);
        // completedListCount();
  console.log(completedListCount());
    });

    // checkCircleCompleted.addEventListener('click', function() {
    //   ReverseTransferData(li, liCompleted);
    //   console.log(ReverseTransferData(li, liCompleted));
    // });

    iCompleted.setAttribute("class", "fas fa-check-circle");
    document.getElementById("completed-list").prepend(liCompleted); 
    p.innerHTML = li.innerText;
    checkCircleCompleted.appendChild(iCompleted);
    liCompleted.prepend(checkCircleCompleted);
    liCompleted.appendChild(p);
    liCompleted.appendChild(deleteTrash4CompletedList);
    li.remove();
  }
  // let ul = document.getElementById("completed-list");
  // // console.log(liCompleted.length);
  // console.log(ul.childElementCount);
  // for(let i = 0; i < ul.length; i++) {
  //   console.log(ul[i]);
  // }
}



// https://stackoverflow.com/questions/33004177/add-user-input-to-list-on-button-click-in-javascript

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript


// App design link:
// https://www.uplabs.com/posts/todo-list-mobile-app

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content#How_does_it_work
 
// MOVE CHILD
// https://stackoverflow.com/questions/20910147/how-to-move-all-html-element-children-to-another-parent-using-javascript