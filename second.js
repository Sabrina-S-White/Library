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
    constructor(id, title, author, pages, isRead) {
        this.id = id,
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.isRead = isRead
    }

    toggleRead() {
        if (this.isRead  == true) {
            this.isRead = false;
        } else if (this.isRead == false) {
            this.isRead = true;
        }
    }

    createTile() {
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
        removeBook.classList.add('removeBtns')

        title.textContent = this.title;
        author.textContent = 'Author: ' + this.author;
        pages.textContent = 'Page Count: ' + this.pages;
        removeBook.textContent = 'Remove Book'

        if (this.isRead == true) {
            markRead.textContent = 'Mark as Unread';
            markRead.classList.remove('tileButtonRead')
            markRead.classList.add('tileButtonUnread')
        } else if (this.isRead != true) {
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

    markRead() {
        markRead.addEventListener('click', () => {
            if (markRead.textContent == 'Mark as Unread') {
                markRead.textContent = 'Mark as Read';
                markRead.classList.remove('tileButtonUnread')
                markRead.classList.add('tileButtonRead');
            } else if (markRead.textContent == 'Mark as Read') {
                markRead.textContent = 'Mark as Unread';
                markRead.classList.remove('tileButtonRead')
                markRead.classList.add('tileButtonUnread')
            }
        })
    }

}

const maintainLibrary = (() => {
    let removeBtns = [];
    
    const checkForBtns = () => {
        removeBtns = document.querySelectorAll('.removeBtns')
    }
    const remove = () => {
        console.log(myLibrary[this.id])
        myLibrary.splice(myLibrary[this.id], 1);
        // this.tile.remove();
        // this.border.remove();
        // this.tileContent.remove();
        // this.title.remove();
        // this.author.remove();
        // this.pages.remove();
        // this.buttons.remove();
        // this.markRead.remove();
        // this.removeBook.remove();
    }

    return { remove, removeBtns, checkForBtns };
})();

newBook = function() {
    const id = myLibrary.length;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('read').checked;
    let newEntry = new Book(id, title, author, pages, isRead);
    myLibrary.push(newEntry);
}

const bookCreate = new Book(
    newBookBtn.addEventListener('click', () => {
        let i = myLibrary.length;
        this.newBook();
        myLibrary[i].createTile();
        maintainLibrary.removeBtns
        maintainLibrary.checkForBtns();
}));

for (const btn of maintainLibrary.removeBtns) {
    btn.addEventListener('click', () => {
        console.log('ok');
    })
}