import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoanService } from '../../services/loan.service';
import { StudentService } from '../../../students/services/student.service';
import { Student } from '../../../students/models/student.model';
import { Book } from '../../../books/models/book.model';
import { BookService } from '../../../books/services/book.service';
import { getNextDay, getToday, isEndDateValid } from '../../../../core/utils/moment';

const endDateValidator = (startDateControlName: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control.parent;
    if (!formGroup) return null;

    const startDate = formGroup.get(startDateControlName)?.value;
    const endDate = control.value;

    if (startDate && !isEndDateValid(startDate, endDate)) return { endDateBeforeStartDate: true };
    return null;
  }
}

@Component({
  selector: 'app-add-loan-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-loan-form.component.html',
  styleUrl: './add-loan-form.component.css'
})
export class AddLoanFormComponent {
  router = inject(Router);
  loanService = inject(LoanService);
  bookService = inject(BookService);
  studentService = inject(StudentService);

  route: ActivatedRoute = inject(ActivatedRoute);
  minDate: string;
  book: Book;
  students: Student[];

  constructor() {
    this.minDate = getToday();
    const bookId = +(this.route.snapshot.params['bookId']);
    this.book = this.bookService.getBookDetailsById(bookId)!;
    this.students = this.studentService.getActiveStudents();

    this.loanForm.get('startDate')?.valueChanges.subscribe(() => {
      this.loanForm.get('endDate')?.updateValueAndValidity();
    });
  }

  loanForm = new FormGroup({
    studentId: new FormControl(null, [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required, endDateValidator('startDate')]),
  });
  
  getMinEndDate(): string {
    const startDateValue = this.loanForm.get('startDate')?.value;
    if (startDateValue) return getNextDay(startDateValue);
    return this.minDate;
  }
  
  onSubmit() {
    if (this.loanForm.valid) {
      this.loanService.saveLoan({
        bookId: this.book.id!,
        studentId: +this.loanForm.value.studentId!,
        startDate: this.loanForm.value.startDate!,
        endDate: this.loanForm.value.endDate!,
      });
      alert('Préstamo realizado éxitosamente');
      this.router.navigate(['/loans']);
      this.loanForm.reset();
    } else {
      alert('¡Ups! Algo salió mal. Por favor, verifica los datos ingresados');
    }
  }
}
