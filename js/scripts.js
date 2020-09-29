

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

function createList(item) {
    //create list 
    let li = document.createElement("li");
    // append list item to parent element (ul)
    document.getElementById('list').appendChild(li);
    //display data in list format
    li.innerHTML = item + " <span><i id='delete' class='delete fa fa-trash'></i></span>";
    li.setAttribute("class", "list-item");
    
    // <i class="fa fa-trash" aria-hidden="true"></i>
    // console.log(arr);
}

function clearInputField() {
      //clear text from input field
  document.getElementById('inputText').value = "";
}



// https://stackoverflow.com/questions/33004177/add-user-input-to-list-on-button-click-in-javascript

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript