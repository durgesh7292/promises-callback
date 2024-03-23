const books = [
  {
    title: "the great gatsby",
    author: "f.scott fitzgrald",
    year: 1925,
  },
  {
    title: "to kill a mockingbird ",
    author: "harper lee",
    year: 1960,
  },
  {
    title: "who are you? ",
    author: "george orwell",
    year: 1949,
  },
  {
    title: "pride and prejuidce ",
    author: "jane austen",
    year: 1813,
  },
];
function logTitles(titles) {
  titles.sort();
  console.log(titles.join(","));
}
function extractTitles(books, callback) {
  const titles = books.map((book) => book.title);
  callback(titles);
}
extractTitles(books, logTitles);
