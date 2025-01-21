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
    for (const book of myLibrary) {
        console.log(book.info);        
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
addBookToLibrary(theHobbit);

const harryPotter = new Book('Harry Potter 1', 'J.K. Rowling', '223 pages', 'read');
addBookToLibrary(harryPotter);

displayLibrary();