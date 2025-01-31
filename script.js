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

function clearLibrary() {
    const library = document.querySelector(".library");
    while (library.firstChild) {
        library.removeChild(library.lastChild);
    }
}

function printLibrary() {

    myLibrary.sort((a, b) => {
        const titleA = a.title.toLowerCase(); // Case-insensitive comparison
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0; // Names are equal
      });

    const library = document.querySelector(".library");

    // div for displaying library
    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card");
        const cardContent = document.createElement("div");
        cardContent.classList.add("cardContent");
        const cardButtons = document.createElement("div");
        cardButtons.classList.add("cardButtons");

        let title = document.createElement("p");
        title.classList.add("title");
        title.textContent = book.title;

        let author = document.createElement("p");
        author.classList.add("author");
        author.textContent = book.author;

        let noOfPages = document.createElement("p");
        noOfPages.classList.add("noOfPages");
        noOfPages.textContent = book.noOfPages;

        let readStatus = document.createElement("p");
        readStatus.classList.add("readStatus");
        readStatus.textContent = book.readStatus;

        let deleteEntry = document.createElement("button");
        deleteEntry.classList.add("deleteEntry");
        deleteEntry.textContent = "X";
        deleteEntry.addEventListener("click", () => { // No need for closure here
            card.remove();
            myLibrary.splice(myLibrary.indexOf(book), 1); // Remove the book object
            console.log(myLibrary);
            refreshLibrary(); // Refresh after deletion
        });

        let markAsRead = document.createElement("button");
        markAsRead.classList.add("markAsRead");
        markAsRead.textContent = "O";
        markAsRead.addEventListener("click", () => { // No need for closure
            book.readStatus = book.readStatus === "not read yet" ? "read" : "not read yet";
            console.log(book.readStatus);
            refreshLibrary();
        });

        cardContent.appendChild(title);
        cardContent.appendChild(author);
        cardContent.appendChild(noOfPages);
        cardContent.appendChild(readStatus);
        cardButtons.appendChild(deleteEntry);
        cardButtons.appendChild(markAsRead);
        card.appendChild(cardContent);
        card.appendChild(cardButtons);
        library.appendChild(card);
    }
}

function refreshLibrary() {
    clearLibrary();
    printLibrary();
}

// Example books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', false);
addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', '223', true);
addBookToLibrary('Dune', 'Frank Herbert', '896', false);
addBookToLibrary('The Three-Body Problem', 'Liu Cixin', '390', true);

printLibrary();

// Buttons
const showButton = document.querySelector("#openDialog");
const closeButton = document.querySelector("#closeDialog");
// "Add Book" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});
// "X" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});

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

console.log(myLibrary)