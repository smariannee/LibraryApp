import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books = [
    { id: 1, title: 'El Principito', author: 'Antoine de Saint-Exupéry', image: 'https://m.media-amazon.com/images/I/714Hvb52n-L._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', image: 'https://m.media-amazon.com/images/I/71YoFJSz3LL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, title: 'Don Quijote', author: 'Miguel de Cervantes', image: 'https://m.media-amazon.com/images/I/91CIwR3QU1L._UF894,1000_QL80_.jpg' },
    { id: 4, title: '1984', author: 'George Orwell', image: 'https://m.media-amazon.com/images/I/91jHOlKEPwL._AC_UF894,1000_QL80_.jpg' },
    { id: 5, title: 'Orgullo y Prejuicio', author: 'Jane Austen', image: 'https://m.media-amazon.com/images/I/71TutMCY1VL._AC_UF1000,1000_QL80_.jpg' },
  ];

  searchQuery = '';
  currentPage = 1;
  booksPerPage = 4;

  get filteredBooks() {
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get paginatedBooks() {
    const startIndex = (this.currentPage - 1) * this.booksPerPage;
    const endIndex = startIndex + this.booksPerPage;
    return this.filteredBooks.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredBooks.length / this.booksPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
