let books = [
    {name: "billy", autor: "Joanne Rowling"},
    {name: "gilly", autor: "Goanne Bowling"},
    {name: "milly", autor: "Aoanne Zowling"},
];

books.sort((a,b) => {
    const lastName1 = a.autor.split(" ")[1];
    const lastName2 = b.autor.split(" ")[1];
    return lastName1 < lastName2 ? -1 : 1
});


console.log(books);