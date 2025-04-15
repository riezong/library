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
		return (this.info =
			this.title +
			' by ' +
			this.author +
			', ' +
			this.noOfPages +
			', ' +
			this.readStatus);
	}
}

export default Book;
