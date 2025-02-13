const db = require('../db/postsQueryHandler');

async function getAllPosts(req, res) {
    const posts = await db.getAllPosts();

    return res.json(posts);
}

async function getPostById(req, res) {
    const id = req.params.id;
    const post = db.getPostById(id);

    return res.json(post);
}

async function insertPost(req, res) {
    try {
        await db.insertPost(req.body);

        return res.json('Post created!');
    } catch(e) {
        console.log(e);
    }
}

module.exports =  {
    getAllPosts,
    getPostById,
    insertPost,
}