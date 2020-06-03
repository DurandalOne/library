let myLibrary = [];
let entryNumber = 0;
let bookNum = "book" + entryNumber;
const bookName = document.getElementById("bookName");
const authorName = document.getElementById("authorName");
const pageNumber = document.getElementById("pageNumber");
const readBook = document.getElementById("readBook");
const bookList = document.getElementById("books");

// Get the modal
let modal = document.getElementById("bookEntry");

// Get the button that opens the modal
let btn = document.getElementById("addBook");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  bookEntry.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  bookEntry.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    bookEntry.style.display = "none";
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookNum = bookNum;
}

function addBookToLibrary() {
  let book = new Book(
    bookName.value,
    authorName.value,
    pageNumber.value,
    document.querySelector('input[name=readBook]:checked').value,
    this.bookValue = bookNum
  );

      bookList.innerHTML += `<tr id="${bookNum}Table">
    <td>${bookName.value}</td>
    <td>${authorName.value}</td>
    <td>${pageNumber.value}</td>
    <td class="read" id=${entryNumber}>${document.querySelector("input[name=readBook]:checked").value}</td>
    <td><button class="delete" id="${bookNum}">Delete</button></td>
    </tr>`;
  
    
  let deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach((e) => {
    let elementPos = myLibrary.map((x) => { x.readBook }).indexOf(e.id);
    e.addEventListener("click", function () {
      myLibrary.splice(elementPos - 1, 1);
      document.getElementById(`${this.id}Table`).innerHTML = "";
    });
  });

  let readButton = document.querySelectorAll(".read");

  readButton.forEach(e => {
  e.style.cursor = "pointer";
    if (e.innerHTML == "Yes") {
      e.style.backgroundColor = "green";
    } else if (e.innerHTML == "No") {
      e.style.backgroundColor = "red";
    }

    e.addEventListener("click", function () {
      if (e.innerHTML == "Yes") {
        e.innerHTML = "No"
        e.style.backgroundColor = "red";
        myLibrary[e.id].read = "No";
      } else if (e.innerHTML == "No") {
        e.innerHTML = "Yes";
        e.style.backgroundColor = "green";
        myLibrary[e.id].read = "Yes";

      }
    })
  });

  bookEntry.style.display = "none";
  entryNumber++;
  bookNum = "book" + entryNumber;
  myLibrary.push(book);
  bookName.value = "";
  authorName.value = "";
  pageNumber.value = "";
  readBook.value = "";


}

document.getElementById("submit").addEventListener("click", addBookToLibrary);






