import { Injectable } from '@angular/core';
import { Book } from '../models/book.models';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    protected books: Book[] = [
        {
            id: 1,
            title: 'El Principito',
            author: 'Antoine de Saint-Exupéry',
            year: 1943,
            quantity: 10,
            available: 7,
            image: 'https://m.media-amazon.com/images/I/714Hvb52n-L._AC_UF1000,1000_QL80_.jpg',
            description: 'Un cuento filosófico sobre un pequeño príncipe que viaja entre planetas, explorando temas de amistad, amor y pérdida.',
            pages: 96
        },
        {
            id: 2,
            title: 'Cien Años de Soledad',
            author: 'Gabriel García Márquez',
            year: 1967,
            quantity: 15,
            available: 10,
            image: 'https://m.media-amazon.com/images/I/71YoFJSz3LL._AC_UF1000,1000_QL80_.jpg',
            description: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.',
            pages: 417
        },
        {
            id: 3,
            title: 'Don Quijote',
            author: 'Miguel de Cervantes',
            year: 1605,
            quantity: 5,
            available: 2,
            image: 'https://m.media-amazon.com/images/I/91CIwR3QU1L._UF894,1000_QL80_.jpg',
            description: 'Una sátira de las novelas de caballería que sigue las aventuras de Don Quijote y su fiel escudero Sancho Panza.',
            pages: 1072
        },
        {
            id: 4,
            title: '1984',
            author: 'George Orwell',
            year: 1949,
            quantity: 8,
            available: 0,
            image: 'https://m.media-amazon.com/images/I/91jHOlKEPwL._AC_UF894,1000_QL80_.jpg',
            description: 'Una novela distópica que presenta un futuro totalitario donde la libertad de pensamiento es controlada por el Gran Hermano.',
            pages: 328
        },
        {
            id: 5,
            title: 'Orgullo y Prejuicio',
            author: 'Jane Austen',
            year: 1813,
            quantity: 12,
            available: 9,
            image: 'https://m.media-amazon.com/images/I/71TutMCY1VL._AC_UF1000,1000_QL80_.jpg',
            description: 'Una historia romántica que aborda temas de clase social, prejuicio y amor a través de la relación entre Elizabeth Bennet y el Sr. Darcy.',
            pages: 279
        }
    ];

    getBooks(): Book[] {
        return this.books;
    }

    getBookDetailsById(id: number): Book | undefined {
        return this.books.find((book) => book.id === id);
    }

    addBook(book: Book): void {
        book.id = this.books.length + 1;
        this.books.unshift(book);
    }
}
