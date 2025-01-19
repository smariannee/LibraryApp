import { Book } from "../../books/models/book.model";
import { Student } from "../../students/models/student.model";

export interface Loan {
    id?: number;
    folio: string;
    book: Book;
    student: Student;
    startDate: string;
    endDate: string;
    status: boolean;
    returnedDate?: string;
}