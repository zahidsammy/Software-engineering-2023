// Creating a JSON data for a book
const book = {
    title: "Love in Different Paddles",
    description: "The book is about love",
    author: "Zahid",
    numberOfPages: 100
};

// Print each object property sepearetly 
console.log("Title:", book.title);
console.log("Description:", book.description);
console.log("Author:", book.author);
console.log("Number of Pages:", book.numberOfPages);

// Printing a whole book object
console.log("Book Object:", book);

// Updating the description of the book
book.description = "The book is about broken and unresolved love";

// Printing the updated description
console.log("Updated Description:", book.description);


