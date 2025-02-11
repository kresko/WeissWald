const db = require('../db/postsQueryHandler');
const prisma = require("@prisma/client");

async function getAllPosts(req, res) {
    const posts = await db.getAllPosts();

    return res.json(posts);
}

module.exports =  {
    getAllPosts,
}