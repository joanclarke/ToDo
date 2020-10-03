

 // create an empty array
 // let myArr = ["A","B","C","D"];
let arr = [];
//get value for button and add event listener
let button = document.getElementById('button');
button.addEventListener('click', function() {
  pushData();
  clearInputField();
});
// span.addEventListener('click', function() {
//   this.li.classList.add('remove');
// });
// button.addEventListener('click', pushData);
// button.addEventListener('click', clearInputField);

//Push user input to screen
function pushData() {
    // get value from the input text
    let inputText = document.getElementById('inputText').value;
                
    // append data to the array
    arr.push(inputText);
    var text = "";
                
    for(i = 0; i < arr.length; i++) {
      // text = text + arr[i] + "<br/>";
      text = arr[i];
    }
              
    if(text != "") {
      createList(text);
    }
}

    //create list 
function createList(item) {



  let completedList = document.getElementById("completed-list");
  // create list item
let liCompleted = document.createElement("li");

let trashSpan = document.createElement("span");
let checkCircleCompleted = document.createElement("span");
let iCompleted = document.createElement("i");


    // create list item
    let li = document.createElement("li");
       //append list item to parent element (ul)
    document.getElementById('list').appendChild(li);
    li.setAttribute("class", "list-item");
    
    let checkCircle = document.createElement("span");
    let i = document.createElement("i");
    i.setAttribute("class", "far fa-circle");
    // checkCircle.innerHTML =  "<i class='far fa-circle'></i>";
    // circle.innerHTML = "<i class='far fa-check-circle'></i>";
    let p = document.createElement("p");
    // make data/content editable
    p.setAttribute("contenteditable", "true");
    let deleteTrash = document.createElement("span");
    deleteTrash.innerHTML = "<i id='delete' class='delete fa fa-trash'></i>";
    //display data in paragraph format
    p.innerHTML = item;

    // add checklist, data/content and delete to list
    checkCircle.appendChild(i);
    li.prepend(checkCircle);
    li.appendChild(p);
    li.appendChild(deleteTrash);
    // li.setAttribute("id", "list-item");
    // p.setAttribute("display", "inherit");
  //  console.log(li);
  
    // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content#How_does_it_work
  //remove item when trash bin icon is clicked
  // document.querySelector('#delete').addEventListener('click', function() {
  //   li.remove();
  // });


//   checkCircle.addEventListener('click', function() {
//     p.classList.toggle("slash");
//    //  let x = p.getAttribute("contenteditable"); 
 
 
 
//     if(i.className == "far fa-circle") {
//      i.className = "far fa-check-circle";
//       //content cannot be edited
//      p.setAttribute("contenteditable", "false");
//     } else {
//      i.className = "far fa-circle";
//      //content can be edited
//      p.setAttribute("contenteditable", "true");
 
//     }
 
//    //  transfer list over to completed when circle is checked
//     if(i.className == "far fa-check-circle") {
//        let completedList = document.getElementById("completed-list");
//          // create list item
//        let liCompleted = document.createElement("li");
 
//        completedList.appendChild(liCompleted);
//      //  completedList.innerHTML = li.textContent;
//        liCompleted.innerHTML = li.innerHTML;
//        li.innerHTML = "";
//     }
    
//  });
 

  checkCircle.addEventListener('click', function() {
   p.classList.toggle("slash");
  //  let x = p.getAttribute("contenteditable"); 

//     p.classList.toggle("slash");

   if(i.className == "far fa-circle") {
    i.className = "far fa-check-circle";
     //content cannot be edited
    p.setAttribute("contenteditable", "false");
   } else {
    i.className = "far fa-circle";
    //content can be edited
    p.setAttribute("contenteditable", "true");

   }

  //  transfer list over to completed when circle is checked
   if(i.className == "far fa-check-circle") {
    
      trashSpan.innerHTML = "<i id='complete-trash' class='complete-trash fa fa-trash'></i>";
      // let iCompleted = document.createElement("i");
      iCompleted.setAttribute("class", "far fa-check-circle");
    //  liCompleted.appendChild(trashSpan);
      completedList.appendChild(liCompleted);
    //  completedList.innerHTML = li.textContent;
    // liCompleted.innerHTML = li.textContent;
    p.innerHTML = li.innerText;
    checkCircleCompleted.appendChild(iCompleted);
    liCompleted.prepend(checkCircleCompleted);
    liCompleted.appendChild(p);
     liCompleted.appendChild(trashSpan);
      // liCompleted.innerHTML = li.innerHTML;
      li.innerHTML = "";
      // li.remove();
        //  console.log(li);
   } 


});

  checkCircleCompleted.addEventListener('click', function() {
    li.innerHTML = liCompleted.innerHTML;
        liCompleted.innerHTML = "";
  });

  // Delete content
  deleteTrash.addEventListener('click', function() {
        li.remove();
    });

    trashSpan.addEventListener('click', function() {
      liCompleted.remove();
  });
}

//clear text from input field
function clearInputField() {
  document.getElementById('inputText').value = "";
}


// https://stackoverflow.com/questions/33004177/add-user-input-to-list-on-button-click-in-javascript

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript


// App design link:
// https://www.uplabs.com/posts/todo-list-mobile-app