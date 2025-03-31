class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author= author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library{
    constructor(name) {
    this.name = name;
    this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find((book) => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex((book) => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        }
        return null;
    }
}

let myLibrary = new Library("На заваленке");
let book1 = new NovelBook("В.Войнович", "Приключения Ивана Чонкина", 1989, 300);
myLibrary.addBook(book1);
let book2 = new FantasticBook("В.Пелевин", "Жизнь насекомых", 1991, 400);
myLibrary.addBook(book2);
let book3 = new NovelBook("Г.Гессе", "Демиан", 1919, 500);
myLibrary.addBook(book3);
console.log(myLibrary.findBookBy("releaseDate", 1919));
console.log(myLibrary.giveBookByName("Жизнь насекомых"));
book2.state = 20;
myLibrary.addBook(book2);
// debugger;
console.log("Книга не была принята в библиотеку", myLibrary);
book2.state = 120;
myLibrary.addBook(book2);
console.log("Книга починена и была принята в библиотеку", myLibrary);