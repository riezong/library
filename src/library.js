import Book from './book';

const myLibrary = [];

const addBookToLibrary = function (title, author, noOfPages, readStatus) {
	if (readStatus === true) {
		readStatus = 'read';
	} else {
		readStatus = 'not read yet';
	}
	noOfPages = noOfPages + ' pages';
	myLibrary.push(new Book(title, author, noOfPages, readStatus));
};

const clearLibrary = function () {
	const library = document.querySelector('.library');
	while (library.firstChild) {
		library.removeChild(library.lastChild);
	}
};

const printLibrary = function () {
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

	const library = document.querySelector('.library');

	// div for displaying library
	for (const book of myLibrary) {
		const card = document.createElement('div');
		card.classList.add('card');
		const cardContent = document.createElement('div');
		cardContent.classList.add('cardContent');
		const cardButtons = document.createElement('div');
		cardButtons.classList.add('cardButtons');

		let title = document.createElement('p');
		title.classList.add('title');
		title.textContent = book.title;

		let author = document.createElement('p');
		author.classList.add('author');
		author.textContent = book.author;

		let noOfPages = document.createElement('p');
		noOfPages.classList.add('noOfPages');
		noOfPages.textContent = book.noOfPages;

		let readStatus = document.createElement('p');
		readStatus.classList.add('readStatus');
		readStatus.textContent = book.readStatus;

		let deleteEntry = document.createElement('button');
		deleteEntry.classList.add('deleteEntry');
		deleteEntry.textContent = 'X';
		deleteEntry.addEventListener('click', () => {
			// No need for closure here
			card.remove();
			myLibrary.splice(myLibrary.indexOf(book), 1); // Remove the book object
			console.log(myLibrary);
			refreshLibrary(); // Refresh after deletion
		});

		let markAsRead = document.createElement('button');
		markAsRead.classList.add('markAsRead');
		markAsRead.textContent = 'O';
		markAsRead.addEventListener('click', () => {
			// No need for closure
			book.readStatus =
				book.readStatus === 'not read yet' ? 'read' : 'not read yet';
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
};

const refreshLibrary = function () {
	clearLibrary();
	printLibrary();
};

export {
	myLibrary,
	addBookToLibrary,
	clearLibrary,
	printLibrary,
	refreshLibrary,
};
