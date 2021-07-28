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
    const deleteBtn = groceryItem.querySelector(".delete-btn");
    const editBtn = groceryItem.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    // append child
    list.appendChild(groceryItem);
    // display alert
    displayAlert("Item added", "success");
    // set container to visible
    container.classList.add("show-container");
    // addToLocalStorage
    addToLocalStorage(/*id, value*/);
    // setBackToDefault
    setBackToDefault();
  } else if (groceryValue && editFlag) {
    // edit
    // console.log('edit item');
    editElement.innerHTML = groceryValue;
    displayAlert("Value changed", "success");
    // edit local storage
    // editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    // empty
    displayAlert("Please enter a value", "danger");
  }
}

// alert function
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  items.forEach(function (item) {
    item.remove();
  });
  displayAlert("Empty list", "danger");
  setBackToDefault();
  // localStorage.removeItem('list');
}

// delete function
function deleteItem(e) {
  const item = e.currentTarget.parentElement.parentElement;
  const id = item.dataset.id;
  item.remove();
  displayAlert("Item removed", "danger");
  setBackToDefault();
  // remove from local storage
  // removeFromLocalStorage(id);
}
// edit function
function editItem(e) {
  const item = e.currentTarget.parentElement.parentElement;
  // set eit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = item.dataset.id;
  submitBtn.textContent = "Edit";
}
// setBackToDefault
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Add";
  if (list.children.length <= 0) {
    container.classList.remove("show-container");
  }
}

// *********** LOClAL STORAGE ***********
function addToLocalStorage(/*id, value*/) {
  // console.log('added to local storage');
}
function removeFromLocalStorage(id) {}
// *********** SETUP ITEMS ***********
