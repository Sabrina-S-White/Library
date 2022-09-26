// Variables
let x = 0;

// Button functionality 

const newBookBtn = document.getElementById('newBookBtn');
const newBtn = document.getElementById('newBtn');
const readBtn = document.getElementById('readBtn');
const unreadBtn = document.getElementById('unreadBtn');
const closeBtn = document.getElementById('closePopup');
const lightBtn = document.getElementById('lightTheme');
const darkBtn = document.getElementById('darkTheme');
const newBookForm = document.getElementById('newBookForm');

// Library objects and functions

let myLibrary = new Array;

class Book {
    constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
}

function newBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('read').checked;
    let newEntry = new Book(title, author, pages, isRead);
    myLibrary.push(newEntry);
}

function clearForm() {
    document.getElementById('title').innerHTML = '';
    document.getElementById('author').innerHTML = '';
    document.getElementById('pages').innerHTML = '';
    document.getElementById('read').setAttribute = 'checked'
}

newBookBtn.addEventListener('click', () => {
    console.log('clicked')
    newBook();
    for (i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
    newBookForm.reset();
    // createTile();
})

// function createTile(book) {
//     const tile = document.createElement('div');
//     const border = document.createElement('div');
//     const title = document.createElement('p');
//     const author = document.createElement('p');
//     const pages = document.createElement('p');
//     const buttonGroup = document.createElement('div');
//     const markRead = document.createElement('button');
//     const removeBook = document.createElement('button');

//     tile.classList.add('tile');
//     border.classList.add('tileBorder');
//     markRead.classList.add('tileButton');
//     removeBook.classList.add('tileButton');

//     title.textContent = `${book.title}`;
//     author.textContent = book.author;
//     pages.textContent = `${book.pages}`;
//     removeBook.textContent = 'Remove Book';

//     tile.appendChild(title);
//     tile.appendChild(author);
//     tile.appendChild(pages);
//     buttonGroup.appendChild(markRead);
//     buttonGroup.appendChild(removeBook);
//     tile.appendChild(buttonGroup);
//     tileHouse.appendChild(tile);
// }

// Mark as read effect

function removeReadBtn() {
    document.getElementById('readBtn').style.display = 'none';
    document.getElementById('unreadBtn').style.display = 'block';
    
};

function removeUnreadBtn() {
    document.getElementById('unreadBtn').style.display = 'none';
    document.getElementById('readBtn').style.display = 'block';
};

function readBackgroundColor() {
    let tiles = document.getElementsByClassName('tile');
    for (i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundColor = 'rgb(var(--read))';
    }
};

function unreadBackgroundColor() {
    let tiles = document.getElementsByClassName('tile');
    for (i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundColor = 'rgb(var(--queenPink)'
    }
}

// readBtn.addEventListener('click', () => {
//     removeReadBtn();
//     readBackgroundColor();
// });

// unreadBtn.addEventListener('click', () => {
//     removeUnreadBtn();
//     unreadBackgroundColor();
// })

// Theme functionality

function darkTheme() {
    let root = document.documentElement;

    document.getElementById('header').style.backgroundColor = 'rgb(var(--spaceCadet))';
    document.getElementById('footer').style.backgroundColor = 'rgb(var(--spaceCadet))';
    document.getElementById('main').style.backgroundColor = 'rgb(var(--blackCoral))';
    document.getElementById('border').style.borderColor = 'rgb(var(--silver))';
    document.getElementById('popupForm').style.backgroundColor = 'rgb(var(--spaceCadet))';
    root.style.color = 'rgb(var(--white))';
};

function tileBtnBorderDark() {
    let borders = document.getElementsByClassName('tileBorder');
    for (i = 0; i < borders.length; i++) {
        borders[i].style.borderColor = 'rgb(var(--silver))';
    }
};

function tileBackgroundColor() {
    let tiles = document.getElementsByClassName('tile');
    for (i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundColor = 'rgb(var(--silver))';
    }
}

darkBtn.addEventListener('click', () => {
    darkTheme();
    tileBtnBorderDark();
    tileBackgroundColor();
})
