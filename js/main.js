//!============= Start Global Variables
var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkURLInput = document.getElementById("bookmarkURL");
var bookmarkList = [];
if (localStorage.getItem("Bookmarks") !== null) {
  bookmarkList = JSON.parse(localStorage.getItem("Bookmarks"));
  displayData();
}
//!============= End Global Variables

//* Start function add bookmarks
function addSite() {
  if (validationName() && validationURL()) {
    var bookmarks = {
      bookName: bookmarkNameInput.value,
      bookURL: bookmarkURLInput.value,
    };
    bookmarkList.push(bookmarks);

    localStorage.setItem("Bookmarks", JSON.stringify(bookmarkList));

    displayData();

    bookmarkClear();
  }
}
//* End function add bookmarks

//* Start function Display-data
function displayData() {
  var allData = "";
  for (var i = 0; i < bookmarkList.length; i++) {
    allData += creatRow(i);
  }
  document.getElementById("bookmarkTable").innerHTML = allData;
}
//* End function Display-data

//* Start function creating-data
function creatRow(i) {
  return `
<tr>
<td>${i + 1}</td>
<td>${bookmarkList[i].bookName}</td>
<td> <a href="${
    bookmarkList[i].bookURL
  }" target="_blank" class=" btn btn-sm "><i class="fa-solid fa-eye"></i> Visit </a> </td>
<td><button onclick="deleteRow(${i})" class="btn btn-sm dl-btn" ><i class="fa-solid fa-trash-can"></i> Delete</button></td>   
</tr>

`;
}
//* End function creating-data

//* Start function Delete-data
function deleteRow(index) {
  bookmarkList.splice(index, 1);
  localStorage.setItem("Bookmarks", JSON.stringify(bookmarkList));
  displayData();
}
//* End function Delete-data

//* Start function clear-data
function bookmarkClear() {
  bookmarkNameInput.value = null;
  bookmarkURLInput.value = null;
}
//* End function clear-data

//* Start function Validation-Name
function validationName() {
  var regex = /^[a-zA-Z][a-zA-Z0-9 _-]{2,15}$/;
  var text = bookmarkNameInput.value;
  var msgName = document.getElementById("msgName");

  if (regex.test(text)) {
    bookmarkNameInput.classList.add("is-valid");
    bookmarkNameInput.classList.remove("is-invalid");
    msgName.classList.add("d-none");
    return true;
  } else {
    bookmarkNameInput.classList.add("is-invald");
    bookmarkNameInput.classList.remove("is-valid");
    msgName.classList.remove("d-none");
    return false;
  }
}
//* End function Validation-Name

//* Start function Validation-URL
function validationURL() {
  var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  var text = bookmarkURLInput.value;
  var msgURL = document.getElementById("msgURL");

  if (regex.test(text)) {
    bookmarkURLInput.classList.add("is-valid");
    bookmarkURLInput.classList.remove("is-invalid");
    msgURL.classList.add("d-none");
    return true;
  } else {
    bookmarkURLInput.classList.add("is-invalid");
    bookmarkURLInput.classList.remove("is-valid");
    msgURL.classList.remove("d-none");
    return false;
  }
}
//* End function Validation-URL





