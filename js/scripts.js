

let button = document.getElementById('button');
let input = document.getElementById('inputText');
let completedList = document.getElementById("completed-list");


let arr = [];

//get value for button and add event listener
button.addEventListener('click', function() {
  pushData();
  clearInputField();
});
// span.addEventListener('click', function() {
//   this.li.classList.add('remove');
// });
// button.addEventListener('click', pushData);
// button.addEventListener('click', clearInputField);

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
  // create completed list 
  let liCompleted = document.createElement("li");
  let trashSpan = document.createElement("span");
  let checkCircleCompleted = document.createElement("span");
  let iCompleted = document.createElement("i");

  // create list item
  let li = document.createElement("li");
  //append list item to parent element (ul)
  document.getElementById('list').appendChild(li);
  li.setAttribute("class", "list-item");
    
  // let checkCircle = document.createElement("span");


  let i = document.createElement("i");
  i.setAttribute("class", "far fa-circle");
  // checkCircle.innerHTML =  "<i class='far fa-circle'></i>";
  // circle.innerHTML = "<i class='far fa-check-circle'></i>";
  let p = document.createElement("p");
  // make data/content editable
  p.setAttribute("contenteditable", "true");


 let checkCircle = document.createElement("span");
  // console.log(circle);
  // let circle;
  // let  = createRadioButton(circle, p);


  let deleteTrash = document.createElement("span");
  deleteTrash.innerHTML = "<i id='delete' class='delete fa fa-trash'></i>";

  p.innerHTML = userInput;  //add user input in paragraph (p) element

  // add checklist, data/content and trash functions to list
  checkCircle.appendChild(i);
  li.prepend(checkCircle);
  li.appendChild(p);
  li.appendChild(deleteTrash);

  checkCircle.addEventListener('click', function() {
    toggleCheck(p)
    editData(i, p);
    transferCompletedData(i, p, li, trashSpan, iCompleted, completedList, checkCircleCompleted, liCompleted);
  })

  checkCircleCompleted.addEventListener('click', () => {
    transferData(li, liCompleted);
  });

  // Delete content

  // deleteTrash.addEventListener('click', deleteData(li));
  deleteTrash.addEventListener('click', function() {
  //   li.remove();
  deleteData(li);
  });

  trashSpan.addEventListener('click', function() {
    // liCompleted.remove();
    deleteData(liCompleted);
  });
 
}


function deleteData(x) {
x.remove();
// console.log(x);
}


function transferData(li, liCompleted) {
  li.innerHTML = liCompleted.innerHTML;
  liCompleted.innerHTML = "";
}




// function createRadioButton(circle, p, i) {

//   circle.addEventListener('click', function() {
//     p.classList.toggle("slash");
//     editData(i, p);
//     transferCompletedData(i, p, li, trashSpan, iCompleted, completedList, checkCircleCompleted, liCompleted);
//   });
// }

function toggleCheck(p) {
    p.classList.toggle("slash");
//     editData(i, p);
//     transferCompletedData(i, p, li, trashSpan, iCompleted, completedList, checkCircleCompleted, liCompleted);
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
  }
}

  //create new list item 
  function createNewListItem() {

  }
//  transfer list completed data/content over to completed-list container
function transferCompletedData(i, p, li, trashSpan, iCompleted, completedList, checkCircleCompleted, liCompleted) {
  if(i.className == "far fa-check-circle") {
    trashSpan.innerHTML = "<i id='complete-trash' class='complete-trash fa fa-trash'></i>";
    iCompleted.setAttribute("class", "far fa-check-circle");
    completedList.appendChild(liCompleted);
    //  completedList.innerHTML = li.textContent;
    // liCompleted.innerHTML = li.textContent;
    p.innerHTML = li.innerText;
    checkCircleCompleted.appendChild(iCompleted);
    liCompleted.prepend(checkCircleCompleted);
    liCompleted.appendChild(p);
    liCompleted.appendChild(trashSpan);
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