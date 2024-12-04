const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`);
    }
}

module.exports = EBook;
