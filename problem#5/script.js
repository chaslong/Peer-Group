class Bookshelf {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getTotalBooks(){
        return this.books.length
    }
    removeBook(book) {
        const index = this.books.indexOf(book);
        if(index !== -1) {
            this.books.splice(index, 1);
        }
    }

}


const bookshelf = new Bookshelf(); 
bookshelf.addBook("The Great Gatsby"); 
bookshelf.addBook("To Kill a Mockingbird"); 
bookshelf.addBook("Pride and Prejudice"); 


console.log(bookshelf.getTotalBooks()); // 3 
bookshelf.removeBook("To Kill a Mockingbird"); 
console.log(bookshelf.getTotalBooks()); // 2 

// console.log(bookshelf);