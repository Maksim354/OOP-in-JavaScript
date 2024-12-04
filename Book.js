class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }
}

module.exports = Book;
