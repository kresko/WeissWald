const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllPosts() {
    return prisma.posts.findMany({});
}

async function getPostById(id) {
    return prisma.posts.findFirst({
        where: {
            id: id
        }
    });
}

async function insertPost(body) {
    return prisma.posts.create({
        data: {
            userId: body.userId,
            title: body.title,
            text: body.text,
            is_published: body.is_published
        }
    });
}

module.exports = {
    getAllPosts,
    insertPost,
    getPostById
}