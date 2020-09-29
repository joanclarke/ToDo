

            // create an empty array
            // let myArr = ["A","B","C","D"];
            let arr = [];
            //get value for button and add event listener
            let button = document.getElementById('button');
            button.addEventListener('click', pushData);
            function pushData()
            {
                // get value from the input text
                let inputText = document.getElementById('inputText').value;
                
                // append data to the array
                arr.push(inputText);
                
                var text = "";
                
                for(i = 0; i < arr.length; i++)
                {
                    // text = text + arr[i] + "<br/>";
                    text = arr[i];

                }
     
                createList(text);
            }

            function createList(item) {
              //create list 
              let li = document.createElement("li");
              // append list item to parent element (ul)
              document.getElementById('list').appendChild(li);
              //display data in list format
              li.innerHTML = item;

              console.log(arr);
            }





// document.addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World!";
// });

// document.addEventListener("click", myFunction);
// document.addEventListener("click", someOtherFunction);

// function myFunction() {
//   alert ("Hello World!")
// }

// function someOtherFunction() {
//   alert ("This function was also executed!")
// }

// let arr = [];


// let inputItem = document.getElementById('user-input').value;
// let results = document.getElementById('results');
// let list = document.getElementById('list');
// let addItemBtn = document.querySelector(".add-item-btn");
// addItemBtn.addEventListener('click', addItem);
// //   console.log(text, el)

// function addItem() {
//   text = "";
//   for(let i = 0; i < inputItem.length; i++) {
//     text = text + inputItem[i];
//     // arr.push(text);
//     //  list.innerHTML = el.value;
 
//   }
//   // console.log(text)
//   createList(text);
// }

//   function createList(txt) {
//     // let node = document.createTextNode(txt);
//     let li = document.createElement("li");
//     li.innerHTML = txt;
//     // li.appendChild(node);
//     list.appendChild(li);
//       console.log(txt)
//   }

// function addItem() {
//   // results.innerHTML = item.innerHTML;
//   // e.preventDefault;
//   arr.push(inputItem);
//    text = "";
//   for(let i = 0; i < arr.length; i++) {
//     text = text + arr[i];
//     // arr.push(text);
   
//   }
// //  let bop =    arr.push(text);
 
//   //display  array list
//   results.innerHTML = text;
//   // let text = "";
//   // createList(text);
//   console.log(results)
// }

  // function createList(txt) {
  //   let node = document.createTextNode(txt);
  //   let li = document.createElement("li");
  //   li.appendChild(node);
  //   results.appendChild(li);
  // }



  // li.innerHTML= listItem.value;

//   addList.classList.remove('hide');
//  addList.innerHTML =  userInput.innerText;


// console.log(item);

// function addItem(list) {
//   text = "";
//   // for(let i = 0; i < userInput.length; i++) {
//   //   text += userInput[i].value;
//   // }

//   // text = userInput.innerText;
//   let li = document.createElement("li");
//   let node = document.createTextNode(text);
//   // node.appendChild(userInput.value);
//   li.appendChild(node);
//   // console.log(userInput);
//   // list.appendChild(li);
// }

// https://stackoverflow.com/questions/33004177/add-user-input-to-list-on-button-click-in-javascript

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript