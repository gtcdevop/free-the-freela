import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Loan } from "@prisma/client";
import { LoanService } from "./loan.service";

@Controller("applications")
export class LoanController {

    constructor(private readonly loanService: LoanService) { }

    @Post("/")
    createUser(@Body() loan: Loan) {
        return this.loanService.createLoan(loan);
    }

    @Get("/")
    retrieveAllLoansApplications() {
        return this.loanService.getLoans();

    }

    @Get("/:loanId")//
    getUserByUsername(@Param('loanId') id: string) {
        return this.loanService.getLoanById(id);
    }

}