import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BooksComponent } from './features/books/books.component';
import { LoansComponent } from './features/loans/loans.component';
import { StudentsComponent } from './features/students/students.component';
import { BookDetailsComponent } from './features/books/components/book-details/book-details.component';
import { AddBookFormComponent } from './features/books/components/add-book-form/add-book-form.component';
import { UpdateBookFormComponent } from './features/books/components/update-book-form/update-book-form.component';
import { AddStudentFormComponent } from './features/students/components/add-student-form/add-student-form.component';
import { UpdateStudentFormComponent } from './features/students/components/update-student-form/update-student-form.component';
import { LoanDetailsComponent } from './features/loans/components/loan-details/loan-details.component';
import { AddLoanFormComponent } from './features/loans/components/add-loan-form/add-loan-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'books',
        component: BooksComponent,
        title: 'Books'
    },
    {
        path: 'books/form',
        component: AddBookFormComponent,
        title: 'New Book'
    },
    {
        path: 'books/details/:id',
        component: BookDetailsComponent,
        title: 'Book Details'
    },
    {
        path: 'books/update/:id',
        component: UpdateBookFormComponent,
        title: 'Update Book'
    },
    {
        path: 'students',
        component: StudentsComponent,
        title: 'Students'
    },
    {
        path: 'students/form',
        component: AddStudentFormComponent,
        title: 'New Book'
    },
    {
        path: 'students/update/:id',
        component: UpdateStudentFormComponent,
        title: 'Update Student'
    },
    {
        path: 'loans',
        component: LoansComponent,
        title: 'Loans'
    },
    {
        path: 'loans/form/:bookId',
        component: AddLoanFormComponent,
        title: 'New Loan'
    },
    {
        path: 'loans/details/:id',
        component: LoanDetailsComponent,
        title: 'Loan Details'
    }
];
