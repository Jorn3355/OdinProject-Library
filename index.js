const addBtn = document.querySelector("#add-book")
const bookContainer = document.querySelector(".book-container")
const body = document.querySelector("body")
let popupSubmit = document.querySelector("#popup-submit")
let header = document.querySelector("header")
let main = document.querySelector("main")
let popup = document.querySelector(".popup")

const bookArray = [];

function Book(title="missing", author="missing", read=false) {
    this.Title = title
    this.Author = author
    this.Read = read
}


function popupForm() {
    header.classList.toggle("blur")
    main.classList.toggle("blur")
    popup.classList.toggle("active")
}

function addBook(title, author, read) {
    let newBook = new Book(title, author, read)
    if(bookArray.includes(newBook)){
        alert("The book is already in your collection")
    } else {
    let newCard = document.createElement("div")
    newCard.classList.add("book-Card")
    for(let prop in newBook){
        if(Object.prototype.hasOwnProperty.call(newBook, prop)){
            let newItem 
            if(prop === "Read") {
                newItem = document.createElement("button")
                newItem.classList.add("read")
                newItem.textContent = "Read"
                newItem.addEventListener("click", () => {
                    newItem.classList.toggle("not-read")
                })
            } else {
                newItem = document.createElement("span")
                newItem.textContent = `${prop}: ${newBook[prop]}`
            }
            newCard.appendChild(newItem)
        }
    bookArray.push[newBook]
    bookContainer.appendChild(newCard)
}
    let rmBtn = document.createElement("button")
    rmBtn.textContent = "Remove"
    rmBtn.classList.add("rm-btn")
    newCard.appendChild(rmBtn)
}}

addBtn.addEventListener("click", () => {
    popupForm()
    popupSubmit.addEventListener("click", () => {
        popupForm()
        addBook("Chain-Saw Man", "Tatsuki Fujimoto", true)
        Event.preventDefault()
    })
    let rmBtns = document.querySelectorAll(".rm-btn")
    rmBtns.forEach((item) => {
        item.addEventListener("click", (e) => {e.target.parentElement.remove()})
    })
})


