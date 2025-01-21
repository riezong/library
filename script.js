function Book(title, author, noOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
    this.info = title + " by " + author + ", " + noOfPages + ", " + readStatus;
  }
  
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
  console.log(theHobbit.info); // 'steve'
  