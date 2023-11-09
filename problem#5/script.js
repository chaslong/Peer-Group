class Bookshelf {
    constructor() {
    
    }

    addBook(book) {
        this.book = book
        return this.book
    }


}





const bookshelf = new Bookshelf(); 
bookshelf.addBook("The Great Gatsby"); 
bookshelf.addBook("To Kill a Mockingbird"); 
bookshelf.addBook("Pride and Prejudice"); 


// console.log(bookshelf.getTotalBooks()); // 3 
// bookshelf.removeBook("To Kill a Mockingbird"); 
// console.log(bookshelf.getTotalBooks()); // 2 

console.log(bookshelf);