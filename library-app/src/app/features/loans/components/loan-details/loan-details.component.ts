import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoanService } from '../../services/loan.service';
import { Loan } from '../../models/loan.model';
import { showConfirmationWarning, showErrorToast, showSuccessToast } from '../../../../core/utils/sweet-alert-functions';

@Component({
  selector: 'app-loan-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.css'
})
export class LoanDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  loanService = inject(LoanService);
  loan: Loan | undefined;

  constructor() {
    const loanId = +(this.route.snapshot.params['id']);
    this.loan = this.loanService.getLoanDetailsById(loanId);
  }

  returnBook(loanId: number, loanStatus: boolean) {
    if (!loanStatus) {
      showConfirmationWarning(
        '¿Marcar libro como devuelto?',
        'Una vez marcado como devuelto, no podrá deshacer esta acción',
        'Sí, devolver',
        'Cancelar',
        () => {
          this.loanService.returnBook(loanId);
          this.loan = this.loanService.getLoanDetailsById(loanId);
          showSuccessToast('Libro devuelto exitosamente');
        }
      )
    } else {
      showErrorToast('Error', 'El libro ya ha sido devuelto');
    }
  }
}
