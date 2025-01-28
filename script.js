const myLibrary = [];

function Book(title, author, noOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
    this.info = title + " by " + author + ", " + noOfPages + ", " + readStatus;
}
  
function addBookToLibrary(title, author, noOfPages, readStatus) {
    if (readStatus === true) {
        readStatus = "read"}
        else { readStatus = "not read yet"};
    noOfPages = noOfPages + " pages";
    myLibrary.push(new Book(title, author, noOfPages, readStatus));
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

function clearLibrary() {
    const library = document.querySelector(".library");
    while (library.firstChild) {
        library.removeChild(library.lastChild);
    }
}

function printLibrary() {
    const library = document.querySelector(".library");

    // div for displaying library
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

        let deleteEntry = document.createElement("button");
        deleteEntry.classList.add("deleteEntry");
        deleteEntry.textContent = "Delete";
        deleteEntry.addEventListener("click", () => {
            card.remove();
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(noOfPages);
        card.appendChild(readStatus);
        card.appendChild(deleteEntry);
        library.appendChild(card);
    }
}

function refreshLibrary() {
    clearLibrary();
    printLibrary();
}

// Example books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', '223', 'read');
addBookToLibrary('Dune', 'Frank Herbert', '896', 'read');

printLibrary();

// Buttons
const showButton = document.querySelector("#openDialog");
const closeButton = document.querySelector("#closeDialog");
// const deleteEntryButton = document.querySelector(".deleteEntry");
// "Add Book" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});
// "X" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});
// // "Delete" button deletes book from library
// deleteEntryButton.addEventListener("click", () => {
//     const library = document.querySelector(".library");
//     const card = document.querySelector(".card");
//     library.removeChild(card);
// });

// Get a reference to the form element
const form = document.getElementById("bookForm");
// Add an event listener for the submit event
form.addEventListener('submit', function(event) {
    // Get the values of the form elements
    addBookToLibrary(form.elements.title.value, form.elements.author.value, form.elements.noOfPages.value, form.elements.readStatus.checked);
    form.reset();
    refreshLibrary();
    dialog.close();
    event.preventDefault();
});