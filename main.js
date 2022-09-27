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
    toggleRead() {
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
    }
    }
};

newBook = function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('read').checked;
    let newEntry = new Book(title, author, pages, isRead);
    myLibrary.push(newEntry);
    setData();
}

clearForm = function() {
    document.getElementById('title').innerHTML = '';
    document.getElementById('author').innerHTML = '';
    document.getElementById('pages').innerHTML = '';
    document.getElementById('read').setAttribute = 'checked'
}

clearTileHouse = function() {
    tileHouse.innerHTML = '';
}

addTile = function(item) {
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

        removeBook.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(item), 1);
            setData();
            
        })

        tile.appendChild(border);
        border.appendChild(tileContent);
        tileContent.appendChild(title);
        tileContent.appendChild(author);
        tileContent.appendChild(pages);
        tileContent.appendChild(buttons);
        buttons.appendChild(markRead);
        buttons.appendChild(removeBook);
        tileHouse.appendChild(tile);

        markRead.addEventListener('click', () => {
            if (markRead.textContent == 'Mark as Unread') {
                markRead.textContent = 'Mark as Read';
                markRead.classList.remove('tileButtonUnread')
                markRead.classList.add('tileButtonRead');
                setData();
            } else if (markRead.textContent == 'Mark as Read') {
                markRead.textContent = 'Mark as Unread';
                markRead.classList.remove('tileButtonRead')
                markRead.classList.add('tileButtonUnread')
                setData();
            }
        });
}};

const bookCreate = new Book(
    newBookBtn.addEventListener('click', () => {
        this.newBook();
        newBookForm.reset();
        clearTileHouse();
        addTile();
}));

// Theme functionality

function darkTheme() {
    let root = document.documentElement;

    document.getElementById('header').style.backgroundColor = 'rgb(var(--spaceCadet))';
    document.getElementById('footer').style.backgroundColor = 'rgb(var(--spaceCadet))';
    document.getElementById('main').style.backgroundColor = 'rgb(var(--blackCoral))';
    root.style.color = 'rgb(var(--white))';
    
};

function tileBtnBorderDark() {
    let borders = document.getElementsByClassName('tileBorder');
    for (i = 0; i < borders.length; i++) {
        borders[i].style.borderColor = 'rgb(var(--white))';
    }
};

function tileBackgroundColor() {
    let tiles = document.getElementsByClassName('tile');
    for (i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundColor = 'rgb(var(--darkGrey))';
    }
}

darkBtn.addEventListener('click', () => {
    darkTheme();
    tileBtnBorderDark();
    tileBackgroundColor();
});

function lightTheme() {
    let root = document.documentElement;

    document.getElementById('header').style.backgroundColor = 'rgb(var(--paleCerulean))';
    document.getElementById('footer').style.backgroundColor = 'rgb(var(--paleCerulean))';
    document.getElementById('main').style.backgroundColor = 'rgb(var(--aliceBlue))';
    root.style.color = 'rgb(var(--text))';
}

function tileBtnBorderLight() {
    let borders = document.getElementsByClassName('tileBorder');
    for (i = 0; i < borders.length; i++) {
        borders[i].style.borderColor = 'rgb(var(--text))';
    }
};

function tileBackgroundColorLight() {
    let tiles = document.getElementsByClassName('tile');
    for (i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundColor = 'lightsteelblue';
    }
}

lightBtn.addEventListener('click', () => {
    lightTheme();
    tileBtnBorderLight();
    tileBackgroundColorLight();
})

// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}