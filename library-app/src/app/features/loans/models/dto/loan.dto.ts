export interface LoanDto {
    id: number;
    userId: number;
    userFullName: string;
    bookId: number;
    bookTitle: string;
    startDate: string;
    endDate: string;
    returnedDate?: string;
    status: boolean;
}