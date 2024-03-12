import { Loan } from '@prisma/client';
import { db } from '../../connection'


export async function fetchLoans(): Promise<Loan[]> {
    return await db.loan.findMany({
        orderBy: [
            {
                updatedAt: 'desc',
            }
        ],
    })
}

export async function fetchPostById(id: string): Promise<Loan | null> {
    const loan = await db.loan.findFirst({
        where: {
            id: id
        }
    })

    return loan
}

export async function createLoan(loan: Loan): Promise<Loan> {
    loan.createdAt = new Date();
    loan.updatedAt = new Date();
    return await db.loan.create({
        data: {
            ...loan,
        }
    })
}