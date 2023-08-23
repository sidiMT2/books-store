import { firestore } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";



const books = [
    {
        "name": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publisher": "Scribner",
        "price": 12.99,
        "qty": 25
    },
    {
        "name": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publisher": "J. B. Lippincott & Co.",
        "price": 10.75,
        "qty": 18
    },
    {
        "name": "1984",
        "author": "George Orwell",
        "publisher": "Secker & Warburg",
        "price": 9.99,
        "qty": 30
    },
    {
        "name": "Pride and Prejudice",
        "author": "Jane Austen",
        "publisher": "T. Egerton, Whitehall",
        "price": 8.50,
        "qty": 22
    },
    {
        "name": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "publisher": "Little, Brown and Company",
        "price": 11.25,
        "qty": 15
    },
    {
        "name": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "publisher": "Scholastic",
        "price": 14.95,
        "qty": 40
    },
    {
        "name": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "publisher": "George Allen & Unwin",
        "price": 7.99,
        "qty": 28
    },
    {
        "name": "Lord of the Rings: The Fellowship of the Ring",
        "author": "J.R.R. Tolkien",
        "publisher": "George Allen & Unwin",
        "price": 13.50,
        "qty": 20
    },
    {
        "name": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "publisher": "Macmillan",
        "price": 6.75,
        "qty": 33
    },
    {
        "name": "Brave New World",
        "author": "Aldous Huxley",
        "publisher": "Chatto & Windus",
        "price": 9.25,
        "qty": 27
    },
    {
        "name": "The Da Vinci Code",
        "author": "Dan Brown",
        "publisher": "Doubleday",
        "price": 10.99,
        "qty": 12
    },
    {
        "name": "The Hunger Games",
        "author": "Suzanne Collins",
        "publisher": "Scholastic",
        "price": 8.99,
        "qty": 16
    },
    {
        "name": "The Alchemist",
        "author": "Paulo Coelho",
        "publisher": "HarperOne",
        "price": 11.00,
        "qty": 23
    },
    {
        "name": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "publisher": "Ballantine Books",
        "price": 7.50,
        "qty": 19
    },
    {
        "name": "The Kite Runner",
        "author": "Khaled Hosseini",
        "publisher": "Riverhead Books",
        "price": 12.49,
        "qty": 21
    },
    {
        "name": "Jane Eyre",
        "author": "Charlotte Bronte",
        "publisher": "Smith, Elder & Co.",
        "price": 9.95,
        "qty": 24
    },
    {
        "name": "Gone with the Wind",
        "author": "Margaret Mitchell",
        "publisher": "Macmillan",
        "price": 13.75,
        "qty": 14
    },
    {
        "name": "The Shining",
        "author": "Stephen King",
        "publisher": "Doubleday",
        "price": 10.25,
        "qty": 17
    },
    {
        "name": "Moby-Dick",
        "author": "Herman Melville",
        "publisher": "Harper & Brothers",
        "price": 11.99,
        "qty": 29
    },
    {
        "name": "Wuthering Heights",
        "author": "Emily Bronte",
        "publisher": "Thomas Cautley Newby",
        "price": 8.80,
        "qty": 31
    }
]


try {
    for (let book of books) {
        const docRef = await addDoc(collection(firestore, "books"), book);
        console.log("Document written with ID: ", docRef.id);

    }
} catch (e) {
    console.error("Error adding document: ", e);
}