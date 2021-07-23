// const alert = document.querySelector(".alert");
// // !test
// const form = document.querySelector(".grocery-form");
// const grocery = document.querySelector("#grocery");
// const submitBtn = document.querySelector(".submit-btn");
// const container = document.querySelector(".grocery-container");
// const list = document.querySelector(".grocery-list");
// const clearBtn = document.querySelector(".clear-btn");

// // edit option
// let editElement;
// let editFlag = false;
// let editID = "";
// // *********** EVENT LISTENERS ***********
// // submit form
// form.addEventListener("submit", addItem);
// // *********** FUNCTIONS ***********
// function addItem(e) {
//   e.preventDefault();
//   // make visible

//   // get input value
//   const inputValue = grocery.value;

//   // *create article
//   const displayItem = document.createElement("div");
//   displayItem.innerHTML = `<article class="grocery-item">
//         <p class="title">${inputValue}</p>
//         <div class="btn-container">
//             <button class="edit-btn">
//                 <i class="fas fa-edit"></i>
//             </button>
//             <button class="delete-btn">
//                 <i class="fas fa-trash"></i>
//             </button>
//         </div>
//     </article>`;
//   // append article
//   if (grocery.value.length <= 0) {
//     displayItem.remove();
//   } else {
//     list.appendChild(displayItem);
//   }
//   // reset input value
//   if (addItem && grocery.value.length > 0) {
//     grocery.value = "";
//     container.style.visibility = "visible";
//   }

//   //   *clear btn
//   clearBtn.addEventListener("click", function () {
//     list.remove();
//     // container.style.visibility = "hidden";
//   });

//   // *get created item
//   const groceryItem = document.querySelectorAll(".grocery-item");
//   const title = document.querySelectorAll(".title");

//   groceryItem.forEach(function (item) {
//     // delete
//     item.addEventListener("click", function (e) {
//       // console.log(e.target);
//       if (e.target.className == "fas fa-trash") {
//         item.remove();
//       }
//       else if (e.target.className == "fas fa-edit") {
//         function inputValueFn() {
//           grocery.value = inputValue;
//           // console.log(e.target.parentNode.parentNode.parentNode);
//         }
//         inputValueFn();
//       }
//       // const current = e.target.parentNode.parentNode.parentNode;
//       // console.log(current);
//       if (inputValueFn) {
//         form.addEventListener("submit", function() {
//           const newItem = document.createElement('div');
          
//           item.remove();
//           newItem.innerHTML = `<article class="grocery-item">
//           <p class="title">${item}</p>
//           <div class="btn-container">
//               <button class="edit-btn">
//                   <i class="fas fa-edit"></i>
//               </button>
//               <button class="delete-btn">
//                   <i class="fas fa-trash"></i>
//               </button>
//           </div>
//       </article>`;
//         })
//       }
      
      
      
//     });
//   });
// }

// !end test


const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// *********** EVENT LISTENERS ***********
// submit form
form.addEventListener("submit", addItem);
window.addEventListener('DOMContentLoaded', function() {
})
// *********** FUNCTIONS ***********


// add Item
function addItem(e) {
  e.preventDefault();
  const inputValue = grocery.value;

  if (inputValue && !editFlag){
    // add item
    const groceryItem = document.createElement('article');
    groceryItem.classList.add('grocery-item');
    groceryItem.innerHTML = `<p class="title">${inputValue}</p>
    <div class="btn-container">
        <button class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;
    list.appendChild(groceryItem);
    const newItem = document.querySelectorAll('.grocery-item');
    newItem.forEach(function(nItem) {
      nItem.addEventListener("click", function(b) {
        if (b.target.className === 'fas fa-trash') {
          nItem.remove();
        }
      })
    })
  } 
  else if (inputValue && editFlag) {
    console.log('edit item');
  }
  else {
    displayAlert('Please enter value', 'danger');
  }
}
// display Alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
    setTimeout(function() {
      alert.textContent = '';
      alert.classList.remove(`alert-${action}`);
    }, 1000);
}
  
// *********** LOClAL STORAGE ***********

// *********** SETUP ITEMS ***********
