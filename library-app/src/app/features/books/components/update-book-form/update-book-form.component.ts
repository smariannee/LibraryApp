import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { showConfirmationQuestion, showSuccessToast } from '../../../../core/utils/sweet-alert-functions';

@Component({
  selector: 'app-update-book-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './update-book-form.component.html',
  styleUrl: './update-book-form.component.css'
})
export class UpdateBookFormComponent {
  bookService = inject(BookService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  bookForm!: FormGroup;
  bookId!: number;

  ngOnInit(): void {
    this.bookId = +this.route.snapshot.paramMap.get('id')!;
    const book = this.bookService.getBookDetailsById(this.bookId);

    if (!book) {
      alert('Libro no encontrado');
      this.router.navigate(['/books']);
      return;
    }

    this.bookForm = new FormGroup({
      title: new FormControl(book.title, [Validators.required, Validators.minLength(3)]),
      author: new FormControl(book.author, [Validators.required, Validators.minLength(3)]),
      year: new FormControl(book.year, [Validators.required, Validators.min(0)]),
      quantity: new FormControl(book.quantity, [Validators.required, Validators.min(1)]),
      image: new FormControl(book.image, [Validators.required, Validators.pattern(/^(https?:\/\/).*/)]),
      description: new FormControl(book.description, [Validators.required, Validators.minLength(10)]),
      pages: new FormControl(book.pages, [Validators.required, Validators.min(1)])
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      showConfirmationQuestion(
        '¿Actualizar libro?',
        '¿Estás seguro de que deseas actualizar este libro?',
        'Sí, actualizar',
        'Cancelar',
        () => {
          this.bookService.updateBook({
            id: this.bookId,
            title: this.bookForm.value.title!,
            author: this.bookForm.value.author!,
            year: +this.bookForm.value.year!,
            quantity: this.bookForm.value.quantity!,
            available: this.bookForm.value.quantity!,
            image: this.bookForm.value.image!,
            description: this.bookForm.value.description!,
            pages: this.bookForm.value.pages!
          });

          showSuccessToast(
            'Libro actualizado exitosamente',
            () => {
              this.router.navigate(['/books']);
              this.bookForm.reset();
            }
          );
        }
      )
    }
  }
}
