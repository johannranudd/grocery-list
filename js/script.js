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
clearBtn.addEventListener("click", clearItems);
// *********** FUNCTIONS ***********
// add Item
function addItem(e) {
  e.preventDefault();
  const groceryValue = grocery.value;
  const dateId = new Date().getTime().toString();
  if (groceryValue && !editFlag) {
    // create element
    const groceryItem = document.createElement("article");
    // add class
    groceryItem.classList.add("grocery-item");
    // set attribute and ID
    const attr = document.createAttribute("data-id");
    attr.value = dateId;
    groceryItem.setAttributeNode(attr);
    // add innerHTML
    groceryItem.innerHTML = `<p class="title">${groceryValue}</p>
    <div class="btn-container">
        <button class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;
    // append child
    list.appendChild(groceryItem);
    // display alert
    displayAlert("Item added", "success");
    // set container to visible
    container.classList.add("show-container");
    // addToLocalStorage
    addToLocalStorage();
    // setBackToDefault
    setBackToDefault();
    // delete function
    deleteFn();
  } else if (groceryValue && editFlag) {
    // edit
    console.log("edit item");
  } else {
    // empty
    displayAlert("Please enter a value", "danger");
  }
}

// alert function
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const listItem = list.querySelectorAll("article");
  listItem.forEach(function (item) {
    item.remove();
    setBackToDefault();
    displayAlert("List cleared", "danger");
  });
}

// delete function
function deleteFn() {
  const singleGroceryItem = list.querySelectorAll("article");
  singleGroceryItem.forEach(function (g) {
    g.addEventListener("click", function (deleteIcon) {
      if (deleteIcon.target.className == "fas fa-trash") {
        g.remove();
        displayAlert("Item removed", "danger");
        setBackToDefault();
      }
    });
  });
}

// setBackToDefault
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  submitBtn.textContent = "Add";
  if (list.children.length <= 0) {
    container.classList.remove("show-container");
  }
}

// *********** LOClAL STORAGE ***********
function addToLocalStorage() {}
// *********** SETUP ITEMS ***********
