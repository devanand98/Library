/*POPUP SCRIPT*/
document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display="flex";
})

document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none";
})




/* LIBRARY SCRIPT*/
let myLibrary = [];

function Book(title, author, pages, read, ){
    this.title = title;
    this.author = author;
    this.pages=pages;
    this.read=read; 
    this.info = function(){
        return title + author + pages+ read;
    }
}

//Function for adding new book to the array

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}