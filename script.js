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


//ADD BOOK ENTRY TO THE TABLE

let entry = document.getElementById("entry");
let row = 1;
let readStatus = "Not Read";
entry.addEventListener("click",addToTable);


function addToTable(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    if(document.getElementById('read').checked){
        readStatus = "Read";
    }

    if(!title || !author || !pages || !read ){
        alert ("Please make sure you've filled the form!");
        return
    }

    let table = document.getElementById("table");

    let newRow = table.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = title;
    cell2.innerHTML = author;
    cell3.innerHTML = pages;
    cell4.innerHTML = readStatus;

    row++;
}