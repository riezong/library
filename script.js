const myLibrary = [];

function Book(title, author, noOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
    this.info = title + " by " + author + ", " + noOfPages + ", " + readStatus;
}
  
function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    const bookList = [];
    for (const book of myLibrary) {
        // console.log(book.info);
        bookList.push(book.info);
    }
    console.log(bookList);
    return bookList;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
addBookToLibrary(theHobbit);

const harryPotter = new Book('Harry Potter 1', 'J.K. Rowling', '223 pages', 'read');
addBookToLibrary(harryPotter);

displayLibrary();

const container = document.querySelector(".container");
const div = document.createElement("div");

let showLibrary = document.createElement("p");
showLibrary.textContent = displayLibrary();

div.appendChild(showLibrary);
container.appendChild(div);