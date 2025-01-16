import { Injectable } from '@angular/core';
import { LoanDto } from '../models/dto/loan.dto';

@Injectable({
    providedIn: 'root'
})
export class LoanService {
    protected loans: LoanDto[] = [
        {
            id: 1,
            userId: 1,
            userFullName: 'Marianne Santos',
            bookId: 1,
            bookTitle: 'El Principito',
            startDate: '2021-07-01',
            endDate: '2021-07-15',
            returnedDate: '2021-07-15',
            status: true
        },
        {
            id: 2,
            userId: 2,
            userFullName: 'Jorge Garcia',
            bookId: 2,
            bookTitle: 'El Alquimista',
            startDate: '2021-07-05',
            endDate: '2021-07-20',
            status: false
        },
        {
            id: 3,
            userId: 3,
            userFullName: 'Luisa Perez',
            bookId: 3,
            bookTitle: 'Cien años de soledad',
            startDate: '2021-07-10',
            endDate: '2021-07-25',
            returnedDate: '2021-07-25',
            status: true
        },
        {
            id: 4,
            userId: 4,
            userFullName: 'Mariana Rodriguez',
            bookId: 4,
            bookTitle: 'La Odisea',
            startDate: '2021-07-15',
            endDate: '2021-07-30',
            status: false
        },
        {
            id: 5,
            userId: 5,
            userFullName: 'Carlos Hernandez',
            bookId: 5,
            bookTitle: 'La Iliada',
            startDate: '2021-07-20',
            endDate: '2021-08-04',
            returnedDate: '2021-08-04',
            status: true
        },
        {
            id: 6,
            userId: 6,
            userFullName: 'Ana Maria',
            bookId: 6,
            bookTitle: 'El Perfume',
            startDate: '2021-07-25',
            endDate: '2021-08-09',
            returnedDate: '2021-08-09',
            status: false
        }
    ];

    getloans(): LoanDto[] {
        return this.loans;
    }
}
