function createBook(selector, titleName, authorName, isbn) {
    let booksGenerator = (function booksGenerator() {
        let id = 1;

        return function (selector, titleName, authorName, isbn) {
            let container = $(selector);
            let divBook = $('<div>');
            divBook.attr('id', `book${id++}`);

            divBook.append($(`<p class="title">${titleName}</p>`));
            divBook.append($(`<p class="author">${authorName}</p>`));
            divBook.append($(`<p class="isbn">${isbn}</p>`));

            divBook.append($('<button>Select</button>').on('click', () => divBook.css('border', '2px solid blue')));

            divBook.append($('<button>Deselect</button>').on('click', () => divBook.css('border', 'none')));

            container.append(divBook);
        }
    }());

    booksGenerator(selector, titleName, authorName, isbn);
}

