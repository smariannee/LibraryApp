import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BooksComponent } from './features/books/books.component';
import { LoansComponent } from './features/loans/loans.component';
import { StudentsComponent } from './features/students/students.component';
import { BookDetailsComponent } from './features/books/book-details/book-details.component';

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
        path: 'books/details/:id',
        component: BookDetailsComponent,
        title: 'Book Details'
    },
    {
        path: 'students',
        component: StudentsComponent,
        title: 'Students'
    },
    {
        path: 'loans',
        component: LoansComponent,
        title: 'Loans'
    }
];
