// Write a Javascript program to display the status (I.e. display book name, author name
//     & reading status) of books.Task is to display the following:
//     If the book is unread:
//     You still need to read '<book_name>' by <author_name>.
//     If the book is read:
//     Already read '<book_name>' by <author_name>

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
for (let i = 0; i < library.length; i++) {
    var book = library[i];
    if (book.readingStatus) {
        console.log(`Already read "${book.title}" by ${book.author}`);
    } else {
        console.log(`You still need to read ${book.title} by ${book.author}`);
    }
}
