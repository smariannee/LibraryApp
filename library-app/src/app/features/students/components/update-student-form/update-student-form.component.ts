import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { showConfirmationQuestion, showSuccessToast } from '../../../../core/utils/sweet-alert-functions';

@Component({
  selector: 'app-update-student-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './update-student-form.component.html',
  styleUrl: './update-student-form.component.css'
})
export class UpdateStudentFormComponent {

  studentService = inject(StudentService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  studentForm!: FormGroup;
  student: Student | undefined;

  ngOnInit(): void {
    const studentId = +this.route.snapshot.paramMap.get('id')!;
    const student = this.studentService.getStudentById(studentId);

    if (!student) {
      alert('Estudiante no encontrado');
      this.router.navigate(['/students']);
      return;
    }

    this.student = student;

    this.studentForm = new FormGroup({
      fullname: new FormControl(student.fullname, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(student.email, [Validators.required, Validators.email]),
      phone: new FormControl(student.phone, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      grade: new FormControl(student.grade, [Validators.required, Validators.min(1), Validators.max(12)])
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      showConfirmationQuestion(
        '¿Actualizar este estudiante?',
        '¿Estás seguro de que deseas actualizar este estudiante?',
        'Sí, actualizar',
        'Cancelar',
        () => {
          this.studentService.updateStudent({
            id: this.student?.id,
            fullname: this.studentForm.value.fullname!,
            email: this.studentForm.value.email!,
            phone: this.studentForm.value.phone!,
            grade: this.studentForm.value.grade!,
            status: this.student?.status!
          });

          showSuccessToast(
            'Estudiante actualizado',
            () => {
              this.router.navigate(['/students']);
            }
          );
        }
      )
    }
  }

}
