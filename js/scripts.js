

let button = document.getElementById('button');
let input = document.getElementById('inputText');
let completedList = document.getElementById("completed-list");

let arr = [];

//get value for button and add event listener
button.addEventListener('click', function() {
  if(input.value == "") {
    addItemAlert();
  } else {
    pushData();
    clearInputField();
  // button.classList.add("noInputBorder")
  }
});

console.log(alert);

// button.addEventListener('click', pushData);
// button.addEventListener('click', clearInputField);

function addItemAlert() {
  alert("You need to add an item");
  // alert.classList.add("alert-style")
}

//display user input on screen
function pushData() {
  // get input value
  let inputText = input.value;
  // append data to the array
  arr.push(inputText);
  var text = "";
                
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
  document.getElementById('list').appendChild(li);  //append list item to parent element (ul)
  li.setAttribute("class", "list-item"); //set class attribute


  let p = document.createElement("p");
  // make data/content editable
  p.setAttribute("contenteditable", "true");

  let i = document.createElement("i");
  i.setAttribute("class", "far fa-circle");

  let checkCircle = document.createElement("span");
  let deleteTrash = document.createElement("span");//create span for holding trash bin icon
  deleteTrash.innerHTML = "<i id='delete' class='delete fa fa-trash'></i>";

  p.innerHTML = userInput;  //add user input in paragraph (p) element

  // add checklist, data/content and trash functions to list
  checkCircle.appendChild(i);
  li.prepend(checkCircle);
  li.appendChild(p);
  li.appendChild(deleteTrash);

  checkCircle.addEventListener('click', function() {
    toggleCheck(p); 
    editData(i, p);
    transferCompletedData(i, p, li, deleteTrash);
  })

  // deleteTrash.addEventListener('click', deleteData(li));
  deleteTrash.addEventListener('click', function() {
  deleteData(li);
  });
}

// Delete data/content
function deleteData(x) {
  x.remove();
// console.log(x);
}

//transfer data from completed container to list container
// function transferData(li, liCompleted) {
function ReverseTransferData(li, liCompleted) {
  li.innerHTML = liCompleted.innerHTML;
  liCompleted.innerHTML = "";
  // console.log(li);
  // console.log(liCompleted);
}

//toggle line-through class
function toggleCheck(p) {
   // p.classList.add("strike-out");
  p.classList.toggle("strike-out");
  
  // p.setAttribute("contenteditable", "true");
  // if(p.hasAttribute("class") == false) {
  //   // p.setAttribute("class", "strike-out");
  //   // p.classList.add("strike-out");
  //   // let x = p.getAttribute("class")
  //   // console.log(x);
  //   console.log("NO CLASS")
  // } else {
  //   console.log("I HAVE CLASS")
  // }
}

//clear text from input field
function clearInputField() {
  document.getElementById('inputText').value = "";
}
 
// user can edit content only when circle does not have a tick inside of it
function editData(i, p) {
  if(i.className == "far fa-circle") {
    i.className = "far fa-check-circle";
     //content cannot be edited
    p.setAttribute("contenteditable", "false");
  } else {
    i.className = "far fa-circle";
    //content can be edited
    p.setAttribute("contenteditable", "true");
      // p.setAttribute("class", "strike-out");
  }
}

//  transfer list completed data/content over to completed-list container
function transferCompletedData(i, p, li, deleteTrash) {
  let liCompleted = document.createElement("li");
  let checkCircleCompleted = document.createElement("span");
  let deleteTrash4CompletedList = document.createElement("span");
  let iCompleted = document.createElement("i");

  if(i.className == "far fa-check-circle") {
    // deleteTrash4CompletedList.innerHTML = "<i id='complete-trash' class='complete-trash fa fa-trash'></i>";
    deleteTrash4CompletedList.innerHTML = deleteTrash.innerHTML;
    // console.log(deleteTrash4CompletedList.innerHTML);
    iCompleted.addEventListener('click', function() {
      // p.classList.remove("strike-out");
      // p.classList.toggle("strike-out");
      toggleCheck(p);
      // iCompleted.innerHTML = i.innerHTML;
      iCompleted.setAttribute("class", "far fa-circle");
    });

    deleteTrash4CompletedList.addEventListener('click', function() {
      deleteData(liCompleted);
    });

    checkCircleCompleted.addEventListener('click', function() {
      ReverseTransferData(li, liCompleted);
    });

    // checkCircleCompleted.addEventListener('click', () => {
    //   ReverseTransferData(li, liCompleted);
    // });

    iCompleted.setAttribute("class", "far fa-check-circle");
    completedList.appendChild(liCompleted);
    //  completedList.innerHTML = li.textContent;
    // liCompleted.innerHTML = li.textContent;
    p.innerHTML = li.innerText;
    checkCircleCompleted.appendChild(iCompleted);
    liCompleted.prepend(checkCircleCompleted);
    liCompleted.appendChild(p);
    liCompleted.appendChild(deleteTrash4CompletedList);
    li.innerHTML = "";
    // li.remove();
  } 
}



// https://stackoverflow.com/questions/33004177/add-user-input-to-list-on-button-click-in-javascript

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript


// App design link:
// https://www.uplabs.com/posts/todo-list-mobile-app

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content#How_does_it_work
 
// MOVE CHILD
// https://stackoverflow.com/questions/20910147/how-to-move-all-html-element-children-to-another-parent-using-javascript