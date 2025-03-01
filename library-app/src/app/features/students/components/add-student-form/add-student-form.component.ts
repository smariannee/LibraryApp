import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { showConfirmationQuestion, showSuccessToast } from '../../../../core/utils/sweet-alert-functions';

@Component({
  selector: 'app-add-student-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-student-form.component.html',
  styleUrl: './add-student-form.component.css'
})
export class AddStudentFormComponent {
  router = inject(Router);
  studentService = inject(StudentService);

  studentForm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    grade: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(12)])
  })

  onSubmit() {
    if (this.studentForm.valid) {
      showConfirmationQuestion(
        '¿Registrar estudiante?',
        '¿Estás seguro de que deseas registrar el estudiante?',
        'Sí, registrar',
        'Cancelar',
        () => {
          this.studentService.addStudent({
            fullname: this.studentForm.value.fullname!,
            email: this.studentForm.value.email!,
            phone: this.studentForm.value.phone!,
            grade: this.studentForm.value.grade!,
            status: true
          });

          showSuccessToast(
            'Estudiante registrado éxitosamente',
            () => {
              this.router.navigate(['/students']);
              this.studentForm.reset();
            }
          );
        }
      );
    }
  }
}
