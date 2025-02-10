const express = require('express');
const app = express();

const postsRouter = require("./routes/postsRouter");

app.use("/", postsRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("Listening on port " + port);
});