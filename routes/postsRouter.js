const { Router } = require("express");
const postsRouter = Router();
const postsController = require("../controllers/postsController");

postsRouter.get('/', postsController.getAllPosts);

module.exports = postsRouter;