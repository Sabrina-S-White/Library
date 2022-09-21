// Button functionality 

const newBtn = document.getElementById('newBtn');
const readBtn = document.getElementById('readBtn');

// Library objects and functions

let myLibrary = [];

class Book {
    constructor(
        title = 'unknown',
        author = 'unknown',
        pages = '0',
        isRead = false
    ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}}


function addBookToLibrary() {

}

newBtn.addEventListener('click', () => {
    if (document.getElementById('popupForm').style.display == 'none') {
    document.getElementById('popupForm').style.display = 'flex';
    console.log('goooood');
    } else {
        document.getElementById('popupForm').style.display = 'none';
        console.log('baaaad');
        console.log(document.getElementById('popupForm').style.display)
    }
});