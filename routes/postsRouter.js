const { Router } = require("express");
const postsRouter = Router();
const postsController = require("../controllers/postsController");

postsRouter.get('/', postsController.getAllPosts);
postsRouter.get('/posts/:id', postsController.getPostById);
postsRouter.post('/posts', postsController.insertPost);

module.exports = postsRouter;