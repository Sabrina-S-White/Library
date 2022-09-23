// Variables
let x = 0;

// Button functionality 

const newBtn = document.getElementById('newBtn');
const readBtn = document.getElementById('readBtn');
const closeBtn = document.getElementById('closePopup');

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