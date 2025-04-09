class Book {
	constructor(title, author, noOfPages, readStatus) {
		// constructor
		this.title = title;
		this.author = author;
		this.noOfPages = noOfPages;
		this.readStatus = readStatus;
	}

	get info() {
		// getter method
		this.info = title + ' by ' + author + ', ' + noOfPages + ', ' + readStatus;
	}
}

export default Book;
