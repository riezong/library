const myLibrary = [];

function Book(title, author, noOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
    this.info = title + " by " + author + ", " + noOfPages + ", " + readStatus;
}
  
function addBookToLibrary(title, author, noOfPages, readStatus) {
    myLibrary.push(new Book(title, author, noOfPages, readStatus));
}

// example books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', '223 pages', 'read');
addBookToLibrary('Dune', 'Frank Herbert', '896 pages', 'read');

function displayLibrary() {
    const bookList = [];
    for (const book of myLibrary) {
        // console.log(book.info);
        bookList.push(book.info);
    }
    console.log(bookList);
    return bookList;
}

function refreshLibrary() {
    
    displayLibrary();
}

displayLibrary();

function refreshLibrary() {
    // div for displaying library
    const library = document.querySelector(".library");

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("p");
        title.classList.add("title");
        title.textContent = myLibrary[i].title;

        let author = document.createElement("p");
        author.classList.add("author");
        author.textContent = myLibrary[i].author;

        let noOfPages = document.createElement("p");
        noOfPages.classList.add("noOfPages");
        noOfPages.textContent = myLibrary[i].noOfPages;

        let readStatus = document.createElement("p");
        readStatus.classList.add("readStatus");
        readStatus.textContent = myLibrary[i].readStatus;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(noOfPages);
        card.appendChild(readStatus);
        library.appendChild(card);
    }
}

refreshLibrary();

// add book button
const addBook = document.querySelector("#addBook");

// Get a reference to the form element
const form = document.getElementById("bookForm");
// Add an event listener for the submit event
form.addEventListener('submit', function(event) {
    // Get the values of the form elements
    addBookToLibrary(form.elements.title.value, form.elements.author.value, form.elements.noOfPages.value, form.elements.readStatus.value);
    refreshLibrary();
    event.preventDefault();
});

// function handleClick() {
//     alert('It was clicked!');
// }

// addBook.addEventListener('click', handleClick);