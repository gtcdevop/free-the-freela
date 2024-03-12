import { Injectable } from "@nestjs/common";

@Injectable()
export class LoanService {

    constructor() { }

    getLoanById(id: number) {
        return `This action returns a #${id} loan`;
    }

    createLoan(data: any) {
        return `This action creates a new loan`;
    }
}