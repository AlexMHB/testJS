class Library {

    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }

    getBookByTitle(title) {
        return this.books.find(e => e.title === title);
    }

    listBooks() {
        return this.books;
    }


    removeBook(book) {
        this.books = this.books.filter((e) => e !== book);
    }
    

    removeBookByTitle(title) {
        let bookToRemove = this.getBookByTitle(title);
        if(!bookToRemove) {
            //throw new Error(`Book with title: "${title}" not found`); 
            console.log(`Book with title: "${title}" not found`);
        } else {
            this.removeBook(bookToRemove)
        }
    }

    getBooksByYearIn(fromYear, toYear) {
        return this.books.filter((e) => e.year >= fromYear && e.year <= toYear ); 
    }

    removeBooksByYearIn(fromYear, toYear) {
        let booksToRemove = this.getBooksByYearIn(fromYear, toYear);
        booksToRemove.forEach((book) => this.removeBook(book) );
    }

}

const myLibrary = new Library();
myLibrary.addBook({ title: 'First book', author: 'first', year: 2020 });
myLibrary.addBook({ title: 'Second book', author: 'second', year: 2021 });
myLibrary.addBook({ title: 'Third book', author: 'third', year: 2022 });

//console.log(myLibrary.listBooks());

//console.log(myLibrary.getBookByTitle('First book'));
//console.log(myLibrary.getBookByTitle('bla-bla'));

myLibrary.removeBookByTitle('bla-bla');

//myLibrary.removeBookByTitle('Second book');
//console.log(myLibrary.listBooks())
myLibrary.removeBooksByYearIn(2021, 2025)
console.log(myLibrary.listBooks())



