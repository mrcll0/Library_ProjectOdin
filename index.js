let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let submitBtn = document.getElementById("submitBtn");

const myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false
    }
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'Read' : 'Not Read'}`;
}

function addBookToLibrary() {
    // Verificar se todos os campos estão preenchidos
    if (title.value && author.value && pages.value) {
        const newBook = new Book(title.value, author.value, pages.value);
        myLibrary.push(newBook);
        renderLibrary();
        title.value = "";
        author.value = "";
        pages.value = "";
    } else {
        alert("Por favor, preencha todos os campos antes de adicionar o livro.");
    }
}

function renderLibrary() {
    const tableBody = document.getElementById("libraryTableBody");
    tableBody.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const row = tableBody.insertRow();
        const titleCell = row.insertCell(0);
        const authorCell = row.insertCell(1);
        const pagesCell = row.insertCell(2);
        const readCell = row.insertCell(3);

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        pagesCell.textContent = book.pages;
        readCell.textContent = book.read ? "Read" : "Not Read";

        const toggleReadCell = row.insertCell(4);
        const toggleReadButton = document.createElement("button");
        toggleReadButton.textContent = "Toggle Read";
        toggleReadButton.addEventListener("click", () => toggleReadStatus(index));
        toggleReadCell.appendChild(toggleReadButton);
    });
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    renderLibrary();
}

// Chame a função renderLibrary para inicializar a tabela
renderLibrary();
