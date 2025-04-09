import "./style.css";
import { addBookToLibrary, printLibrary, refreshLibrary } from './library';

// Example books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', false);
addBookToLibrary(
	'Harry Potter and the Chamber of Secrets',
	'J.K. Rowling',
	'223',
	true
);
addBookToLibrary('Dune', 'Frank Herbert', '896', false);
addBookToLibrary('The Three-Body Problem', 'Liu Cixin', '390', true);

printLibrary();

// Buttons
const showButton = document.querySelector('#openDialog');
const closeButton = document.querySelector('#closeDialog');
// "Add Book" button opens the dialog modally
showButton.addEventListener('click', () => {
	dialog.showModal();
});
// "X" button closes the dialog
closeButton.addEventListener('click', () => {
	dialog.close();
});

// Get a reference to the form element
const form = document.getElementById('bookForm');
// Add an event listener for the submit event
form.addEventListener('submit', function (event) {
	// Get the values of the form elements
	addBookToLibrary(
		form.elements.title.value,
		form.elements.author.value,
		form.elements.noOfPages.value,
		form.elements.readStatus.checked
	);
	form.reset();
	refreshLibrary();
	dialog.close();
	event.preventDefault();
});

console.log(myLibrary);
