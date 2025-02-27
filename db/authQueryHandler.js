const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

async function registerUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    return prisma.users.create({
        data: {
            email: user.email,
            password: hashedPassword,
            first_name: user.first_name,
            last_name: user.last_name,
            author: Boolean(user.author)
        }
    });
}

async function getUserByUsername(username) {
    return prisma.users.findFirst({
        where: {
            email: username
        }
    })
}

module.exports = {
    registerUser,
    getUserByUsername
}