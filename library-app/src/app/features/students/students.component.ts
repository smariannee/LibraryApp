import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Student } from './models/student.model';
import { StudentService } from './services/student.service';
import { showConfirmationWarning } from '../../core/utils/sweet-alert-functions';

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  students: Student[];
  studentService = inject(StudentService);

  constructor() {
    this.students = this.studentService.getStudents();
  }

  searchQuery = '';
  currentPage = 1;
  studentsPerPage = 5;

  get filteredStudents() {
    return this.students.filter(
      (student) =>
        student.fullname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get getPaginatedStudents() {
    const startIndex = (this.currentPage - 1) * this.studentsPerPage;
    const endIndex = startIndex + this.studentsPerPage;
    return this.filteredStudents.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredStudents.length / this.studentsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  changeStudentStatus(studentId: number) {
    showConfirmationWarning(
      '¿Cambiar estado del estudiante?',
      'Una vez cambiado el estado, no podrá deshacer esta acción',
      'Sí, cambiar',
      'Cancelar',
      () => {
        this.studentService.changeStudentStatus(studentId);
        this.students = this.studentService.getStudents();
      }
    )
  }
}
