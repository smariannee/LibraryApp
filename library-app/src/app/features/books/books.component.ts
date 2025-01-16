import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from './services/book.service';
import { Book } from './models/book.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books: Book[];
  bookService = inject(BookService);

  constructor() {
    this.books = this.bookService.getBooks();
  }

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
