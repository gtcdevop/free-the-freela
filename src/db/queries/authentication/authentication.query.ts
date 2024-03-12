import { PrismaClient, User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

// Fetch user authentication data by email
export const getUserByUsername = async (username: string, password: string) => {
    const user = await prisma.user.findFirst({
        where: {
            username: {
                equals: username,
            },
            password: {
                equals: password
            }
        },
        select: {
            id: true,
            username: true,
            password: true,
            isAdmin: true,
            isApplicant: true,
        },
    });

    return user;
};

export const createUser = async (user: User) => {
    const newUser = await prisma.user.create({
        data: {
            id: uuidv4(),
            username: user.username,
            password: user.password,
            isApplicant: true
        },
    });

    return newUser;
}

// Fetch user authentication data by ID
export const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            username: true,
            password: true,
        },
    });

    return user;
};
