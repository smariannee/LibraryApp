import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoanDto } from './models/dto/loan.dto';
import { LoanService } from './services/loan.service';

@Component({
  selector: 'app-loans',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  loans: LoanDto[];
  loanService = inject(LoanService);

  constructor() {
    this.loans = this.loanService.getloans();
  }

  searchQuery = '';
  currentPage = 1;
  loansPerPage = 4;

  get filteredLoans() {
    return this.loans.filter(
      (loan) =>
        loan.book.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        loan.student.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get paginatedloans() {
    const startIndex = (this.currentPage - 1) * this.loansPerPage;
    const endIndex = startIndex + this.loansPerPage;
    return this.filteredLoans.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredLoans.length / this.loansPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
