import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Loan } from "@prisma/client";
import { LoanService } from "./loan.service";

@Controller("api/loan")
export class LoanController {

    constructor(private readonly loanService: LoanService) { }

    @Post("/")
    createUser(@Body() loan: Loan) {
        return this.loanService.createLoan(loan);
    }

    @Get("/:loanId")//
    getUserByUsername(@Param('loanId', ParseIntPipe) id: number,) {
        return this.loanService.getLoanById(id);
    }

}