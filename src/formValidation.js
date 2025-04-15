const formValidation = function () {
	const form = document.getElementById('bookForm');
	const bookTitle = document.getElementById('title');
	const titleError = document.querySelector('#title + span.error');
	const bookAuthor = document.getElementById('author');
	const authorError = document.querySelector('#author + span.error');
	const noOfPages = document.getElementById('noOfPages');
	const pageError = document.querySelector('#noOfPages + span.error');

	bookTitle.addEventListener('input', (event) => {
		if (bookTitle.validity.valid) {
			titleError.textContent = ''; // Remove the message content
			titleError.className = 'error'; // Removes the `active` class
		} else {
			// If there is still an error, show the correct error
			showError();
		}
	});

	bookAuthor.addEventListener('input', (event) => {
		if (bookAuthor.validity.valid) {
			authorError.textContent = ''; // Remove the message content
			authorError.className = 'error'; // Removes the `active` class
		} else {
			// If there is still an error, show the correct error
			showError();
		}
	});

	noOfPages.addEventListener('input', (event) => {
		if (noOfPages.validity.valid) {
			pageError.textContent = ''; // Remove the message content
			pageError.className = 'error'; // Removes the `active` class
		} else {
			// If there is still an error, show the correct error
			showError();
		}
	});

	form.addEventListener('submit', (event) => {
		// if the email field is invalid
		if (!bookTitle.validity.valid) {
			// display an appropriate error message
			showError();
			// prevent form submission
			event.preventDefault();
		}
	});

	function showError() {
		if (bookTitle.validity.valueMissing) {
			// If empty
			titleError.textContent = 'You need to enter an email address.';
		} else if (bookTitle.validity.typeMismatch) {
			// If it's not an email address,
			titleError.textContent = 'Entered value needs to be an email address.';
		} else if (bookTitle.validity.tooShort) {
			// If the value is too short,
			titleError.textContent = `Title should be at least ${bookTitle.minLength} characters; you entered ${bookTitle.value.length}.`;
		}
		// Add the `active` class
		titleError.className = 'error active';
	}
};

export default formValidation;
