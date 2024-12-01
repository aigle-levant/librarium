//switch between modes
let modeBtn = document.querySelector('.mode');
let body = document.body;

modeBtn.addEventListener('click', changeMode);

function changeMode()
{
    if (body.classList.contains('light-mode'))
    {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
    else
    {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

//common class for books
class book
{
    constructor
    (
        title = "Unknown",
        author = "Anonymous",
        totalPages = 0,
        pagesRead = 0,
        isRead = false
    )
    {
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.pagesRead = pagesRead;
        this.isRead = isRead;
    }
}

let finishedBtn = document.querySelector('.read');
let deleteBtn = document.querySelector('.delete');

//pop-up to add books
let addBookBtn = document.querySelector('.add-book');
let popUp = document.querySelector('.pop-up');

addBookBtn.addEventListener('click', openPopUp);

function openPopUp()
{
    popUp.classList.remove('hide');
    popUp.classList.add('show');
    addBook();
}
//if click elsewhere, close form
window.addEventListener('click', (e) => 
{
    if (!(popUp.contains(e.target)))
    {
        closePopUp();
    }
});


//add books
let content = document.querySelector('.books-place');
let bookContainer = document.querySelector('.sample-book');
let title = document.querySelector('.book-title');
let author = document.querySelector('.author');
let textProgress = document.querySelector('.progress');
let formSubmitBtn = document.querySelector('.form-submit');

function addBook()
{
    let bookContainer = document.createElement('div');
    let bookDesc = document.createElement('div');
    let bookTitle = document.createElement('h2');
    let bookAuthor = document.createElement('h3');
    let bookReadProgress = document.createElement('p');
    let bookBtnContainer = document.createElement('div');
    let bookFinishedBtn = document.createElement('button');
    let bookDeleteBtn = document.createElement('button');

    bookContainer.classList.add('sample-book');
    bookDesc.classList.add('description');
    bookTitle.classList.add('text', 'heading', 'book-title');
    bookAuthor.classList.add('text', 'sub-heading', 'author');
    bookReadProgress.classList.add('text', 'progress');
    bookBtnContainer.classList.add('action-btns');
    bookFinishedBtn.classList.add('btn', 'read');
    bookDeleteBtn.classList.add('btn', 'delete');

    content.appendChild(bookContainer);
    bookContainer.appendChild(bookDesc);
    bookDesc.appendChild(bookTitle);
    bookDesc.appendChild(bookAuthor);
    bookContainer.appendChild(bookReadProgress);
    bookContainer.appendChild(bookBtnContainer);
    bookBtnContainer.appendChild(bookFinishedBtn);
    bookBtnContainer.appendChild(bookDeleteBtn);

    formSubmitBtn.addEventListener('click', closePopUp);
}

function closePopUp()
{
    popUp.classList.remove('show');
    popUp.classList.add('hide');
}
