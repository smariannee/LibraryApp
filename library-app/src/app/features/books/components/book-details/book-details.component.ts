import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.models';

@Component({
  selector: 'app-book-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bookService = inject(BookService);
  book: Book | undefined;

  constructor() {
    const bookId = +(this.route.snapshot.params['id']);
    this.book = this.bookService.getBookDetailsById(bookId);
  }
}
