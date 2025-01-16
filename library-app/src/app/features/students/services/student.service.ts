import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    protected students: Student[] = [
        {
            id: 1,
            fullname: 'Marianne Santos',
            email: 'marianne@gmail.com',
            phone: '1234567890',
            grade: 10,
            status: true
        },
        {
            id: 2,
            fullname: 'Sofía García',
            email: 'sofia@gmail.com',
            phone: '1234567890',
            grade: 9,
            status: false
        },
        {
            id: 3,
            fullname: 'Juan Pérez',
            email: 'juan.perez@example.com',
            phone: '5551234567',
            grade: 8,
            status: true
        },
        {
            id: 4,
            fullname: 'Ana López',
            email: 'ana.lopez@example.com',
            phone: '5559876543',
            grade: 11,
            status: false
        },
        {
            id: 5,
            fullname: 'Carlos Martínez',
            email: 'carlos.martinez@example.com',
            phone: '5556543210',
            grade: 7,
            status: true
        },
        {
            id: 6,
            fullname: 'Lucía Fernández',
            email: 'lucia.fernandez@example.com',
            phone: '5558765432',
            grade: 12,
            status: false
        },
        {
            id: 7,
            fullname: 'Ricardo Gómez',
            email: 'ricardo.gomez@example.com',
            phone: '5553456789',
            grade: 10,
            status: true
        }
    ];

    getStudents(): Student[] {
        return this.students;
    }

    addStudent(student: Student): void {
        student.id = this.students.length + 1;
        this.students.unshift(student);
    }

}
