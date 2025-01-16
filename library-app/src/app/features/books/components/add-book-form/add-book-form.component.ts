import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-book-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.css'
})
export class AddBookFormComponent {
  router = inject(Router);
  bookService = inject(BookService);

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    year: new FormControl('2024', [Validators.required, Validators.min(0)]),
    quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
    image: new FormControl('', [Validators.required, Validators.pattern(/^(https?:\/\/).*/)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    pages: new FormControl(1, [Validators.required, Validators.min(1)])
  })

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.addBook({
        title: this.bookForm.value.title!,
        author: this.bookForm.value.author!,
        year: +this.bookForm.value.year!,
        quantity: this.bookForm.value.quantity!,
        available: this.bookForm.value.quantity!,
        image: this.bookForm.value.image!,
        description: this.bookForm.value.description!,
        pages: this.bookForm.value.pages!
      });
      alert('Libro registrado éxitosamente');
      this.router.navigate(['/books']);
      this.bookForm.reset();
    } else {
      alert('¡Ups! Algo salió mal. Por favor, verifica los datos ingresados');
    }
  }
}
