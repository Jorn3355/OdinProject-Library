const addBtn = document.querySelector("#add-book")
const bookContainer = document.querySelector(".book-container")
const body = document.querySelector("body")

const bookArray = [];

function Book(title="missing", author="missing", read=false) {
    this.Title = title
    this.Author = author
    this.Read = read
}


function popupForm() {
    
}

function addBook() {
    let newBook = new Book("Chain-Saw Man", "Fujimoto", true)
    let newCard = document.createElement("div")
    newCard.classList.add("book-Card")
    for(let prop in newBook){
        if(Object.prototype.hasOwnProperty.call(newBook, prop)){
            let newItem 
            if(prop === "Read") {
                newItem = document.createElement("div")
                newItem.classList.add("read")
                newItem.textContent = "Read"
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
}

addBtn.addEventListener("click", () => {
    addBook();
    let rmBtns = document.querySelectorAll(".rm-btn")
    rmBtns.forEach((item) => {
        item.addEventListener("click", (e) => {e.target.parentElement.remove()})
    })
})



