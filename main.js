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
const tileHouse = document.getElementById('tileHouse')

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

Book.prototype.toggleRead = function() {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].isRead) {
            markRead.textContent = 'Mark as Unread';
            markRead.classList.remove('tileButtonRead');
            markRead.classList.add('tileButtonRead')
        } else if (myLibrary[i].isRead == false) {
            markRead.textContent = 'Mark as Read';
            markRead.classList.remove('tileButtonRead');
            markRead.classList.add('tileButtonUnread');
        }
}}

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
    newBook();
    newBookForm.reset();
    clearTileHouse();
    addTile();
})

function clearTileHouse() {
    tileHouse.innerHTML = '';
}

function addTile() {
    for (i = 0; i < myLibrary.length; i++) {
        const tile = document.createElement('div');
        const border = document.createElement('div');
        const tileContent = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p')
        const buttons = document.createElement('div');
        const markRead = document.createElement('button');
        const removeBook = document.createElement('button');

        tile.classList.add('tile');
        border.classList.add('tileBorder');
        tileContent.classList.add('tileContents');
        buttons.classList.add('tileButtonDiv');
        markRead.classList.add('tileButton');
        markRead.classList.add('tileButtonRead');
        markRead.classList.add('tileBtnList');
        removeBook.classList.add('tileButton');
    
        title.textContent = myLibrary[i].title;
        author.textContent = 'Author: ' + myLibrary[i].author;
        pages.textContent = 'Page Count: ' + myLibrary[i].pages;
        removeBook.textContent = 'Remove Book'

        if (myLibrary[i].isRead == true) {
            markRead.textContent = 'Mark as Unread';
            markRead.classList.remove('tileButtonRead')
            markRead.classList.add('tileButtonUnread')
        } else if (myLibrary[i].isRead != true) {
            markRead.textContent = 'Mark as Read';
            markRead.classList.remove('tileButtonUnread')
            markRead.classList.add('tileButtonRead');
        }

        tile.appendChild(border);
        border.appendChild(tileContent);
        tileContent.appendChild(title);
        tileContent.appendChild(author);
        tileContent.appendChild(pages);
        tileContent.appendChild(buttons);
        buttons.appendChild(markRead);
        buttons.appendChild(removeBook);
        tileHouse.appendChild(tile);
    }
}


// Mark as read effect


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
});
