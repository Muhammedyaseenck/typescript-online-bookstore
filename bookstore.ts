// ============================================================
// Online Bookstore - TypeScript Assignment
// ============================================================

// -------------------------------------------------------------
// 1. Book class
//    Represents a book sold in the store, with its core details.
// -------------------------------------------------------------
class Book {
  title: string;
  author: string;
  price: number;
  quantityAvailable: number;

  constructor(
    title: string,
    author: string,
    price: number,
    quantityAvailable: number
  ) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantityAvailable = quantityAvailable;
  }

  // Small helper so we get a readable line per book when we print the list
  describe(): string {
    return `"${this.title}" by ${this.author} - $${this.price.toFixed(
      2
    )} (${this.quantityAvailable} in stock)`;
  }
}

// -------------------------------------------------------------
// 2. BookData custom type
//    A lighter-weight shape for book info, e.g. used when
//    importing catalog data that may not include a publication year.
// -------------------------------------------------------------
type BookData = {
  title: string;
  author: string;
  publicationYear?: number; // optional field
};

// -------------------------------------------------------------
// 3. Build an array of Book objects, using both the Book class
//    and the BookData type as the source for each entry.
// -------------------------------------------------------------

// Some raw catalog data shaped as BookData (note: not every entry
// has a publicationYear, since the field is optional).
const catalogData: BookData[] = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", publicationYear: 1937 },
  { title: "1984", author: "George Orwell", publicationYear: 1949 },
  { title: "Dune", author: "Frank Herbert" }, // publicationYear omitted
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    publicationYear: 1999,
  },
];

// Prices and stock levels, kept separately to show that Book
// combines info from BookData with additional store-specific data.
const priceAndStock: { price: number; quantityAvailable: number }[] = [
  { price: 14.99, quantityAvailable: 12 },
  { price: 9.99, quantityAvailable: 5 },
  { price: 18.5, quantityAvailable: 0 },
  { price: 32.0, quantityAvailable: 8 },
];

// Convert the BookData entries into actual Book class instances.
const bookstoreInventory: Book[] = catalogData.map(
  (data: BookData, index: number) =>
    new Book(
      data.title,
      data.author,
        priceAndStock[index]!.price,
   priceAndStock[index]!.quantityAvailable
    )
);

// -------------------------------------------------------------
// 4. Display the array of books in the console.
// -------------------------------------------------------------
console.log("=== Bookstore Inventory ===");
bookstoreInventory.forEach((book: Book, index: number) => {
  console.log(`${index + 1}. ${book.describe()}`);
});

// Also log the raw objects, useful for inspecting the full structure.
console.log("\n=== Raw Book Objects ===");
console.log(bookstoreInventory);