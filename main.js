const Book = require('./Book');
const EBook = require('./EBook');

// Створення об'єктів класу Book
const book1 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1966);
const book2 = new Book("Лісова пісня", "Леся Українка", 1911);

// Виклик методу printInfo для об'єктів Book
book1.printInfo();
book2.printInfo();

console.log("\n");

// Створення об'єкта класу EBook
const ebook1 = new EBook("Кобзар", "Тарас Шевченко", 1840, "PDF");

// Виклик методу printInfo для об'єкта EBook
ebook1.printInfo();