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
    for (i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
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

        tile.classList.add('tile');
        border.classList.add('tileBorder');
        tileContent.classList.add('tileContents');
    
        title.textContent = myLibrary[i].title;
        author.textContent = 'Author: ' + myLibrary[i].author;
        pages.textContent = 'Page Count: ' + myLibrary[i].pages;

        tile.appendChild(border);
        border.appendChild(tileContent);
        tileContent.appendChild(title);
        tileContent.appendChild(author);
        tileContent.appendChild(pages);
        tileHouse.appendChild(tile);

    }
}

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
