const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//tu pazi, stavi await natrag ako ce biti potrebno
async function getAllPosts() {
    return prisma.posts.findMany({});
}

module.exports = {
    getAllPosts,
}