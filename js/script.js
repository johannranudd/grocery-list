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
// *********** FUNCTIONS ***********
function addItem(e) {
  e.preventDefault();
  // make visible

  // get input value
  const inputValue = grocery.value;


    // create article
    const displayItem = document.createElement("div");
    displayItem.innerHTML = `<article class="grocery-item">
        <p class="title">${inputValue}</p>
        <div class="btn-container">
            <button class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </article>`;
    // append article
    if (grocery.value.length <= 0) {
      displayItem.remove();
    } else {
      list.appendChild(displayItem);
    }
    // reset input value
    if (addItem && grocery.value.length > 0) {
      grocery.value = "";
      container.style.visibility = "visible";
    }
  

  //   clear btn
  clearBtn.addEventListener("click", function () {
    list.remove();
  });

  // *get created item
  const groceryItem = document.querySelectorAll(".grocery-item");
  const title = document.querySelector(".title");
  if (groceryItem) {
    
    

        groceryItem.forEach(function (item) {
            item.addEventListener("click", function (e) {
              if (e.target.className == "fas fa-trash") {
                console.log("eeeee");
                item.remove();
              } else if (e.target.className == "fas fa-edit") {
                grocery.value = title.innerHTML;

                    form.addEventListener("submit", function setNewVal(val) {
                      val.preventDefault();
                      console.log(item);
                      
                    })
                  // displayItem.remove();
                  // list.appendChild(displayItem);
                  
              }
            });
          });
    
  } // end get created item
}

// *********** LOClAL STORAGE ***********

// *********** SETUP ITEMS ***********
