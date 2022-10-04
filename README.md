# Library
Thoughts on refactoring: 
    . I want to make everything update visually based off of the actual data stored, not as a byproduct of an event happening. So when isRead is toggled, I want the UI change to occur because of that value toggling, not as a separate part of the function that is updating the value running. 


1. How to refactor this project to use Classes 
    a. Create a Book class that has {title, author, pages, isRead} as its constructor values. 
    b. In that class create the following methods: 
        DONE - Mark as read: toggle the isRead value. 

    c. Create a IIFE function that makes the cards to display the items in myLibrary. 
        - A function that clears the card div. 
        - A function that creates a card for each element in myLibrary. 
        - Make this run every time "Add to Library" or "Remove Book" is clicked.

    d. Create a IIFE that changes the style of individual cards when isRead is toggled. 
        - This will be called when isRead button is clicked. It will check myLibrary to see what the value of isRead is, then update the UI accordingly. 

    e. Create a Remove from library function: remove the object selected from the myLibrary array. 
