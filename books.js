const books = [
  { title: "astronaut", authorName: "john jones", releaseYear: 2021 },
  { title: "main", authorName: "togi", releaseYear: 2023 },
  { title: "myg", authorName: "messi", releaseYear: 1937 }
];

function sortByYear(book, book1) {
  if (book.releaseYear < book1.releaseYear) return -1;
  if (book.releaseYear > book1.releaseYear) return 1;
  if (book.releaseYear === book1.releaseYear) return 0;
}

const filteredBooks = books.filter(year => year.releaseYear <= 1950);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);