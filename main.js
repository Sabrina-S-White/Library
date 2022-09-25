// Variables
let x = 0;

// Button functionality 

const newBtn = document.getElementById('newBtn');
const readBtn = document.getElementById('readBtn');
const unreadBtn = document.getElementById('unreadBtn');
const closeBtn = document.getElementById('closePopup');
const lightBtn = document.getElementById('lightTheme');
const darkBtn = document.getElementById('darkTheme');

// Library objects and functions

let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}}


function addBookToLibrary() {

}

// New Book Popup

function displayPopup() {
    document.getElementById('popupForm').style.display = 'flex';
};

function removePopup() {
    document.getElementById('popupForm').style.display = 'none';
};

function pageMask() {
    document.getElementById('pageMask').style.position = 'fixed';
};

function removePageMask() {
    document.getElementById('pageMask').style.position = 'none';
};

newBtn.addEventListener('click', () => {
        displayPopup();
        pageMask();
        x++;
});

closeBtn.addEventListener('click', () => {
    removePopup();
    removePageMask();
    x--;
})

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

readBtn.addEventListener('click', () => {
    removeReadBtn();
    readBackgroundColor();
});

unreadBtn.addEventListener('click', () => {
    removeUnreadBtn();
    unreadBackgroundColor();
})

// Theme functionality

function darkTheme() {
    let root = document.documentElement;

    document.getElementById('header').style.backgroundColor = 'rgb(var(--spaceCadet))';
    document.getElementById('footer').style.backgroundColor = 'rgb(var(--spaceCadet))';
    document.getElementById('main').style.backgroundColor = 'rgb(var(--blackCoral))';
    // document.getElementById('tileBorder').style.borderColor = 'rgb(var(--silver))';
    document.getElementById('border').style.borderColor = 'rgb(var(--silver))';
    document.getElementById('popupForm').style.backgroundColor = 'rgb(var(--spaceCadet))';
    root.style.color = 'rgb(var(--white))';
}

darkBtn.addEventListener('click', () => {
    darkTheme();
})
