import { inject, Injectable } from '@angular/core';
import { LoanDto } from '../models/dto/loan.dto';
import { Loan } from '../models/loan.model';
import { getToday } from '../../../core/utils/moment';
import { SaveLoanDto } from '../models/dto/save-loan.dto';
import { Student } from '../../students/models/student.model';
import { StudentService } from '../../students/services/student.service';
import { BookService } from '../../books/services/book.service';

@Injectable({
    providedIn: 'root'
})
export class LoanService {
    bookService = inject(BookService);
    studentService = inject(StudentService);

    protected loanDto: LoanDto[] = [
        {
            id: 1,
            folio: 'P-001',
            student: 'Marianne Santos',
            book: 'El Principito',
            startDate: '2021-07-01',
            endDate: '2021-07-15',
            status: true
        },
        {
            id: 2,
            folio: 'P-002',
            student: 'Jorge Garcia',
            book: 'El Alquimista',
            startDate: '2021-07-05',
            endDate: '2021-07-20',
            status: false
        },
        {
            id: 3,
            folio: 'P-003',
            student: 'Luisa Perez',
            book: 'Cien años de soledad',
            startDate: '2021-07-10',
            endDate: '2021-07-25',
            status: true
        },
        {
            id: 4,
            folio: 'P-004',
            student: 'Mariana Rodriguez',
            book: 'La Odisea',
            startDate: '2021-07-15',
            endDate: '2021-07-30',
            status: false
        },
        {
            id: 5,
            folio: 'P-005',
            student: 'Carlos Hernandez',
            book: 'La Iliada',
            startDate: '2021-07-20',
            endDate: '2021-08-04',
            status: true
        },
        {
            id: 6,
            folio: 'P-006',
            student: 'Ana Maria',
            book: 'El Perfume',
            startDate: '2021-07-25',
            endDate: '2021-08-09',
            status: true
        }
    ];

    protected loans: Loan[] = [
        {
            id: 1,
            folio: 'P-001',
            student: {
                id: 1,
                fullname: 'Marianne Santos',
                email: 'marianne@gmail.com',
                phone: '1234567890',
                grade: 10,
                status: true
            },
            book: {
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
            startDate: '2021-07-01',
            endDate: '2021-07-15',
            status: true,
            returnedDate: '2021-07-15'
        },
        {
            id: 2,
            folio: 'P-002',
            student: {
                id: 2,
                fullname: 'Jorge Garcia',
                email: 'jorge.garcia@gmail.com',
                phone: '5552345678',
                grade: 9,
                status: true
            },
            book: {
                id: 2,
                title: 'El Alquimista',
                author: 'Paulo Coelho',
                year: 1988,
                quantity: 15,
                available: 10,
                image: 'https://m.media-amazon.com/images/I/81QZ2G9Av3L._AC_UF1000,1000_QL80_.jpg',
                description: 'Una fábula espiritual sobre un pastor que busca un tesoro en las pirámides de Egipto.',
                pages: 208
            },
            startDate: '2021-07-05',
            endDate: '2021-07-20',
            status: false
        },
        {
            id: 3,
            folio: 'P-003',
            student: {
                id: 3,
                fullname: 'Luisa Perez',
                email: 'luisa.perez@gmail.com',
                phone: '5553456789',
                grade: 11,
                status: true
            },
            book: {
                id: 3,
                title: 'Cien años de soledad',
                author: 'Gabriel García Márquez',
                year: 1967,
                quantity: 12,
                available: 8,
                image: 'https://m.media-amazon.com/images/I/71YoFJSz3LL._AC_UF1000,1000_QL80_.jpg',
                description: 'Una saga familiar en el pueblo ficticio de Macondo, un clásico del realismo mágico.',
                pages: 417
            },
            startDate: '2021-07-10',
            endDate: '2021-07-25',
            status: true,
            returnedDate: '2021-07-25'
        },
        {
            id: 4,
            folio: 'P-004',
            student: {
                id: 4,
                fullname: 'Mariana Rodriguez',
                email: 'mariana.rodriguez@gmail.com',
                phone: '5554567890',
                grade: 8,
                status: true
            },
            book: {
                id: 4,
                title: 'La Odisea',
                author: 'Homero',
                year: -800,
                quantity: 5,
                available: 2,
                image: 'https://m.media-amazon.com/images/I/81ZDpIcPOAL._AC_UF1000,1000_QL80_.jpg',
                description: 'La épica historia de Odiseo y su arduo viaje de regreso a Ítaca.',
                pages: 400
            },
            startDate: '2021-07-15',
            endDate: '2021-07-30',
            status: false
        },
        {
            id: 5,
            folio: 'P-005',
            student: {
                id: 5,
                fullname: 'Carlos Hernandez',
                email: 'carlos.hernandez@gmail.com',
                phone: '5555678901',
                grade: 7,
                status: true
            },
            book: {
                id: 5,
                title: 'La Iliada',
                author: 'Homero',
                year: -750,
                quantity: 6,
                available: 3,
                image: 'https://m.media-amazon.com/images/I/71T9q+0zBhL._AC_UF1000,1000_QL80_.jpg',
                description: 'La narración épica de la guerra de Troya y los conflictos de Aquiles.',
                pages: 450
            },
            startDate: '2021-07-20',
            endDate: '2021-08-04',
            status: true,
            returnedDate: '2021-08-04'
        },
        {
            id: 6,
            folio: 'P-006',
            student: {
                id: 6,
                fullname: 'Ana Maria',
                email: 'ana.maria@gmail.com',
                phone: '5556789012',
                grade: 12,
                status: true
            },
            book: {
                id: 6,
                title: 'El Perfume',
                author: 'Patrick Süskind',
                year: 1985,
                quantity: 8,
                available: 5,
                image: 'https://m.media-amazon.com/images/I/71zA6eH5H5L._AC_UF1000,1000_QL80_.jpg',
                description: 'La obsesión de un joven con los aromas lo lleva a una serie de crímenes en busca del perfume perfecto.',
                pages: 310
            },
            startDate: '2021-07-25',
            endDate: '2021-08-09',
            status: true,
            returnedDate: '2021-08-09'
        }
    ]

    getloans(): LoanDto[] {
        return this.loanDto;
    }

    getLoanDetailsById(id: number): Loan | undefined {
        return this.loans.find((loan) => loan.id === id);
    }

    saveLoan(loan: SaveLoanDto): void {
        const id: number = this.loans.length + 1;
        const book = this.bookService.getBookDetailsById(loan.bookId)!;
        const student: Student = this.studentService.getStudentById(loan.studentId)!;

        const newLoan: Loan = {
            id,
            folio: `P-${id.toString().padStart(3, '0')}`,
            student: student,
            book: book,
            startDate: loan.startDate,
            endDate: loan.endDate,
            status: false
        };

        this.loans.unshift(newLoan);

        const newLoanDto: LoanDto = {
            id,
            folio: newLoan.folio,
            student: newLoan.student.fullname,
            book: newLoan.book.title,
            startDate: newLoan.startDate,
            endDate: newLoan.endDate,
            status: false
        };

        this.loanDto.unshift(newLoanDto);
    }

    returnBook(id: number): void {
        const loan = this.loans.find((loan) => loan.id === id);
        if (loan && !loan.status) {
            loan.status = true;
            loan.returnedDate = getToday();
        }
        
        const loanDto = this.loanDto.find((loan) => loan.id === id);
        if (loanDto) {
            loanDto.status = true;
            loanDto.endDate = getToday();
        }
    }
}
