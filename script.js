let myLibrary = [];
const myLibraryLength = myLibrary.length;
const bookNum = "book" + myLibrary.length;
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
    readBook.value,
    this.bookNum = bookNum
  );

      bookList.innerHTML += `<tr id="${bookNum}Table">
    <td>${bookName.value}</td>
    <td>${authorName.value}</td>
    <td>${pageNumber.value}</td>
    <td>${readBook.value}</td>
    <td><button class="delete" id="${bookNum}">Delete</button></td>
    </tr>`;
    
  
  document.getElementById(bookNum).addEventListener("click", function() {
    // console.log(`${this.id}Table`);
    let bookLocation = `${this.id}`;
   console.log(myLibrary.findIndex(bookLocation));
    document
      .getElementById(`${this.id}Table`).innerHTML = "";
  });
  
    myLibrary.push(book);
    bookEntry.style.display = "none";
}

document.getElementById("submit").addEventListener("click", addBookToLibrary);


