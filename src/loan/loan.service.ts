import { Injectable } from "@nestjs/common";
import { createLoan, fetchLoanById, fetchLoans } from "src/db/queries/loan/loan.query";

@Injectable()
export class LoanService {

    constructor() { }

    getLoanById(id: string) {
        return fetchLoanById(id)
    }

    getLoans() {
        return fetchLoans();
    }

    createLoan(data: any) {
        return createLoan(data)
    }
}