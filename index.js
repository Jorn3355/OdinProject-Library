const addBtn = document.querySelector("#add-book")
const bookContainer = document.querySelector(".book-container")

const bookArray = [];

function Book(title="missing", author="missing", read=false) {
    this.Title = title
    this.Author = author
    this.Read = read
}

function addBook() {
    let newBook = new Book("Fujimoto", "Chainsaw-Man", true)
    let newCard = document.createElement("div")
    newCard.classList.add("book-Card")
    for(let prop in newBook){
        if(Object.prototype.hasOwnProperty.call(newBook, prop)){   
            let newItem = document.createElement("span")
            newItem.textContent = `${prop}: ${newBook[prop]}`
            newCard.appendChild(newItem)
        } else {
            
        }
    bookContainer.appendChild(newCard)
}}

addBtn.addEventListener("click", addBook)

